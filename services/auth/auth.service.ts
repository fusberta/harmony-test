import { gql } from "@apollo/client";
import { IAuth, IAuthResponse, ITokens, Profile, ProfileResponse } from "@/types/auth.interface";
import { saveTokensStorage } from "./auth.helper";
import Cookies from "js-cookie"
import { REFRESH_TOKEN } from "@/assets/constants";
import { authorizedClient, client } from "../apollo.client";

export const AuthService = {
    async login(data: IAuth) {
        const LOGIN_MUTATION = gql`
          mutation Login($email: String!, $password: String!) {
            login(email: $email, password: $password) {
              access_token
              refresh_token
            }
          }
        `
        const mutation = LOGIN_MUTATION

        try {
            const response = await client.mutate<IAuthResponse>({
                mutation,
                variables: { email: data.email, password: data.password }
            });
            console.log(response.data?.login)
            if (response.data) {
                saveTokensStorage(response.data.login);
                return response.data;
            }

            throw new Error("Authentication failed");
        } catch (error) {
            console.error("Authentication error:", error);
            throw error;
        }
    },

    async getProfile(): Promise<Profile> {
        const GET_PROFILE_QUERY = gql`
            query {
                myProfile {
                id
                name
                avatar
                }
            }`;
        try {
            const response = await authorizedClient.query<ProfileResponse>({
                query: GET_PROFILE_QUERY,
            });

            return response.data.myProfile;
        } catch (error) {
            console.error('Error fetching profile:', error);
            throw new Error('Failed to fetch profile');
        }
    },

    async getNewTokens() {
        const refreshToken = Cookies.get(REFRESH_TOKEN);

        if (!refreshToken) throw new Error('No refresh token found');

        const REFRESH_TOKEN_MUTATION = gql`
          mutation RefreshToken($refreshToken: String!) {
            refreshToken(refreshToken: $refreshToken) {
              access_token
              refresh_token
            }
          }
        `;

        try {
            const response = await client.mutate<ITokens>({
                mutation: REFRESH_TOKEN_MUTATION,
                variables: { refreshToken }
            });

            if (response.data) {
                saveTokensStorage(response.data);
                return response.data;
            }

            throw new Error("Token refresh failed");
        } catch (error) {
            console.error("Token refresh error:", error);
            throw error;
        }
    }
}
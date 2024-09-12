export interface IAuth {
    email: string;
    password: string;
}

export interface ITokens {
    accessToken: string
    refreshToken: string
}

export interface Profile {
    id: string;
    name: string;
    avatar: string;
}

export interface ProfileResponse {
    myProfile: Profile;
}
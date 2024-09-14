export interface IAuth {
    email: string;
    password: string;
}

export interface ITokens {
    access_token: string
    refresh_token: string
}

export interface IAuthResponse {
    login: ITokens
}

export interface Profile {
    id: string;
    name: string;
    avatar: string;
}

export interface ProfileResponse {
    myProfile: Profile;
}
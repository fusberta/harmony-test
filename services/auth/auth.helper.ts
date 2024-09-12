import { ACCESS_TOKEN, REFRESH_TOKEN } from "@/assets/constants"
import { ITokens } from "@/types/auth.interface"
import Cookies from "js-cookie"

export const getAccessToken = () => {
    const accessToken = Cookies.get(ACCESS_TOKEN)
    return accessToken || null
}

export const saveTokensStorage = (data: ITokens) => {
    Cookies.set(ACCESS_TOKEN, data.accessToken)
    Cookies.set(REFRESH_TOKEN, data.refreshToken)
}

export const removeTokensFromStorage = () => {
    Cookies.remove(ACCESS_TOKEN)
    Cookies.remove(REFRESH_TOKEN)
}
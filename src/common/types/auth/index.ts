export interface IPropsLogin {
    setPassword: (value : string) => void
    setEmail: (value : string) => void
    navigate: (to: string) => void
}
export  interface  IPropsRegistration {
    setPassword: (value : string) => void
    setEmail: (value : string) => void

    setUserName: (value : string) => void,

    setFirstName: (value : string) => void

    setRepeatPassword: (value : string) => void
    navigate: (to: string) => void
}

export interface ICheckData {
    email: string
    password: string
    repeatPassword: string
    firstName: string
    username: string


}

export interface IAuthState {
    user: IPublicUser
    isLogged: boolean


}

export interface IPublicUser {
    id: number | null
    firstName: string
    username: string
    email: string

    createdAt:string

    updatedAt:string
    watchlist: [IWatchlist]
}

interface IWatchlist {
    id: number | null
    name: string
    email: string

    assetId: string

    createdAt:string

    updatedAt:string

    user: number | null
}
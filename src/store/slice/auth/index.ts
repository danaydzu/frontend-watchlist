import {createSlice} from "@reduxjs/toolkit";
import {IAuthState} from "../../../common/types/auth";

const initialState: IAuthState = {
    user: {
        id: null,
        firstName: '',
        username: '',
        email: '',

        createdAt:'',

        updatedAt:'',
        watchlist: [{
            id: null,
            name: '',
            email: '',

            assetId: '',

            createdAt:'',

            updatedAt:'',

            user: null,
        }]},
    isLogged: false
}

export const authSlice: any = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login(state, action) {

            state.user = action.payload
            state.isLogged = true

        }
    }
})

export const {login} = authSlice.actions
export default authSlice.reducer
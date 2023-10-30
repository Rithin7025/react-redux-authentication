import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userInfo : localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null
}


const authSlice = createSlice({
    name : 'auth', //name for this slice
    initialState, 
    reducers : { //here we specify the individual state transitions
        setCredentials : (state, action) =>{
            state.userInfo = action.payload;
            localStorage.setItem('userInfo',JSON.stringify(action.payload))
        },
        logout : (state,action) => {
            state.userInfo = null;
            localStorage.removeItem('userInfo')
        }
    }
})

//reducer as default and actions as named exports


export const {setCredentials, logout } = authSlice.actions;

export default authSlice.reducer;
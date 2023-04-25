import { createSlice } from "@reduxjs/toolkit"
import { bookAppoinment, getDoctorsAction, loginUser, registerUser } from "./publicActions"
const publicSlice = createSlice({
    name: "public",
    initialState: {
        info: JSON.parse(localStorage.getItem("info"))
    },
    reducers: {
        invalidate: (state, { payload }) => {
            state[payload] = null
        },
        logout: (state, { payload }) => {
            state.info = null
            localStorage.removeItem("info")
        }
    },
    extraReducers: builder => {
        builder
            .addCase(registerUser.pending, (state, { payload }) => {
                state.loading = true
            })
            .addCase(registerUser.fulfilled, (state, { payload }) => {
                state.loading = false
                state.register = true
            })
            .addCase(registerUser.rejected, (state, { payload }) => {
                state.loading = false
                state.error = payload
            })

            .addCase(loginUser.pending, (state, { payload }) => {
                state.loading = true
            })
            .addCase(loginUser.fulfilled, (state, { payload }) => {
                state.loading = false
                state.info = payload
            })
            .addCase(loginUser.rejected, (state, { payload }) => {
                state.loading = false
                state.error = payload
            })

            .addCase(getDoctorsAction.pending, (state, { payload }) => {
                state.loading = true
            })
            .addCase(getDoctorsAction.fulfilled, (state, { payload }) => {
                state.loading = false
                state.doctors = payload
            })
            .addCase(getDoctorsAction.rejected, (state, { payload }) => {
                state.loading = false
                state.error = payload
            })

            .addCase(bookAppoinment.pending, (state, { payload }) => {
                state.loading = true
            })
            .addCase(bookAppoinment.fulfilled, (state, { payload }) => {
                state.loading = false
                state.book = true
            })
            .addCase(bookAppoinment.rejected, (state, { payload }) => {
                state.loading = false
                state.error = payload
            })
    }
})

export const { invalidate, logout } = publicSlice.actions
export default publicSlice.reducer
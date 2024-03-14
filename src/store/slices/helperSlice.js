import { createSlice } from "@reduxjs/toolkit";



const helperSlice = createSlice({

    name:"helper",
    initialState:{
        showWave:false
    },
    reducers: {
        

        updateHelperSlice(state, action){


            state[action.payload.name] = action.payload.value
        }
        

      },
})


export const {updateHelperSlice} = helperSlice.actions;
export default helperSlice.reducer;
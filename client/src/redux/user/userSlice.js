import { createSlice } from "@reduxjs/toolkit"


    const initialstate={
        currentUser:null,
        error:null,
        loading:false,
    };
export const userSlice=createSlice({
     name:'User',
     initialstate,
     reducers:{
        
     }
     
})
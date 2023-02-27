import {createSlice} from '@reduxjs/toolkit';



const initialState = {
    value:0,
}

const counterSlice=createSlice({
    initialState,
    name:"counter",
    reducers:{
        set:(state)=>{
            const limit = Math.max( document.body.scrollHeight, document.body.offsetHeight, 
                document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight );
            
            var gap=limit/100;
            var ropca=window.scrollY/gap;

            state.value=ropca;
        },
        
    },
})

export const {set}=counterSlice.actions;

export default counterSlice.reducer;
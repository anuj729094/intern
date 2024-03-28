import { createReducer } from "@reduxjs/toolkit";

const initialstates = {
    taskbox:false,
    taskarray:[]
   
}


export const taskreducer2 = createReducer(initialstates , (builder)=>{
     builder.addCase("taskboxtoggle" , (state,action)=>{
        state.taskbox=action.payload
     })
     builder.addCase("addtask" , (state , action)=>{
      state.taskarray=[...state.taskarray , action.payload]
     })
     builder.addCase("updatedeletetask" , (state ,action)=>{
       state.taskarray=action.payload
     })
})
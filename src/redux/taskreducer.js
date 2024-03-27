import { createReducer } from "@reduxjs/toolkit";

const initialstates = {
    taskbox:false,
    progress:[],
    pending:[],
    deffered:[],
    deployed:[],
    completed:[]
}


export const taskreducer2 = createReducer(initialstates , (builder)=>{
     builder.addCase("taskboxtoggle" , (state,action)=>{
        state.taskbox=action.payload
     })
     builder.addCase("pending" , (state,action)=>{
        state.pending=[...state.pending , action.payload]
     })
     builder.addCase("completed" , (state,action)=>{
        state.completed=[...state.completed , action.payload]
     })
     builder.addCase("progress" , (state,action)=>{
        state.progress=[...state.progress , action.payload]
     })
     builder.addCase("deployed" , (state,action)=>{
        state.deployed=[...state.deployed , action.payload]
     })
     builder.addCase("deffered" , (state,action)=>{
        state.deffered=[...state.deffered , action.payload]
     })
})
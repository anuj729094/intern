import { configureStore } from "@reduxjs/toolkit";
import {taskreducer2} from './taskreducer'
export const store = configureStore({
    reducer:{
        task:taskreducer2
    }
})
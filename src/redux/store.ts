import { configureStore } from "@reduxjs/toolkit";
import reducer, { rootSlice } from "./slices/RootSlice";

export default configureStore({
    reducer,
    devTools: true
})
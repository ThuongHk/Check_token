import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from 'redux-saga';
import navigateSlice from "./navigateSlice";
import { rootSaga } from "./saga/rootSaga";

const saga = createSagaMiddleware();

export const store = configureStore({
    reducer: {
        navigateSlice
    },
    middleware: [saga]
   
})
saga.run(rootSaga);


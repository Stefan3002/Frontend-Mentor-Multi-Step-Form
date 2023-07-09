import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import {utilsReducer} from "./utils-reducer/utils-reducer";
import {logger} from "redux-logger/src";


const middleWares = [logger]
const enhancers = compose(applyMiddleware(...middleWares))

const rootReducer = combineReducers({
    utils: utilsReducer
})


export const store = createStore(rootReducer, undefined, enhancers)


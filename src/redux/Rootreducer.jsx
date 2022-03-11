import { combineReducers } from "redux";
import reducers from "./async/AsyncReducers";
import cakeReducer from "./cake/cakeReducer";
import IcecreamReducer from "./icecream/IcecreamReducers";



const rootReducer = combineReducers({
    cake: cakeReducer,
    icecream: IcecreamReducer,
    user: reducers
})

export default rootReducer
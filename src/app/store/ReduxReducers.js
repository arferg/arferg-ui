import { combineReducers } from "redux"
import { headerReducer } from "./header/Reducers"
import {connectRouter} from "connected-react-router";

export default history =>
    combineReducers({
        router: connectRouter(history),
        header: headerReducer
    });

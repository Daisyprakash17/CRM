import { combineReducers } from "redux";

import {reducer as translateReducer} from "./translate"
import {reducer as authReducer} from './auth'

const rootReducer=combineReducers({
    translate:translateReducer,
    auth:authReducer
})

export default rootReducer;
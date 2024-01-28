import { combineReducers } from "redux";

import {reducer as translateReducer} from "./translate"


const rootReducer=combineReducers({
    translate:translateReducer,
})

export default rootReducer;
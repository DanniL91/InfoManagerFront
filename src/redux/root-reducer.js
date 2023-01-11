import {combineReducers} from "redux";
import personsReducers  from "./reducer";

const rootReducer = combineReducers({
    data: personsReducers
});

export default rootReducer;
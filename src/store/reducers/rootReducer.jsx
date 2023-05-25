// Gộp những reducer lại một chỗ với combineReducers của redux
import appReducer from "./appReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
    app: appReducer,
});

export default rootReducer;

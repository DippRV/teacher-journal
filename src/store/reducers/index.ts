import {combineReducers} from "redux";
import {classesReducer} from "./classesReducer";

export const rootReducer = combineReducers({
    classes: classesReducer
});

export type RootState = ReturnType<typeof rootReducer>;
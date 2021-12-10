import {ClassActionType, ClassActionTypes, ClassesState} from "../../types/class"

const initialState : ClassesState = {
    classes: [],
    loading: false,
    error: null
}

export const classesReducer = (state = initialState, action: ClassActionType) : ClassesState => {
    switch (action.type) {
        case ClassActionTypes.FETCH_CLASSES:
            return {loading: true, error: null, classes: []}
        case ClassActionTypes.FETCH_CLASSES_SUCCESS:
            return {loading: false, error: null, classes: action.payload}
        case ClassActionTypes.FETCH_CLASSES_ERROR:
            return {loading: false, error: action.payload, classes: []}
        default:
            return state;
    }
}
import {Dispatch} from "redux";
import {ClassActionType, ClassActionTypes} from "../../types/class";

export const fetchClasses = () => {
    return async (dispatch: Dispatch<ClassActionType>) => {
        try {
            dispatch({type: ClassActionTypes.FETCH_CLASSES});
            const response: any[] = [];
            dispatch({type: ClassActionTypes.FETCH_CLASSES_SUCCESS, payload: response})
        }
        catch (e) {
            dispatch({type: ClassActionTypes.FETCH_CLASSES_ERROR, payload: "Ошибка получения классов!"});
        }
    }
}
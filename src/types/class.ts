export interface ClassesState {
    classes: any[];
    loading: boolean;
    error: null | string;
}

export enum ClassActionTypes {
    FETCH_CLASSES = "FETCH_CLASSES",
    FETCH_CLASSES_SUCCESS = "FETCH_CLASSES_SUCCESS",
    FETCH_CLASSES_ERROR = "FETCH_CLASSES_ERROR",
    ADD_CLASS = "ADD_CLASS",
    ADD_CLASS_SUCCESS = "ADD_CLASS_SUCCESS",
    ADD_CLASS_ERROR = "ADD_CLASS_ERROR",
    DELETE_CLASS = "DELETE_CLASS",
    DELETE_CLASS_SUCCESS = "DELETE_CLASS_SUCCESS",
    DELETE_CLASS_ERROR = "DELETE_CLASS_ERROR",
    UPDATE_CLASS = "UPDATE_CLASS",
    UPDATE_CLASS_SUCCESS = "UPDATE_CLASS_SUCCESS",
    UPDATE_CLASS_ERROR = "UPDATE_CLASS_ERROR",
}

interface FetchClassesAction {
    type: ClassActionTypes.FETCH_CLASSES
}

interface FetchClassesSuccessAction {
    type: ClassActionTypes.FETCH_CLASSES_SUCCESS;
    payload: any[]
}

interface FetchClassesErrorAction {
    type: ClassActionTypes.FETCH_CLASSES_ERROR;
    payload: string
}

export type ClassActionType =  FetchClassesAction | FetchClassesSuccessAction | FetchClassesErrorAction;
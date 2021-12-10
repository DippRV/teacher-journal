import {useDispatch} from "react-redux";
import {bindActionCreators} from "redux";
import * as ClassActionCreators from "../store/action-creators/class"

export const useClassActions = () => {
    const dispatch = useDispatch();
    return bindActionCreators(ClassActionCreators, dispatch)
}
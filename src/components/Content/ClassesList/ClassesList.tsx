import React, {useEffect} from 'react';
import {useTypedSelector} from "../../../hooks/useTypedSelector";
import {fetchClasses} from "../../../store/action-creators/class";
import {useClassActions} from "../../../hooks/useClassActions"

const ClassesList: React.FC = () => {
    const {classes, loading, error} = useTypedSelector(state => state.classes)
    const {fetchClasses} = useClassActions();
    useEffect(() => {
        fetchClasses();
    }, []);
    return (
        <div>
            
        </div>
    );
};
export default ClassesList;
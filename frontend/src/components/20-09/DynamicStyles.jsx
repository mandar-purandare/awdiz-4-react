import React, {useState} from "react";
import './DynamicStyles.css';

function DynamicStyles(){

    const [isActive, setIsActive] = useState(false);

    function toggleState(){
        setIsActive(state => !state);
    }

    let value = isActive? 'Active' : 'Inactive';

    let classNameValue = isActive? 'active-button':'inactive-button';

    return(
        <div>
            <h1>Dynamic Styles</h1>
            <button className={classNameValue} onClick={toggleState}>{value}</button>
        </div>
    )
}

export default DynamicStyles;
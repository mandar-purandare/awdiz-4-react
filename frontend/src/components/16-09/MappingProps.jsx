import React from "react";

function MappingProps({greeting,names}){

    return(
        <div>
            <h1>Name List (using Mapping and Props)</h1>
            {names.map((name,idx) => (
                <h2 key={idx}>{greeting}{name} your id is {idx}</h2>
            ))}
            
        </div>
    )
}

export default MappingProps;
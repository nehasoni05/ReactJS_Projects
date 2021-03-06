import React from "react";

const OutputScreenRow = (props) =>
{
    return(
        <div className="row">
            <input type="text"
            value={props.value} disabled/>
        </div>
    )
}

export default OutputScreenRow;

import React from "react"
import Button from "./Button"

function Comments({ data, handleClick, renderComments, butComments }) {

    return (
        <div className="Comments">
            <Button classThing={"comment"} prop={butComments} handleClick={handleClick} emoji="" />
            <h2>{data.comments.length} Comments</h2>
            {renderComments(data.comments)}
        </div>
    );
}

export default Comments;
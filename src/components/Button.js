import React from "react"


function Button({ prop, handleClick, emoji, classThing}) {

    console.log(classThing)

    return (
        <button className={classThing} onClick={handleClick}>{prop}{emoji}</button>
    );
}

export default Button;
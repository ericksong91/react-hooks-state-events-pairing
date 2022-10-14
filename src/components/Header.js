import React, {useState} from "react"
import Button from "./Button"

function Header( {data} ) {
    const [upVotes, setUpVotes] = useState(data.upvotes);
    const [downVotes, setDownVotes] = useState(data.downvotes);

    function handleClick(e){
        const buttonType = e.target.className;

        if(buttonType === "upVote"){
            setUpVotes(()=>{
                return upVotes + 1
            })
        }else{
            setDownVotes(()=>{
                return downVotes + 1
            })
        }
    }

  return (
    <div className="Header">
        <h1>{data.title}</h1>
        <h5>{data.views} | Uploaded {data.createdAt}</h5>
        <Button classThing={"upVote"} prop={upVotes} handleClick={handleClick} emoji="👍" />
        <Button classThing={"downVote"} prop={downVotes} handleClick={handleClick} emoji="👎" />
    </div>
  );
}

export default Header;
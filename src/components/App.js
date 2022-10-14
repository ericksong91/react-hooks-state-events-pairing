import React, { useState } from "react"
import Header from "./Header"
import Video from "./Video"
import Comments from "./Comments"
import video from "../data/video.js";

function App() {
  console.log("Here's your data:", video);
  const [butComments, setButComments] = useState("Hide Comments");

  function renderComments(data) {

    if (butComments === "Show Comments") {
      return 

    } else {
      const newArr = data.map((dat) => {
        return (
          <div>
            <h3>{dat.user}</h3>
            <p>{dat.comment}</p>
          </div>
        )
      })
      return newArr
    }


  }

  function handleClick(e) {
    console.log(e)
    if (butComments === "Hide Comments") {
      setButComments("Show Comments")
    } else {
      setButComments("Hide Comments")
    }
  }

  return (
    <div className="App">
      <Video data={video} />
      <Header data={video} />
      <Comments data={video} handleClick={handleClick} renderComments={renderComments} butComments={butComments} />
    </div>
  );
}

export default App;

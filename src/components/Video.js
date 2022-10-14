import React from "react"

function Video({ data }) {
    
    return (
        <div className="Video">
            <iframe
                width="919"
                height="525"
                src={data.embedUrl}
                frameBorder="0"
                allowFullScreen
                title={data.title}
            />
        </div>
    );
}

export default Video;
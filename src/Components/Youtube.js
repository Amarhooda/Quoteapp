import React from 'react'
import youtube from './youtube.gif'
function Youtube() {
  return (
    <div className="flex  flex-row items-center justify-center p-3">
      <div className="m-5">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/WBqo0Bbr8W8"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
      <div className="text-2xl bg-blue-200 rounded-xl">
        <p className="m-4">
          {" "}
          Subscribe this channel{" "}
          <a href="https://www.youtube.com/@Motquote" target="_blank">
            <img src={youtube} alt="Youtube" className="w-28 inline-block" /> Here
          </a>
        </p>
      </div>
    </div>
  );
}

export default Youtube
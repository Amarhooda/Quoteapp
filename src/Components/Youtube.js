import React from 'react'
import youtube from './youtube.gif';
import index from './app.css'
function Youtube() {
  return (
    <div className="flex colum flex-row items-center justify-center p-3">
      <div className="m-5 ">
        <iframe
          className="ytv"
          width="560"
          height="315"
          src="https://www.youtube.com/embed/WBqo0Bbr8W8"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <div className="text-2xl bg-blue-200 rounded-xl para">
        <p className="m-4 ">
          {" "}
          Subscribe this channel{" "}
          <a
            href="https://www.youtube.com/@Motquote"
            rel="noreferrer"
            target="_blank"
          >
            <img src={youtube} alt="Youtube" className="w-28 inline-block" />{" "}
            Here
          </a>
        </p>
      </div>
    </div>
  );
}

export default Youtube
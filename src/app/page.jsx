'use client'
import { useState } from "react";
import Home from "./home/page";
import ReactPlayer from "react-player/youtube";
import { RxCross2 } from "react-icons/rx";

export default function App() {
  const [video, setVideo] = useState();
  return (
    <>
    <Home video={video} setVideo={setVideo}/>
    {video && (
          <div className="ns-yt-video-box">
            <RxCross2 className="ns-cross-video" onClick={()=>setVideo("")}/>
            <div className="ns-yt-video">
              <ReactPlayer
                url="https://www.youtube.com/watch?v=jGQCn1mTps0"
                config={{
                  youtube: {
                    playerVars: { showinfo: 1 },
                  },
                  facebook: {
                    appId: "12345",
                  },
                }}
                controls={true}
              />
            </div>
          </div>
        )}
    </>
  );
}

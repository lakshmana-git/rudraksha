"use client";

import { useEffect, useState } from "react";

export default function BackgroundVideo() {
  const [videoSrc, setVideoSrc] = useState("/video_solar.mp4");

  useEffect(() => {
    // Detect screen size on mount and update video source
    if (window.innerWidth < 768) {
      setVideoSrc("/video-mobile.mp4");
    }
  }, []);

  return (
    <video
      className="absolute top-0 left-0 w-full h-full object-cover"
      autoPlay
      loop
      muted
      playsInline
    >
      <source src={videoSrc} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
}

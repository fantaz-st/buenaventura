"use client";

import { useRef, useEffect } from "react";
import Hls from "hls.js";

export default function HLSVideo({ src, poster, ...props }) {
  const videoRef = useRef();

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (Hls.isSupported()) {
      const hls = new Hls({
        /* optional config: debug: true */
      });
      hls.loadSource(src);
      hls.attachMedia(video);
      return () => hls.destroy();
    } else if (video.canPlayType("application/vnd.apple.mpegurl")) {
      // Safari/iOS native HLS
      video.src = src;
    }
  }, [src]);

  return <video ref={videoRef} poster={poster} preload='metadata' playsInline muted autoPlay loop width='100%' height='100%' {...props} />;
}

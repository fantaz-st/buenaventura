import { useState, useRef, useEffect } from "react";

const VideoPlayer = () => {
  const [loadingPercentage, setLoadingPercentage] = useState(0);
  const videoRef = useRef(null);

  useEffect(() => {
    const videoElement = videoRef.current;

    const updateProgress = () => {
      if (videoElement.buffered.length > 0) {
        const bufferedEnd = videoElement.buffered.end(videoElement.buffered.length - 1);
        const duration = videoElement.duration;
        if (duration > 0) {
          const percent = Math.floor((bufferedEnd / duration) * 100);
          setLoadingPercentage(percent);
        }
      }
    };

    const handleCanPlayThrough = () => {
      setLoadingPercentage(100);
    };

    const handleLoadedData = () => {
      if (videoElement.readyState >= 2) {
        setLoadingPercentage(100);
      }
    };

    videoElement.addEventListener("progress", updateProgress);
    videoElement.addEventListener("canplaythrough", handleCanPlayThrough);
    videoElement.addEventListener("loadeddata", handleLoadedData);

    return () => {
      videoElement.removeEventListener("progress", updateProgress);
      videoElement.removeEventListener("canplaythrough", handleCanPlayThrough);
      videoElement.removeEventListener("loadeddata", handleLoadedData);
    };
  }, []);

  return (
    <div style={{ position: "relative" }}>
      {loadingPercentage < 100 && (
        <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}>
          <p style={{ fontSize: "2rem", fontWeight: 500, color: "#fff" }}>Loading: {loadingPercentage}%</p>
        </div>
      )}
      <video ref={videoRef} width='100%' height='100%' autoPlay muted loop>
        <source src='felix37.mp4' type='video/mp4' />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoPlayer;

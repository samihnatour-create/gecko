"use client";
import { useRef, useState } from "react";
import { Play } from "lucide-react";
import { site } from "@/lib/content";

// The VSL. Playback is user-initiated; an empty or failed source shows the branded cover.
export function VideoPlayer() {
  const video = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);
  const [failed, setFailed] = useState(false);
  const { src, poster, label, pending, unavailable } = site.hero.video;
  const hasVideo = Boolean(src) && !failed;
  const play = async () => {
    try {
      await video.current?.play();
    } catch {
      setFailed(true);
    }
  };
  return (
    <div className={`vsl-player ${playing ? "is-playing" : ""}`}>
      {hasVideo && (
        <video
          ref={video}
          src={src}
          poster={poster || undefined}
          controls={playing}
          playsInline
          preload="metadata"
          onPlay={() => setPlaying(true)}
          onPause={() => setPlaying(false)}
          onError={() => setFailed(true)}
          aria-label={label}
        />
      )}
      {!playing && (
        <div className={`vsl-cover ${hasVideo && poster ? "has-poster" : ""}`}>
          {!(hasVideo && poster) && (
            <div className="vsl-art" aria-hidden="true">
              <span className="vsl-type">Creative meets strategy.</span>
              <span className="vsl-mark">gecko media.</span>
            </div>
          )}
          <button className="vsl-play" onClick={play} disabled={!hasVideo} aria-label={hasVideo ? label : pending}>
            <span><Play size={28} fill="currentColor" aria-hidden="true" /></span>
            <strong>{label}</strong>
          </button>
          {!hasVideo && (
            <p className="vsl-pending" role="status">{failed ? unavailable : pending}</p>
          )}
        </div>
      )}
    </div>
  );
}

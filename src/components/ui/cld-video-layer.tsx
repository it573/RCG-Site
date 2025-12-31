"use client";

import { AdvancedVideo } from "@cloudinary/react";
import { CloudinaryVideo } from "@cloudinary/url-gen";

interface CLDVideoLayerProps {
  publicId: string;
  className?: string;
  style?: React.CSSProperties;
  autoPlay?: boolean;
  loop?: boolean;
  muted?: boolean;
  playsInline?: boolean;
  onLoadStart?: () => void;
  cldVid: CloudinaryVideo;
}

export default function CLDVideoLayer({
  cldVid,
  className,
  style,
  autoPlay = true,
  loop = true,
  muted = true,
  playsInline = true,
  onLoadStart,
}: CLDVideoLayerProps) {
  return (
    <AdvancedVideo
      cldVid={cldVid}
      className={className}
      style={style}
      autoPlay={autoPlay}
      loop={loop}
      muted={muted}
      playsInline={playsInline}
      onLoadStart={onLoadStart}
    />
  );
}

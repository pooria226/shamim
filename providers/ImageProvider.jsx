import React from "react";
import Image from "next/image";

export default function ImageProvider({
  alt,
  height = null,
  width = null,
  layout,
  unoptimized,
  priority,
  src,
  objectFit,
  styles,
}) {
  return (
    <>
      <Image
        objectFit={objectFit}
        src={src}
        alt={alt}
        blurDataURL="/images/image-placeholder.png"
        layout={layout}
        {...(layout != "fill" ? { height, width } : {})}
        unoptimized={unoptimized}
        priority={priority}
        style={styles}
      />
    </>
  );
}

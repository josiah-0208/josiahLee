import Image from 'next/image';
import React, { useState } from 'react';

type Props = {
  src: string;
  alt?: string;
  width: number;
  height: number;
  url: string;
  onClickEvent?: (url: string) => void;
};

function IconLink({ src, alt, width, height, url, onClickEvent }: Props) {
  return (
    <div
      className="inline-block"
      onClick={() => {
        onClickEvent && onClickEvent(url);
      }}
    >
      <Image src={src} alt={alt ?? 'icon'} width={width} height={height} />
    </div>
  );
}

export default IconLink;

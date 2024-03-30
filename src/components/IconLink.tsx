import Image from 'next/image';
import React from 'react';

type Props = {
  src: string;
  alt?: string;
  width: number;
  height: number;
};

function IconLink({ src, alt, width, height }: Props) {
  return (
    <div>
      <Image src={src} alt={alt ?? 'icon'} width={width} height={height} />
    </div>
  );
}

export default IconLink;

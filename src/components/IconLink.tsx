import Image from 'next/image';
import React, { useState } from 'react';
import Toast from './Toast';

type Props = {
  src: string;
  alt?: string;
  width: number;
  height: number;
  url?: string;
};

function IconLink({ src, alt, width, height, url }: Props) {
  const [onToast, setOnToast] = useState(false);
  let wait: undefined | NodeJS.Timeout = undefined;
  function onClickHandler() {
    if (wait === undefined) {
      navigator.clipboard.writeText(url ?? 'Hi :)');
      if (url?.startsWith('http')) {
        window.open(url);
      }
      setOnToast(true);
      wait = setTimeout(() => {
        setOnToast(false);
        wait = undefined;
      }, 3000);
    }
  }

  return (
    <div onClick={onClickHandler}>
      <Image src={src} alt={alt ?? 'icon'} width={width} height={height} />
      {onToast ? <Toast /> : null}
    </div>
  );
}

export default IconLink;

'use client';
import React, { useEffect, useState } from 'react';

type Props = {
  text: string;
  setImgUrl: React.Dispatch<React.SetStateAction<string>>;
  onEnterUrl: string;
  onLeaveUrl?: string;
};

function HoverATag({ text, setImgUrl, onEnterUrl, onLeaveUrl }: Props) {
  const [style, setStyle] = useState('cursor-pointer inline-block');

  function getStyle() {
    return setTimeout(() => {
      if (style.includes('animate-pulse')) {
        setStyle('cursor-pointer inline-block');
      } else {
        setStyle(style + ' animate-once animate-pulse animate-ease-in');
      }
    }, Math.floor(Math.random() * 27) * 1000);
  }

  useEffect(() => {
    const timer = getStyle();

    return () => clearTimeout(timer);
  }, [style]);

  return (
    <a
      className={style}
      onMouseEnter={() => {
        setImgUrl(onEnterUrl);
      }}
      onMouseLeave={() => {
        setImgUrl(onLeaveUrl ?? '/static/images/myProfile.jpg');
      }}
    >
      {text}
    </a>
  );
}

export default HoverATag;

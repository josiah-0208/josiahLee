'use client';
import React, { useEffect, useState } from 'react';

type Props = {
  text: string;
  setImgUrl: React.Dispatch<React.SetStateAction<string>>;
  onEnterUrl: string;
  onLeaveUrl?: string;
};

function HoverATag({ text, setImgUrl, onEnterUrl, onLeaveUrl }: Props) {
  const [style, setStyle] = useState(`cursor-pointer inline-block`);

  function getStyle() {
    setTimeout(() => {
      setStyle(style + ' animate-once animate-jump animate-ease-in');
    }, Math.floor(Math.random() * 45) * 1000);
  }

  useEffect(() => {
    getStyle();
  }, []);

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

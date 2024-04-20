'use client';
import React, { useEffect, useState } from 'react';

type Props = {
  text: string;
  setImgUrl: React.Dispatch<React.SetStateAction<string>>;
  onEnterUrl: string;
  onLeaveUrl?: string;
  highlight?: boolean;
};

function HoverATag({
  text,
  setImgUrl,
  onEnterUrl,
  onLeaveUrl,
  highlight,
}: Props) {
  const defaultStyle = `cursor-pointer inline-block ${
    highlight ? 'text-highlightTextColor' : ''
  }`;
  const animationStyle = `${
    defaultStyle +
    ' animate-once animate-pulse animate-ease-in ' +
    (highlight ? 'text-highlightTextColor' : '')
  }`;
  const [style, setStyle] = useState(defaultStyle);

  function getStyle() {
    return setTimeout(() => {
      if (style.includes('animate-pulse')) {
        setStyle(defaultStyle);
      } else {
        setStyle(animationStyle);
      }
    }, Math.floor(Math.random() * 18) * 1000);
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

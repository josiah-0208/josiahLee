'use client';
import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

type Props = {};

function Toast({}: Props) {
  // 연속 터치를 block 하자
  const [portalContent, setPortalContent] = useState<React.ReactPortal | null>(
    null
  );

  useEffect(() => {
    setPortalContent(createPortal(<ToastUI />, document.body));
  }, []);
  return <div>{portalContent}</div>;
}

export default Toast;

function ToastUI(): React.JSX.Element {
  const [style, setStyle] = useState(
    'fixed bottom-4 w-full text-center animate-jump-in'
  );

  useEffect(() => {
    const timer = setTimeout(() => {
      setStyle('fixed bottom-4 w-full text-center animate-jump-out');
    }, 2600);

    return () => clearTimeout(timer);
  });

  return <div className={style}>🌲 Copied to clipboard 🌲</div>;
}

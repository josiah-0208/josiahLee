'use client';
import { useTranslations } from 'next-intl';
import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

type Props = {};

function Toast({}: Props) {
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
  const t = useTranslations('utils');
  const [style, setStyle] = useState(
    'fixed bottom-4 w-full text-center animate-fade'
  );

  useEffect(() => {
    const timer = setTimeout(() => {
      setStyle('fixed bottom-4 w-full text-center animate-fadeOut');
    }, 1700);

    return () => clearTimeout(timer);
  });

  return <div className={style}>🌲 {t('toast')} 🌲</div>;
}

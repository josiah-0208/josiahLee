'use client';
import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

type Props = {};

function Toast({}: Props) {
  const [portalContent, setPortalContent] = useState<React.ReactPortal | null>(
    null
  );

  useEffect(() => {
    setPortalContent(createPortal(<div>hi</div>, document.body));
  }, []);
  return <div>{portalContent}</div>;
}

export default Toast;

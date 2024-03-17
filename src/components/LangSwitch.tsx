'use client';
import React from 'react';
import { Link, usePathname } from '@/navigation';
import { useTranslations } from 'next-intl';

type Props = {};

function LangSwitch({}: Props) {
  const pathName = usePathname();
  const t = useTranslations('utils.lang');
  return (
    <div className="flex flex-col">
      <Link href={pathName} locale="kr">
        {t('kr')}
      </Link>
      <Link href={pathName} locale="en">
        {t('en')}
      </Link>
    </div>
  );
}

export default LangSwitch;

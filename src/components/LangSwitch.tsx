'use client';
import React from 'react';
import { Link, usePathname } from '@/navigation';
import { useLocale, useTranslations } from 'next-intl';

type Props = {};

function LangSwitch({}: Props) {
  const pathName = usePathname();
  const currLocale = useLocale();
  const t = useTranslations('utils.lang');

  return (
    <div className="h-full flex items-center">
      {currLocale === 'en' ? (
        <Link
          href={pathName}
          locale="kr"
          className="animate-fade h-full flex items-center align-middle"
        >
          {t('en')}
        </Link>
      ) : (
        <Link href={pathName} locale="en" className="animate-fade">
          {t('kr')}
        </Link>
      )}
    </div>
  );
}

export default LangSwitch;

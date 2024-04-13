'use client';
import React from 'react';
import { Link, usePathname } from '@/navigation';
import { useLocale, useTranslations } from 'next-intl';

type Props = {};

function LangSwitch({}: Props) {
  const pathName = usePathname();
  const currLocale = useLocale();
  const t = useTranslations('utils.lang');

  const style: string = 'animate-fade text-sm';

  return (
    <div className="p-2 flex items-center align-middle rounded-lg transition-background-color duration-300 hover:bg-gray-400/10">
      {currLocale === 'en' ? (
        <Link href={pathName} locale="kr" className={style}>
          {t('en')}
        </Link>
      ) : (
        <Link href={pathName} locale="en" className={style}>
          {t('kr')}
        </Link>
      )}
    </div>
  );
}

export default LangSwitch;

import { useTranslations } from 'next-intl';
import Image from 'next/image';
import React from 'react';

type Props = {};

function Introduction({}: Props) {
  const t = useTranslations('about');
  return (
    <div className="max-w-[768px] flex flex-col gap-8">
      <div className="flex gap-8 items-center">
        <Image
          className="rounded-3xl"
          src={'/static/images/myProfile.jpg'}
          alt="profileImage"
          width={216}
          height={216}
        />
        <div className="flex flex-col gap-2 h-48">
          <p className="whitespace-pre-wrap">{t('text_1')}</p>
          <p className="whitespace-pre-wrap">{t('text_2')}</p>
          <p className="whitespace-pre-wrap">{t('text_3')}</p>
          <div></div>
        </div>
      </div>
      <div className="rounded-xl border-textColor p-6 bg-scndBgColor">
        <p className="whitespace-pre-wrap">{t('text_4')}</p>
        <p className="whitespace-pre-wrap">{t('text_5')}</p>
      </div>
    </div>
  );
}

export default Introduction;

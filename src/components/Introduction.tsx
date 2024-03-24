'use client';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import React, { useState } from 'react';
import HoverATag from './HoverATag';

type Props = {};

function Introduction({}: Props) {
  const t = useTranslations('about');
  const [imgUrl, setImgUrl] = useState('/static/images/myProfile.jpg');
  return (
    <div className="max-w-[768px] flex flex-col gap-8">
      <div className="flex gap-8 items-center">
        <Image
          className="rounded-3xl"
          src={imgUrl}
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
        <p className="whitespace-pre-wrap ">
          {t('text_4._1')}
          <HoverATag
            text={t('text_4._2')}
            setImgUrl={setImgUrl}
            onEnterUrl="/static/images/mountain.jpg"
          />
          <HoverATag
            text={t('text_4._3')}
            setImgUrl={setImgUrl}
            onEnterUrl="/static/images/tree.jpg"
          />
          <HoverATag
            text={t('text_4._4')}
            setImgUrl={setImgUrl}
            onEnterUrl="/static/images/moon.jpg"
          />
          <HoverATag
            text={t('text_4._5')}
            setImgUrl={setImgUrl}
            onEnterUrl="/static/images/snow.jpg"
          />

          {t('text_4._6')}
          <a>{t('text_4._7')}</a>
          <a>{t('text_4._8')}</a>
          <a>{t('text_4._9')}</a>
          {t('text_4._10')}
        </p>
        <p className="whitespace-pre-wrap">{t('text_5')}</p>
      </div>
    </div>
  );
}

export default Introduction;

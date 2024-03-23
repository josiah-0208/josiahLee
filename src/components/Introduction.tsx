'use client';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import React, { useState } from 'react';

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
          <a
            className="cursor-pointer inline-block animate-wiggle animate-infinite animate-delay-[5000ms] animate-ease-out"
            onMouseEnter={() => {
              setImgUrl('/static/images/mountain.jpg');
            }}
            onMouseLeave={() => {
              setImgUrl('/static/images/myProfile.jpg');
            }}
          >
            {t('text_4._2')}
          </a>
          <a
            onMouseEnter={() => {
              setImgUrl('/static/images/tree.jpg');
            }}
            onMouseLeave={() => {
              setImgUrl('/static/images/myProfile.jpg');
            }}
          >
            {t('text_4._3')}
          </a>
          <a
            onMouseEnter={() => {
              setImgUrl('/static/images/moon.jpg');
            }}
            onMouseLeave={() => {
              setImgUrl('/static/images/myProfile.jpg');
            }}
          >
            {t('text_4._4')}
          </a>
          <a
            onMouseEnter={() => {
              setImgUrl('/static/images/snow.jpg');
            }}
            onMouseLeave={() => {
              setImgUrl('/static/images/myProfile.jpg');
            }}
          >
            {t('text_4._5')}
          </a>
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

'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import mockData from '../data/mock.json';
import HoverATag from './HoverATag';
import IconLink from './IconLink';
import Toast from './Toast';

type Props = {};

function Introduction({}: Props) {
  const t = useTranslations('about');
  const [profileImgUrl, setProfileImgUrl] = useState(
    '/static/images/myProfile.jpg'
  );
  const linkIconData = mockData.linkIconData;

  return (
    <div className="max-w-[768px] flex flex-col gap-[32px]">
      <div className="flex gap-8 items-center">
        <Image
          className="rounded-3xl"
          src={profileImgUrl}
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
      <div className="flex gap-[32px]">
        <div className=" p-[28px]  w-[672px]">
          <p className="whitespace-pre-wrap ">
            {t('text_4._1')}
            <HoverATag
              text={t('text_4._2')}
              setImgUrl={setProfileImgUrl}
              onEnterUrl="/static/images/mountain.jpg"
            />
            <HoverATag
              text={t('text_4._3')}
              setImgUrl={setProfileImgUrl}
              onEnterUrl="/static/images/tree.jpg"
            />
            <HoverATag
              text={t('text_4._4')}
              setImgUrl={setProfileImgUrl}
              onEnterUrl="/static/images/moon.jpg"
            />
            <HoverATag
              text={t('text_4._5')}
              setImgUrl={setProfileImgUrl}
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
        <div className="w-[108px] flex flex-wrap justify-evenly items-center">
          {linkIconData.map((icon) => (
            <IconLink
              src={icon.src}
              alt={icon.alt}
              width={icon.width}
              height={icon.height}
              url={icon.url}
              key={icon.alt}
            />
          ))}
        </div>
      </div>
      {/* <Toast /> */}
    </div>
  );
}

export default Introduction;

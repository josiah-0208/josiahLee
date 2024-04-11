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
  console.log('다시 돌아감');
  const t = useTranslations('about');
  const [profileImgUrl, setProfileImgUrl] = useState(
    '/static/images/myProfile.jpg'
  );
  const [onToast, setOnToast] = useState(false);
  const linkIconData = mockData.linkIconData;
  let wait: undefined | NodeJS.Timeout = undefined;

  // 아이콘 눌림 이벤트
  function clickIconLink(url: string) {
    if (wait === undefined) {
      navigator.clipboard.writeText(url);
      if (url.startsWith('http')) {
        window.open(url);
      }
      setOnToast(true);
      wait = setTimeout(() => {
        if (onToast === false) {
          setOnToast(false);
          wait = undefined;
        }
      }, 2700);
    }
  }

  return (
    <>
      <div className="max-w-[784px] flex flex-col gap-[32px]">
        <div className="flex items-center gap-[32px]">
          <Image
            className="rounded-3xl"
            src={profileImgUrl}
            alt="profileImage"
            width={216}
            height={216}
          />
          <div className="flex flex-col gap-2">
            <p className="whitespace-pre-wrap">{t('text_1')}</p>
            <p className="whitespace-pre-wrap">{t('text_2')}</p>
            <p className="whitespace-pre-wrap">{t('text_3')}</p>
            <div></div>
          </div>
        </div>
        <div className="flex justify-end items-center gap-[32px]">
          <div className="w-[532px] flex flex-col gap-2">
            <p className="whitespace-pre-wrap ">
              {/* <span className="text-2xl">{t('text_4._1')}</span> */}
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
          <div className="w-[220px] h-[220px] flex flex-wrap justify-evenly items-center bg-secondColor rounded-2xl border-2 border-borderColor">
            {linkIconData.map((icon) => (
              <IconLink
                src={icon.src}
                alt={icon.alt}
                width={icon.width}
                height={icon.height}
                url={icon.url}
                onClickEvent={clickIconLink}
                key={icon.alt}
              />
            ))}
          </div>
        </div>
      </div>
      {onToast ? <Toast /> : null}
    </>
  );
}

export default Introduction;

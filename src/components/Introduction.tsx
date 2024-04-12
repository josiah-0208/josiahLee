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
        <div className="flex items-top gap-[32px]">
          {/* <div className="w-[216px] h-[216px]"> */}
          <Image
            className="rounded-3xl"
            src={profileImgUrl}
            alt="profileImage"
            width={216}
            height={216}
          />
          {/* </div> */}
          <div className="flex flex-col gap-2.5">
            <p className="whitespace-pre-wrap leading-relaxed">{t('text_1')}</p>
            <p className="whitespace-pre-wrap leading-relaxed">{t('text_2')}</p>
            <p className="whitespace-pre-wrap leading-relaxed">{t('text_3')}</p>
            <p className="whitespace-pre-wrap leading-relaxed">{t('text_4')}</p>
          </div>
        </div>
        <div className="flex justify-end items-end gap-[32px]">
          <div className="w-[532px] flex flex-col gap-2.5">
            <p className="whitespace-pre-wrap leading-relaxed break-all">
              <HoverATag
                text={t('text_6.var_1')}
                setImgUrl={setProfileImgUrl}
                onEnterUrl="/static/images/mountain.jpg"
              />
              과&nbsp;
              <HoverATag
                text={t('text_6.var_2')}
                setImgUrl={setProfileImgUrl}
                onEnterUrl="/static/images/tree.jpg"
              />
              ,&nbsp;
              <HoverATag
                text={t('text_6.var_3')}
                setImgUrl={setProfileImgUrl}
                onEnterUrl="/static/images/moon.jpg"
              />
              ,&nbsp;
              <HoverATag
                text={t('text_6.var_4')}
                setImgUrl={setProfileImgUrl}
                onEnterUrl="/static/images/snow.jpg"
              />
              &nbsp;
              {t('text_6._2')}
              <HoverATag
                text={t('text_6.var_5')}
                setImgUrl={setProfileImgUrl}
                onEnterUrl="/static/images/nasi.jpg"
              />
              ,&nbsp;
              <HoverATag
                text={t('text_6.var_6')}
                setImgUrl={setProfileImgUrl}
                onEnterUrl="/static/images/crepe.jpg"
              />
              ,&nbsp;
              <HoverATag
                text={t('text_6.var_7')}
                setImgUrl={setProfileImgUrl}
                onEnterUrl="/static/images/donut.png"
              />
              {t('text_6._3')}
            </p>
            <p className="whitespace-pre-wrap leading-relaxed">{t('text_8')}</p>
            <p className="whitespace-pre-wrap leading-relaxed">{t('text_9')}</p>
            <p className="whitespace-pre-wrap leading-relaxed">
              {t('text_10')}
            </p>
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

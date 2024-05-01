'use client';
import Image from 'next/image';
import React from 'react';

type CardProps = {
  cardItem: {
    title: string;
    imgSrc: string;
    content: string;
    skillCategories: string[];
  };
};

function Card({ cardItem }: CardProps) {
  return (
    <div className="w-[48%] flex flex-col" onClick={() => {}}>
      <div className="text-sm">{cardItem.title}</div>
      <div className="relative">
        {cardItem.imgSrc && (
          <Image src={cardItem.imgSrc} alt="" fill sizes="100%" />
        )}
      </div>
      <div className="text-xs">{cardItem.content}</div>
      <div className="flex gap-1 ">
        {cardItem.skillCategories.map((item) => (
          <div className="p-1 bg-secondColor text-xs rounded-lg">{item}</div>
        ))}
      </div>
    </div>
  );
}

export default Card;

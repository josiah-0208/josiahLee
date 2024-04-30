import React from 'react';

type Props = {};

function Card({}: Props) {
  return (
    <div className="w-[50%] flex flex-col" onClick={() => {}}>
      <div>title</div>
      <div>image</div>
      <div>content</div>
      <div>skill category</div>
    </div>
  );
}

export default Card;

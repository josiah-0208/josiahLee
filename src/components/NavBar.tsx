import React from 'react';
import mockData from '../data/mock.json';
import { Link } from '@/navigation';
// import Link from 'next/link';

type Props = {};

function NavBar({}: Props) {
  const pagArr = mockData.pageArr;

  return (
    <div>
      {pagArr.map((page) => (
        <NavItem pageItem={page} key={page.pageName} />
      ))}
    </div>
  );
}

export default NavBar;

function NavItem({ pageItem }: any) {
  return <Link href={pageItem.url}>{pageItem.pageName}</Link>;
}

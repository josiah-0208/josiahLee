'use client';
import React from 'react';
import mockData from '../data/mock.json';
import { Link, usePathname } from '@/navigation';

type Props = {};

function NavBar({}: Props) {
  const pageArr = mockData.pageArr;
  const currPage = usePathname();

  return (
    <div className="flex gap-4">
      {pageArr.map((page) => (
        <NavItem pageItem={page} key={page.pageName} currPage={currPage} />
      ))}
    </div>
  );
}

export default NavBar;

function NavItem({ pageItem, currPage }: any) {
  return (
    <Link
      className={
        currPage === pageItem.url
          ? 'text-highlightTextColor border-b-[1px] border-highlightTextColor animate-fade'
          : ''
      }
      href={pageItem.url}
    >
      {pageItem.pageName}
    </Link>
  );
}

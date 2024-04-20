import { NextIntlClientProvider, useMessages } from 'next-intl';
import React from 'react';
import LangSwitch from './LangSwitch';
import DarkSwitch from './DarkSwitch';
import NavBar from './NavBar';

type Props = { locale: string };

function Header({ locale }: Props) {
  const messages = useMessages();
  return (
    <header className="w-[96%] md:w-[768px] h-[64px] flex justify-between items-center animate-fade">
      {/* LangSwitch에서 next-intl으로 디폴트로 서버사이드로 돌아가기 때문에 nextIntl로 감싸줘야 한다 */}
      <NavBar />
      <div className="flex">
        <NextIntlClientProvider locale={locale} messages={messages}>
          <LangSwitch />
        </NextIntlClientProvider>
        <DarkSwitch />
      </div>
    </header>
  );
}

export default Header;

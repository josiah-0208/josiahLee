import { NextIntlClientProvider, useMessages } from 'next-intl';
import React from 'react';
import LangSwitch from './LangSwitch';
import DarkSwitch from './DarkSwitch';
import NavBar from './NavBar';

type Props = { locale: string };

function Header({ locale }: Props) {
  const messages = useMessages();
  return (
    <header className="w-[768px] flex justify-center items-center h-16 mr-5 gap-5 animate-fade">
      {/* LangSwitch에서 next-intl으로 디폴트로 서버사이드로 돌아가기 때문에 nextIntl로 감싸줘야 한다 */}
      <NavBar />
      <NextIntlClientProvider locale={locale} messages={messages}>
        <LangSwitch />
      </NextIntlClientProvider>
      <DarkSwitch />
    </header>
  );
}

export default Header;

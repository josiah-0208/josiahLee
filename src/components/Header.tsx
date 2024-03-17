import { NextIntlClientProvider, useMessages } from 'next-intl';
import React from 'react';
import LangSwitch from './LangSwitch';
import DarkSwitch from './DarkSwitch';

type Props = { locale: string };

function Header({ locale }: Props) {
  const messages = useMessages();
  return (
    <header className="flex justify-end">
      {/* LangSwitch에서 next-intl으로 디폴트로 서버사이드로 돌아가기 때문에 nextInt로 감싸줘야 한다 */}
      <NextIntlClientProvider locale={locale} messages={messages}>
        <LangSwitch />
      </NextIntlClientProvider>
      <DarkSwitch />
    </header>
  );
}

export default Header;

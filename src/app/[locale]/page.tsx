import Introduction from '@/components/Introduction';
import { NextIntlClientProvider, useLocale, useMessages } from 'next-intl';

export default function About() {
  const locale = useLocale();
  const messages = useMessages();

  return (
    <main className="flex h-full w-full items-center justify-center">
      <NextIntlClientProvider locale={locale} messages={messages}>
        <Introduction />
      </NextIntlClientProvider>
    </main>
  );
}

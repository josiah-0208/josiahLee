import Introduction from '@/components/Introduction';
import { NextIntlClientProvider, useLocale, useMessages } from 'next-intl';

export default function About() {
  const locale = useLocale();
  const messages = useMessages();

  return (
    <main className="w-full md:h-[calc(100%-64px)] flex items-center justify-center animate-fade">
      <NextIntlClientProvider locale={locale} messages={messages}>
        <Introduction />
      </NextIntlClientProvider>
    </main>
  );
}

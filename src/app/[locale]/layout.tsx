import Header from '@/components/Header';
import '../globals.css';
import type { Metadata } from 'next';
import { ThemeProvider } from 'next-themes';

// const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Josiah Lee',
  description: '저를 소개합니다.',
};

export default function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  // 다크모드 필요 시
  const settingModeScript = `
  if (localStorage.theme === 'dark' || (!('theme' in localStorage)
  && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }
  `;
  // body 안에 <script dangerouslySetInnerHTML={{ __html: settingModeScript }} /> 추가하기

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className="flex justify-center items-center bg-bgColor text-textColor transition-background-color animate-fade">
        <script dangerouslySetInnerHTML={{ __html: settingModeScript }} />
        <ThemeProvider attribute="class">
          <Header locale={locale} />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

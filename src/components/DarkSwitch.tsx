'use client';
import React, { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { DarkModeSwitch } from 'react-toggle-dark-mode';

type Props = {};

function DarkSwitch({}: Props) {
  const { theme, setTheme } = useTheme();
  const [isDarkMode, setIsDarkMode] = useState(true);

  // next는 client side를 실행하기 전에 server side 렌더를 먼저 수행한다.
  // 따라서, 밑의 코드는 layout.tsx 페이지에서 실행되면 좋겠으나,
  // localStorage가 브라우저의 것이므로, next가 알 방법이 없다. 클라이언트 사이드에서 실행될 수 밖에 없다.
  // 근데 useEffect 안에 처리하면 깜박임이 발생한다. false로 초기화 되고,
  // useEffect에서 확인하는 과정에서 전환 과정이 사용자에게 보인다.
  useEffect(() => {
    if (
      localStorage.theme === 'dark' ||
      (!('theme' in localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      setIsDarkMode(true);
    } else {
      setIsDarkMode(false);
    }
  }, []);

  function switchMode(bool: boolean) {
    // true가 달모양, false가 해모양이다
    console.log(bool);
    setIsDarkMode(bool);
    if (bool === true) {
      document.documentElement.classList.add('dark');
      setTheme('dark');
      localStorage.theme = 'dark';
    } else if (bool === false) {
      setTheme('light');

      document.documentElement.classList.remove('dark');
      localStorage.theme = 'light';
    }
  }
  return (
    <div className="flex justify-center bg-transparent">
      <DarkModeSwitch
        sunColor="#37253e"
        moonColor="white"
        checked={isDarkMode}
        onChange={switchMode}
      />
    </div>
  );
}

export default DarkSwitch;

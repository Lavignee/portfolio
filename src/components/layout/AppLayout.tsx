import React from 'react';
import dynamic from 'next/dynamic';

import ScrollValueAnimation from '@/components/scrollValueAnimation';
import SwitchAnimation from '@/components/switchAnimation';
import FilmEffect from '@/components/filmEffect/filmEffect';
import Header from '@/components/header/header';
import Contact from '@/components/contact';

interface AppLayoutProps {
  children: React.ReactNode;
}

const SmoothScroll = dynamic(() => import('@/components/smoothScroll'), {
  ssr: false,
});

const AppLayout: React.FC<AppLayoutProps> = ({ children }) => {
  return (
    <div className='app-layout'>
      <SmoothScroll>
        <Header />
        {children}
      </SmoothScroll>

      <ScrollValueAnimation />
      <FilmEffect />
      <Contact />
      <SwitchAnimation />
    </div>
  );
};

export default AppLayout;

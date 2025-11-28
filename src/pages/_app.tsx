import type { AppProps } from 'next/app';
import CustomCursor from '@/components/customCursor';
import AppLayout from '@/components/layout/AppLayout';

import '@/lib/i18n';

import '@/styles/globals.scss';
import '@/components/about/about.scss';
import '@/components/contact/contact.scss';
import '@/components/customCursor/customCursor.scss';
import '@/components/filmEffect/filmEffect.scss';
import '@/components/footer/footer.scss';
import '@/components/footprint/footprint.scss';
import '@/components/header/header.scss';
import '@/components/iconSlider/iconSlider.scss';
import '@/components/languageSelectors/languageSelectors.scss';
import '@/components/main/main.scss';
import '@/components/scrollValueAnimation/scrollValueAnimation.scss';
import '@/components/skill/skill.scss';
import '@/components/smoothScroll/smoothScroll.scss';
import '@/components/splitText/splitText.scss';
import '@/components/textSlider/textSlider.scss';
import '@/components/switchAnimation/switchAnimation.scss';
import '@/components/tooltip/tooltip.scss';
import '@/components/videoToCanvas/videoToCanvas.scss';
import '@/compositions/customButton/customButton.scss';
import '@/compositions/customInput/customInput.scss';
import '@/compositions/customTextarea/customTextarea.scss';
import '@/pages/aboutDetail/aboutDetail.scss';
import '@/pages/footprintDetail/footprintDetail.scss';
import '@/pages/home/home.scss';
import '@/pages/skillDetail/skillDetail.scss';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <CustomCursor>
      <AppLayout>
        <Component {...pageProps} />
      </AppLayout>
    </CustomCursor>
  );
}

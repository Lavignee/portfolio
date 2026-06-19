import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 1234,
  },
  build: {
    outDir: 'dist',
    rollupOptions: {
      output: {
        // 큰 서드파티 라이브러리와 대용량 아이콘 데이터를 별도 청크로 분리해
        // 캐싱/초기 로딩을 개선.
        manualChunks(id) {
          // 인라인 SVG 아이콘 데이터(약 391KB)는 코드와 분리해 별도 캐싱.
          if (id.includes('icon-svg.json')) return 'icon-svg';

          if (id.includes('node_modules')) {
            if (id.includes('gsap')) return 'gsap';
            if (id.includes('swiper')) return 'swiper';
            if (id.includes('smooth-scrollbar')) return 'scrollbar';
            if (id.includes('i18next')) return 'i18n';
            if (id.includes('/react') || id.includes('scheduler')) return 'react';
          }
        },
      },
    },
  },
});

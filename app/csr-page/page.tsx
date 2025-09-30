'use client';
import dynamic from 'next/dynamic';

const CSRPage = dynamic(() => import('@/src/_pages/csr-page'), {
  ssr: false, // Полностью отключает SSR для этого компонента
});

export default CSRPage;

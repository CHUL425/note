import Image from 'next/image';
import Counter from '@/components/Counter';
import os, { hostname } from 'os'; // node APIs

export default function Home() {
  console.log('안녕 - 서버');
  console.log(os.hostname());

  return (
    <article>
      <h1>Next.js 홈페이지다!!</h1>
      <Counter />
    </article>
  );
}

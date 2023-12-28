import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: '멋진 제품 사이트:전체 제품 확인',
  description: '멋진 제품을 확인해주세요.',
}

export default function ProductsLayout({ children, }: { children: React.ReactNode}) {
  return (
    <div>
      <nav  className='flex gap-4'>
        <Link href='/products/1241'>남자옷</Link>
        <Link href='/products/1242'>여자옷</Link>
      </nav>
      <section  className='grow'>{children}</section>
    </div>
  )
}

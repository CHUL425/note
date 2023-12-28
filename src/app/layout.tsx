import type { Metadata } from 'next'
import './globals.css'
import Link from 'next/link'

export const metadata: Metadata = {
  title: '멋진 제품 사이트',
  description: '멋진 제품을 판매하는 사이트입니다.',
  icons: {
    icon: '/favicon.ico',
  }
}

export default function RootLayout({ children, }: { children: React.ReactNode}) {
  return (
    <html lang="en">
      <body  className='flex flex-col w-full max-w-screen-2xl mx-auto'>
        <header className='flex justify-between items-center p-4'>
          <h1>
            <Link href='/'>
            <h1 className='text-xl font-bold'>
              1st Programs(note)
            </h1>
            </Link>
          </h1>
          <nav className='flex gap-4'>
            <Link href='/products'>Products. </Link>
            <Link href='/about'>About</Link>
            <Link href='/contact'>Contact</Link>
          </nav>
        </header>
        {children}
      </body>
    </html>
  )
}

import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Link from 'next/link'
import Header from './components/Header';
import Sidebar from './components/Sidebar';


const inter = Inter({ subsets: ['latin'] })



export const metadata: Metadata = {
  title: 'Collesure',
  description: '自分の好きなものを布教、共有するサイト',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body className={inter.className}>
        <Header/>
        <div className='flex'>
        {/* サイドバーhtml始まり */}


          {/* 以下ページコンポーネント領域 */}
          <div className=''>
            {children}
          </div>
        </div>
      </body>
    </html>
  )
}

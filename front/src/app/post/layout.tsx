import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../globals.css'
import Link from 'next/link'
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';

const inter = Inter({ subsets: ['latin'] })

export default function TopLayout({
    children
  }: {
    children: React.ReactNode
  }) {
    return (
      <html lang="ja">
        <body className={inter.className}>
            <Header/>  
            <div className='flex'>
                {/* サイドバーhtml始まり */}
                <Sidebar/>
  
  
                {/* 以下ページコンポーネント領域 */}
                <div className='w-full'>
                    {children}
                </div>
            </div>
        </body>
      </html>
    )
  }
  
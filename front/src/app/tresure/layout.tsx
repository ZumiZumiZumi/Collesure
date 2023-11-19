import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../globals.css'
import Link from 'next/link'
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';

const inter = Inter({ subsets: ['latin'] })

export default function TopLayout({
    children,textColor,borderColor
  }: {
    children: React.ReactNode
    textColor:string
    borderColor:string
  }) {
    return (
      <html lang="ja">
        <body className={inter.className}>
            <Header/>  
            <div className='flex'>
                {/* サイドバーhtml始まり */}
                <Sidebar textColor = "#F7E96A" borderColor="#F7E96A"/>
  
  
                {/* 以下ページコンポーネント領域 */}
                <div className=''>
                    {children}
                </div>
            </div>
        </body>
      </html>
    )
  }
  
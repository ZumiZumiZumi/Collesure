import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../globals.css'
import Header from '../components/Header';

const inter = Inter({ subsets: ['latin'] })

export default function SignupLayout({
    children
  }: {
    children: React.ReactNode
  }) {
    return (
      <html lang="ja">
        <body className={inter.className}>
            <Header/>  
            <div className='flex'>
                {/* 以下ページコンポーネント領域 */}
                <div className='w-full'>
                    <main>{children}</main>
                </div>
            </div>
        </body>
      </html>
    )
  }
  
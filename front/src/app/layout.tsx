import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Link from 'next/link'
import {Grid, Icon} from '@mui/material'
import LoginIcon from '@mui/icons-material/Login';
import SearchIcon from '@mui/icons-material/Search';
import Header from './components/Header';


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
          <div className='sidebarbox'>
            <h2 className='sidebarsize  text-center text-orange-color'>Home</h2>
            <ul className='sidebarsize border-y-4 border-orange-color rounded-md text-center'>
              <li className=''>
                <Link className='py-2 block hover:bg-gray-200 border-x-2' href ='/'>
                  トップ
                </Link>
                </li>
              <li>
                <Link className='py-2 block hover:bg-gray-200 border-x-2' href = '/search'>検索</Link>
              </li>
              <li>
                <Link className='py-2 block hover:bg-gray-200 border-x-2' href = '/post'>投稿</Link>
              </li>
              <li>
                <Link className='py-2 block hover:bg-gray-200 border-x-2' href='/mypage'>マイページ</Link>
              </li>
              <li>
                <Link className='py-2 block hover:bg-gray-200 border-x-2' href = '/tresure'>開拓</Link>
              </li>
            </ul>

            <h2 className='sidebarsize pt-10 text-center text-orange-color'>#タグ</h2>
            <ul className='sidebarsize border-y-4 border-orange-color rounded-md text-center'>
              <li className=''>
                <Link className='py-2 block hover:bg-gray-200 border-x' href ='/'>
                  トップ
                </Link>
                </li>
              <li>
                <Link className='py-2 block hover:bg-gray-200 border-x' href = '/search'>検索</Link>
              </li>
              <li>
                <Link className='py-2 block hover:bg-gray-200 border-x' href = '/post'>投稿</Link>
              </li>
              <li>
                <Link className='py-2 block hover:bg-gray-200 border-x' href='/mypage'>マイページ</Link>
              </li>
              <li>
                <Link className='py-2 block hover:bg-gray-200 border-x' href = '/tresure'>開拓</Link>
              </li>
            </ul>
          </div>


          {/* 以下ページコンポーネント領域 */}
          <div className=''>
            {/* {children} */}
          </div>
        </div>
      </body>
    </html>
  )
}

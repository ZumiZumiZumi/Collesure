import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Link from 'next/link'
import {Grid} from '@mui/material'

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
        {/* ヘッダーhtml始まり */}
        <div className='bg-white-600'>
          <div className='flex mb-14 mt-2 items-center'>
          <h5 className = "mr-auto ">Collesure</h5>
          <div className='flex items-center mx-auto mt-4 '>
            <input className ='w-80 mr-6 rounded-md border border-black' type = "text" name = "serach" placeholder='キーワードを入力して検索'></input>
            <button type = "submit" className='ml-4'>検索</button>
          </div>
          <button className='mr-4'>ログイン</button>
        </div>

          <div className='uldiv flex w-screen justify-center items-center border-b-4 border-orange-color'>
            <ul className='list  text-center '>
              <li className='headlist  bg-orange-color px-4 py-2  hover:bg-gray-100 rounded-t-3xl'>
                  <Link className='no-underline' href = "/">
                    トップ
                  </Link>
              </li>
              <li className='headlist block bg-blue-color px-4 py-2 hover:bg-gray-100 rounded-t-3xl'>
                  <Link className='no-underline' href = "/">
                    検索
                  </Link>
              </li>
              <li className='headlist block bg-green-color px-4 py-2 hover:bg-gray-100 rounded-t-3xl'>
                  <Link className='no-underline' href = "/">
                    登校
                  </Link>
              </li>
              <li className='headlist block bg-pink-color px-4 py-2 hover:bg-gray-100 rounded-t-3xl'>
                  <Link className='no-underline' href = "/">
                    マイページ
                  </Link>
              </li>
              <li className='headlist block bg-yellow-color px-4 py-2 hover:bg-gray-100 rounded-t-3xl'>
                  <Link className='no-underline' href = "/">
                    開拓
                  </Link>
              </li>
            </ul>
          </div>
        </div>
        {/* ヘッダーhtml終わり */}
        
      </body>
    </html>
  )
}

import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../globals.css'
import Link from 'next/link'

const Sidebar = ({textColor,borderColor}: {textColor: string,borderColor:string})=> {
    return(
        <div className='sidebarbox'>
        <h2 className='sidebarsize text-center' style = {{color:textColor}}>Home</h2>
        <ul className='sidebarsize border-y-4 rounded-md text-center' style = {{borderColor:borderColor}}>
          <li className=''>
            <Link className='py-2 block hover:bg-gray-200 border-x-2' href ='/top'>
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

        <h2 className='sidebarsize pt-10 text-center' style = {{color:textColor}}>#タグ</h2>
        <ul className='sidebarsize border-y-4 rounded-md text-center' style = {{borderColor:borderColor}}>
          <li className=''>
            <Link className='py-2 block hover:bg-gray-200 border-x' href ='/top'>
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
    )
   
}
export default Sidebar;

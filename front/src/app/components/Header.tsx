"use client";
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../globals.css'
import Link from "next/link";
import checkcolor from './ChangeColor';
import LoginIcon from '@mui/icons-material/Login';
import SearchIcon from '@mui/icons-material/Search';
import { usePathname } from 'next/navigation';



const Header = ()=>{
  const pathname = usePathname();
  const {nowborder,nowtext} = checkcolor();
  return(
    <>
      <div className='bg-white w-screen'>
        <div className='flex mb-14 mt-2 items-center'>
          <h5 className = "mr-auto ">Collesure</h5>
          <div className='flex items-center mx-auto mt-4 '>
            <input className ='headersearch h-9 rounded-l-md border border-black shadow' type = "text" name = "serach" placeholder='  キーワードを入力して検索'></input>
            <button type = "submit" className='mr-2 bg-gray-200 border border-black rounded-r h-9 w-12 shadow'><SearchIcon/></button>
          </div>
          <button className='logbutton ml-4 mr-16 mt-3  border border-black rounded-md bg-white shadow whitespace-nowrap'><LoginIcon/> ログイン</button>
        </div>
        <div className={`uldiv headerh flex w-screen justify-center  border-b-4 ${nowborder}`}>
          <ul className='list  text-center'>
            <li className={pathname == "/top" ? "headlist block" : "headlist "}>
              <Link className = {pathname == "/top" ? "active bg-orange-color block" : "noactive hover:bg-orange-color"} href = "/top">
                トップ
              </Link>
            </li>
            <li className="headlist">
              <Link className= {pathname == "/search" ? "active bg-blue-color py-2 block" : "noactive hover:bg-blue-color py-2 "} href = "/search">
                検索
              </Link>
            </li>
            <li className='headlist'>
              <Link className= {pathname == "/post" ? "active bg-green-color py-2 block" : "noactive hover:bg-green-color py-2 "} href = "/post">
                投稿
              </Link>
            </li>
            <li className='headlist'>
              <Link className= {pathname == "/mypage" ? "active bg-pink-color py-2 block" : "noactive hover:bg-pink-color py-2 "} href = "/mypage">
                マイページ
              </Link>
            </li>
            <li className='headlist'>
              <Link className= {pathname == "/tresure" ? "active bg-yellow-color py-2 block" : "noactive hover:bg-yellow-color py-2 "} href = "/tresure">
                開拓
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
export default Header;
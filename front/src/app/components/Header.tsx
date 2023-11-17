import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../globals.css'
import Link from 'next/link'
import {Grid, Icon} from '@mui/material'
import LoginIcon from '@mui/icons-material/Login';
import SearchIcon from '@mui/icons-material/Search';


const Header = ()=>{
    return(
        <>
        <div className='bg-white w-screen'>
          <div className='flex mb-14 mt-2 items-center'>
          <h5 className = "mr-auto ">Collesure</h5>
          <div className='flex items-center mx-auto mt-4 '>
            <input className ='headersearch h-9 rounded-l-md border border-black shadow' type = "text" name = "serach" placeholder='  キーワードを入力して検索'></input>
            <button type = "submit" className='mr-2 bg-gray-200 border border-black rounded-r h-9 w-12'><SearchIcon/></button>
          </div>
          <button className='logbutton ml-4 mr-16 mt-3  border border-black rounded-md bg-white shadow whitespace-nowrap'><LoginIcon/> ログイン</button>
        </div>

          <div className='uldiv flex w-screen justify-center items-center border-b-4 border-orange-color'>
            <ul className='list  text-center '>
              <li className='headlist'>
                  <Link className='no-underline  block bg-orange-color  py-2  hover:bg-gray-100 rounded-t-3xl' href = "/">
                    トップ
                  </Link>
              </li>
              <li className='headlist'>
                  <Link className='no-underline  block bg-blue-color py-2 hover:bg-gray-100 rounded-t-3xl' href = "/search">
                    検索
                  </Link>
              </li>
              <li className='headlist'>
                  <Link className='no-underline  block bg-green-color py-2 hover:bg-gray-100 rounded-t-3xl' href = "/post">
                    投稿
                  </Link>
              </li>
              <li className='headlist'>
                  <Link className='no-underline  block bg-pink-color py-2 hover:bg-gray-100 rounded-t-3xl' href = "/mypage">
                    マイページ
                  </Link>
              </li>
              <li className='headlist'>
                  <Link className='no-underline  block bg-yellow-color py-2 hover:bg-gray-100 rounded-t-3xl' href = "/tresure">
                    開拓
                  </Link>
              </li>
            </ul>
          </div>
        </div>
        </>
    )
}
export default Header;
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../globals.css'
import Link from 'next/link'

const Article = ()=> {

    return(
        <div className='w-80 mx-16 mt-12'>
            <input type = "text"/>
            <ul className="">
                <Link className="" href = "">
                    <li>
                        <img src = "/image/kari.png"></img>
                    </li>
                    <li className="bg-blue-color text-center">スポーツ</li>
                    <li className='pl-2 pt-2 text-link-color text-xl'>ToukouTitle</li>
                </Link>
                <Link className="mt-2 ml-2 flex" href = "">
                    <div className='flex items-center justify-center h-12 w-12 overflow-hidden bg-gray-300 rounded-full'>
                        <img src = "/image/kari.png" className='object-cover h-full w-full rounded-full'></img>
                    </div>
                    <li className="pl-4 flex text-link-color items-center">UserName</li>
                </Link>
            </ul>
        </div>
    );
   
}
export default Article;

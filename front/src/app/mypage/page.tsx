import Link from "next/link";
import '../globals.css'
import Carousel from "../components/Carousel";

export default function Home() {
    return (
      <main className="mt-16 mx-16">
        {/* ユーザーネーム・ステータス等 */}
        <div className="flex border-b-4 border-pink-color items-end ">
          <h2 className="toppop text-4xl ml-8 text-center border-b-2 border-pink-color border-dashed outline-orange-color mb-1 whitespace-nowrap">UserName</h2>
          <div  className="text-2xl mx-4 whitespace-nowrap">さんのページ</div>
        </div>
        <div className="flex ml-16 my-8 items-center">
          <div className='flex items-center justify-center h-36 w-36 overflow-hidden bg-gray-300 rounded-full'>
            <img src = "/image/kari.png" className='absolute object-cover h-36 w-36 rounded-full'></img>
          </div> 
          <div className="flex items-center">
          <div className="postcoment text-xl h-32  ml-20 rounded-md  border overflow-auto">ここにコメントが表示されまあああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああす</div>
          </div>
        </div>
        <div className="flex justify-end">
          <button className="px-8 py-2 mr-8 text-xl bg-pink-color rounded-md">情報を編集</button>
        </div>
        {/* 記事関連 */}
        <div className="mypagearticle mt-6 flex border-b-4 border-pink-color items-end ">
          <h2 className="toppop text-4xl pl-6 border-b-2 border-pink-color border-dashed outline-orange-color mb-1 whitespace-nowrap">登校した記事(XX件)</h2>
          <Link href = "/mypage" className="text-link-color text-lg mx-4 whitespace-nowrap">一覧で見る</Link>
        </div>
        <Carousel/>
        
      </main>
    )
  }
  
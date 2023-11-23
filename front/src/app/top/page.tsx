import Link from "next/link";
import '../globals.css'

export default function Home() {
    return (
      <main className="mt-24 ml-8">
        {/* おすすめタグ表示領域 */}
        <div className="flex border-b-4 border-orange-color items-end">
        <h2 className="toppop text-4xl border-b-2 border-orange-color border-dashed outline-orange-color mb-1 whitespace-nowrap">話題のタグ</h2>
        <Link  className="text-link-color mx-4 whitespace-nowrap" href = "/search">タグ一覧へ</Link>
        </div>
         {/* おすすめタグ表示領域 */}
        
         {/* 今日のイチ推し表示領域 */}
        <div className="flex border-b-4 border-orange-color items-end">
        <h2 className="toppop text-4xl border-b-2 border-orange-color border-dashed outline-orange-color mb-1 whitespace-nowrap">今日のイチ推し</h2>
        <Link  className="text-link-color mx-4 whitespace-nowrap" href = "/search">もっと見る</Link>
        </div>
        {/* 今日のイチ推し表示領域 */}

        {/* 新着投稿表示領域 */}
        <div className="flex border-b-4 border-orange-color items-end">
        <h2 className="toppop text-4xl border-b-2 border-orange-color border-dashed outline-orange-color mb-1 whitespace-nowrap">フォローユーザーの新着投稿</h2>
        <Link  className="text-link-color mx-4 whitespace-nowrap" href = "/search">もっと見る</Link>
        </div>
        {/* 新着投稿表示領域 */}
        
      </main>
    )
  }
  
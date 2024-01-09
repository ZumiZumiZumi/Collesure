import Link from "next/link";
import '../globals.css'
import Article from "../components/Article";
import ViewArticles from "../components/ViewArticles";
import Modal from "../components/Modal";

export default function Home() {
    return (
      <main>
        <div className="mt-24 flex centercss">
          <div className="searchoptionbg bg-blue-color rounded-sm p-4">
            <div className="pb-4">
              <label className="mr-4">検索</label>
              <input className ='searchoptiontext  h-9 rounded-md border border-black shadow' type = "text" name = "serach" placeholder='  キーワードを入力して検索'></input>
            </div>
            <div className="flex searchoption">
              <button className = "mr-4 px-2 bg-white rounded whitespace-nowrap" id ="btnid"><span>+</span>タグを追加する</button>
              <Modal buttonLabel="Open Modal" />
              <script>
                const btn = document.getElementById("btnid");
                
              </script>

              <div className="mx-10 ml-auto whitespace-nowrap">
                <label>検索条件：</label>
                <select name="color">
                  <option value="">指定なし</option>
                  <option value="red">ユーザー名検索</option>
                  <option value="blue">フォローユーザー投稿のみ</option>
                  <option value="yellow">いいねした投稿のみ</option>
                </select>
              </div>
            </div>
          
            <button className="mt-8 h-8 bg-white rounded-sm text-center shadow w-full border border-gray-400">検索</button>
          </div>
        </div>
        <ViewArticles/>
      </main>
    )
  }
  
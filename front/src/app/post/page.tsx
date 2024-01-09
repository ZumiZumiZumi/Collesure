export default function Home() {
    return (
      <main className="">
        <div className="flex mt-14">
          <div className="flex flex-col justify-center w-full ml-8">
            <div className="flex flex-col justify-center mb-10">
              <div className="flex flex-col items-center mb-10">
                <div className="text-2xl w-56 mb-4 text-center border-b-2 border-green-color mx-auto">タイトル</div>
                <input type="text" className="w-80 h-8 border border-gray-400 rounded border mx-auto"/>
              </div>
              <div className="mb-10 flex-col justify-center">
                <div className="text-2xl w-56 mb-4 flex justify-center mx-auto text-center border-b-2 border-green-color">メインタグ</div>
                <div className="flex justify-center">
                  <button className="px-2 rounded border shadow">選択してください</button>
                </div>
              </div>
              <div className="flex justify-center mb-10">
                <div className="text-2xl w-56 text-center border-b-2 border-green-color">サブタグ</div>
              </div>
              <div className="flex justify-center">
                <div className="text-2xl w-56 mb-4 text-center border-b-2 border-green-color">コメント</div>
              </div>
              <div className=" flex justify-center">
              <textarea className="w-80 h-32 border border-gray-400"></textarea>
              </div>
            </div>
          </div>
          <div className="flex1 w-full mr-8 ml-2">
            <img src = "image/kari.png" className="postimage flex justify-center mx-auto"></img>
            <div className = "flex justify-center">
              <button className="w-32 mt-4 border rounded shadow text-center">画像を選択</button>
            </div>
            <div className = "my-12 flex justify-center">
              <button className="w-72 h-16 bg-green-color border border-black rounded shadow text-center">投稿</button>
            </div>
            
          </div>
        </div>
      </main>
    )
  }
  
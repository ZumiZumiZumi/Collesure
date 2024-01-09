export default function Home() {
    return (
      <main className="flex justify-center">
        <div className="loginbg mt-24 border-2 border-black rounded shadow">
          <h1 className="text-2xl py-4 text-center border-b-2 border-black">ログイン</h1>
          <div className="flex flex-col items-center my-10">
            <div className="text-2xl text-center w-52 mb-4 border-b-2 border-orange-color mx-auto">メールアドレス</div>
            <input type="text" className="w-80 h-8 border border-gray-400 rounded border mx-auto"/>
          </div>
          <div className="flex flex-col items-center my-10">
            <div className="text-2xl text-center w-52 mb-4 border-b-2 border-orange-color mx-auto">パスワード</div>
            <input type="text" className="w-80 h-8 border border-gray-400 rounded border mx-auto"/>
          </div>
          <div className = "my-12 flex justify-center">
              <button className="text-lg w-64 h-12 bg-orange-color border border-black rounded shadow text-center">ログイン</button>
            </div>
          <div className="flex flex-col items-center my-10">

          </div>
        </div>
      </main>
    )
  }
  
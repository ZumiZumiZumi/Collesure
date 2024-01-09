"use client";
import { useState } from "react";

export default function Home() {

  const [user_mail, setUser_Mail] = useState("");
  const [user_pass, setUser_Pass] = useState("");
  const [user_name, setUser_Name] = useState("");

  const handleSubmit = () => {
    const data = {
      user_name: user_name,
      user_mail: user_mail,
      user_pass: user_pass,
      user_icon: "a",
      user_coment:"a",
    }

    fetch("api/user/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
  };

    return (
      <main className="flex justify-center">
        <form onSubmit = {handleSubmit}>
        <div className="loginbg my-12 border-2 border-black rounded-xl shadow-2xl">
          <h1 className="text-2xl py-4 text-center border-b-2 border-black">新規登録</h1>
          <div className="flex flex-col items-center my-10">
            <div className="text-2xl text-center w-52 mb-2 border-b-2 border-orange-color mx-auto">メールアドレス</div>
            <input 
              type="text" 
              className="w-80 h-8 border border-gray-400 rounded-lg border mx-auto"
              value = {user_mail}
              onChange = {(e) => setUser_Mail(e.target.value)}
            />
          </div>
          <div className="flex flex-col items-center my-10">
            <div className="text-2xl text-center w-52 mb-2 border-b-2 border-orange-color mx-auto">パスワード</div>
            <input 
              type="password"
              className="w-80 h-8 border border-gray-400 rounded-lg border mx-auto"
              value = {user_pass}
              onChange={(e) => setUser_Pass(e.target.value)}
              required
            />
          </div>
          <div className="flex flex-col items-center my-10">
            <div className="text-2xl text-center w-52 mb-2 border-b-2 border-orange-color mx-auto">パスワード確認</div>
            <input type="password" className="w-80 h-8 border border-gray-400 rounded-lg border mx-auto" required />
          </div>
          <div className="flex flex-col items-center my-10">
            <div className="text-2xl text-center w-52 mb-2 border-b-2 border-orange-color mx-auto">ユーザー名</div>
            <input 
              type="text" 
              className="w-80 h-8 border border-gray-400 rounded-lg border mx-auto"
              value = {user_name}
              onChange={(e) => setUser_Name(e.target.value)}
            />
          </div>
          <div className = "my-12 flex justify-center">
              <input
                type = "submit"
                className="text-lg w-64 h-12 bg-orange-color  rounded-xl shadow-outline text-center"
                value = "アカウント登録"
              />
            </div>
          <div className="flex flex-col items-center my-8">

          </div>
        </div>
        </form>
      </main>
    )
  }
  
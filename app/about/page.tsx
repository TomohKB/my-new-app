"use client";

import { useState, useEffect } from "react";
import Link from "next/link"
import Header from "../components/header";
import Footer from "../components/footer";
import Image from "next/image";

export default function About() {
  const [count, setCount] = useState(0);
  //初期値0

  const [ selectedItems, setSelectedItems ] = useState<string[]>([]);
  //useState(0)と同じことでuseState([])これで空っぽのリストを保存できる箱
  //string[] 複数の文字列のリストですって意味

  useEffect(()=> {
    console.log(`カウントが電工されました: ${count}`);
    if(count>=5) {
      alert("5回以上クリックしました")
    }
  }, [count]); //countが変わるごとにuseEffectが実行される

  const handleCheckboxChange = (item: string) => {
    setSelectedItems((prevItems) => {
      //「選択したもののリスト」 を更新する関数
      if (prevItems.includes(item)) {
        return prevItems.filter((i) => i !== item);
        //配列.filter((i) => 条件) 「条件に合うものだけ残す！」
        //iはリストに入っている1つずつのデータ
      }
      return [...prevItems, item];
    })
  }

    return (
      <div>
        <Header />
        <h1>ヤッホー！</h1>
        <p>見ていってね</p>
        <div>
          <Image src="/my-image.jpg" alt="My Image" width={400} height={300} />
        </div>

        <div>
          <p>現在のカウント: {count}</p>
          <button className="bg-blue-300" onClick={() => setCount(count + 1)}>
            カウントを増やす
          </button>
        </div>

        <div className="mt-4">
          <h2>好きなものを選んでね！</h2>

          <label>
            <input
              type="checkbox"
              checked={selectedItems.includes("りんご")}
              //「このチェックボックスがチェックされているかどうか」 を決める部分！
              onChange={() => handleCheckboxChange("りんご")}
              //onChange は「チェックボックスが押されたときに何をするか？」を決める部分！
              //上のhandleCheckboxChangeに渡される
            />
            りんご 🍎
          </label>
          <br />
          <label>
            <input
              type="checkbox"
              checked={selectedItems.includes("バナナ")}
              onChange={() => handleCheckboxChange("バナナ")}
            />
            バナナ 🍌
          </label>
          <br />
          <label>
            <input
              type="checkbox"
              checked={selectedItems.includes("ぶどう")}
              //チェックボックスのON/OFFを決めている！
              onChange={() => handleCheckboxChange("ぶどう")}
            />
            ぶどう 🍇
          </label>
        </div>

        {/* ✅ 選んだものを表示 */}
        <div className="mt-4">
          <h3>選んだもの:</h3>
          {selectedItems.length > 0 ? (
            //このコードは、「チェックボックスで選んだものがあるか？」 を確認して、
            // リストを表示するか、「何も選んでいません」と表示するかを決めている！
            //.length は 配列の中に何個データが入っているかを数える
            <ul>
              {selectedItems.map((item) => (
                //map は 配列の中のデータを1つずつ取り出して、新しいリストを作る ための関数！
                <li key={item}>{item}</li>
              ))}
            </ul>
          ) : (
            <p>何も選んでいません</p>
          )}
        </div>
        <Link href="/">
          <button className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">
            Back
          </button>
        </Link>
        <Footer />
      </div>
    ); 
}
import { useEffect } from "react";

import MenuBar from './components/MenuBar'
import img_nikachu from './assets/nikachu.png'
import { Link } from "react-router-dom";

function getUserAge(e: number, t: number, n: number) { var o, i, a, s = new Date(e, t - 1, n); return e != s.getFullYear() || t - 1 != s.getMonth() || n != s.getDate() ? null : (o = new Date, i = o.getFullYear() - s.getFullYear(), a = new Date(o.getFullYear(), s.getMonth(), s.getDate()), a > o && (i = i - 1), i) }

function Profile() {

    useEffect(() => {
        document.title = `👤Profile - Nikachu's portfolio`;
    });

    return (
        <>
            <div className="drawer">
                <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col">
                    <div className="w-full navbar bg-base-300">
                        <div className="flex-none lg:hidden">
                            <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                            </label>
                        </div>

                        <Link to={'/'}><img className="w-10 ml-2 mr-1 rounded-full" src={img_nikachu} /></Link>
                        <div className="flex-1 px-2 mr-2 font-bold text-xl">
                            <Link to={'/'}>nikachu2012</Link>
                        </div>

                        <div className="flex-none hidden lg:block">
                            <ul className="menu menu-horizontal [&>*]:ml-[5px] px-1">
                                <MenuBar />
                            </ul>
                        </div>
                    </div>

                    <div className="mt-[10px] mb-[10px] md:container md:mx-auto md:flex md:justify-center">
                        <table className="table w-full md:w-11/12">
                            {/* head */}
                            <thead>
                                <tr>
                                    <th>key</th>
                                    <th>value</th>
                                </tr>
                            </thead>
                            <tbody>

                                <tr>
                                    <td>名前</td>
                                    <td>
                                        ニカチュウ<br />
                                        <a href="https://github.com/nikachu2012" target={"_blank"}>
                                            <img
                                                src="http://github-profile-summary-cards.vercel.app/api/cards/profile-details?username=nikachu2012&theme=dracula"
                                                alt="Nikachu's github status"
                                                className="mt-[10px]"
                                            />
                                        </a>

                                    </td>
                                </tr>
                                <tr>
                                    <td>居住地</td>
                                    <td>静岡県</td>
                                </tr>
                                <tr>
                                    <td>年齢</td>
                                    <td>{getUserAge(2007, 9, 18)}歳</td>
                                </tr>
                                <tr>
                                    <td>誕生日</td>
                                    <td>2007年09月18日</td>
                                </tr>
                                <tr>
                                    <td>好きな食べ物&amp;飲み物</td>
                                    <td>🍔ハンバーガー, 🍟ポテト, 🫖ミルクティー, モンスター</td>
                                </tr>
                                <tr>
                                    <td>趣味</td>
                                    <td>パソコン関連, プログラミング</td>
                                </tr>
                                <tr>
                                    <td>書ける言語</td>
                                    <td>HTML, CSS, Javascript</td>
                                </tr>
                                <tr>
                                    <td>好きなゲーム</td>
                                    <td>Minecraft, Grand Theft Auto V</td>
                                </tr>
                                <tr>
                                    <td>自己紹介文</td>
                                    <td>
                                        ニカチュウと申します！よろしくお願いします！普段はWeb系の言語を色々いじってます。<br />
                                        JavaScriptは結構できます。PHPやPythonなどの言語も触ってみたいです。
                                    </td>
                                </tr>
                                <tr>
                                    <td>資格</td>
                                    <td>
                                        日本語ワープロ検定試験 1級<br />
                                        情報処理技能検定試験（表計算） 1級<br />
                                    </td>
                                </tr>
                                <tr>
                                    <td>詳しい経歴</td>
                                    <td>
                                        <Link to={'/timeline'}>
                                            <button className="btn btn-primary">ここからどうぞ。</button>
                                        </Link>
                                    </td>
                                </tr>

                            </tbody>
                        </table>
                    </div>

                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 bg-base-100 [&>*]:mt-[3px]">
                        <MenuBar />
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Profile

import { useEffect } from "react";

import MenuBar from './components/MenuBar'
import img_nikachu from './assets/nikachu.png'
import { Link } from "react-router-dom";

import './timeline.css'

function Timeline() {

    useEffect(() => {
        document.title = `📅Timeline - Nikachu's portfolio`;
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

                    <div className="timeline mb-[10px]">
                        <div className="container">
                            <div className="wrapper">
                                <ul className="sessions">
                                    <li>
                                        <div className="time">2007年</div>
                                        <p>静岡県に生まれる</p>
                                    </li>
                                    <li>
                                        <div className="time">2011年ごろ</div>
                                        <p>パソコンをもらう</p>
                                        <small>ちなみに当時はMr.PCという本についてたCDの中に入っていたフリーソフトで遊んでました。当時ローマ字入力なんてできないのでかな入力でした。</small>
                                    </li>
                                    <li>
                                        <div className="time">2013年</div>
                                        <p>小学校入学</p>
                                    </li>
                                    <li>
                                        <div className="time">2015年</div>
                                        <p>プログラミングロボット教室へ通い始める</p>
                                        <small>Javaが学べると言われたので入ったのですが、方針変更等でやれたのはPythonだったんですけどね。このことは次にも影響します。</small>
                                    </li>
                                    <li>
                                        <div className="time">2019年</div>
                                        <p>WRO2019 International Finalに出場 <a href="https://www.wroj.org/"><button className="btn-primary btn-xs">WRO Japan公式サイト</button></a></p>
                                        <small>静岡県予選では<strong>１チーム中</strong>１位、全国大会では３位を収めることができ、世界大会に出ることができました。</small>
                                    </li>
                                    <li>
                                        <div className="time">2020年</div>
                                        <p>中学校入学</p>
                                        <small>最初からコロナ禍ですよ。小６の社会の最後なんてテスト終わった人から教科書を自分で読んでとか言うゴリ押しになってました。<br /><strong>ちなみに私はテストが終わらなかったので読んでません。</strong></small>
                                    </li>
                                    <li>
                                        <div className="time">2021年</div>
                                        <p>Realtime-clockを始めとするJavaScriptを使ったソフトの制作</p>
                                        <small>
                                            小5ぐらいからHTMLとCSSはかけたのですが、JavaScriptをいろいろ書くようになったのはこの年が最初です。<br />
                                            作ったものは<a href="https://github.com/nikachu2012" target={"_blank"} className="underline">GitHub</a>で公開しています。
                                        </small>
                                    </li>
                                    <li>
                                        <div className="time">2022年11月</div>
                                        <p>ジュニアプロコンin静岡にて最優秀賞受賞</p>
                                        <small>ビジュアルプログラミング言語からテキスト系の言語にステップアップしたい人向けの言語である<a className="underline" href="https://emojicode-ide.nikachu.net/" target={"_blank"}>EmojiCode</a>を制作しました。</small>
                                    </li>
                                </ul>
                            </div>
                        </div>
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

export default Timeline

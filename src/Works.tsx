import { useEffect } from "react";

import MenuBar from './components/MenuBar'
import img_nikachu from './assets/nikachu.webp'
import img_nikachu_noback from './assets/nikachu_noback.webp'
import { Link } from "react-router-dom";

import apex_roulette from './assets/works/apex_roulette.webp'
import clock from './assets/works/clock.webp'
import diary from './assets/works/diary.webp'
import emojicode from './assets/works/emojicode.webp'
import sc1 from './assets/works/sc1.webp'
import sc2 from './assets/works/sc2.webp'
import portfolio from './assets/works/portfolio.webp'
import kosen_syllabus_kai from "./assets/works/kosen_syllabus_kai.webp"
import tanka_database from "./assets/works/tanka-database.webp"
import line_de_healthcare from "./assets/works/line_de_healthcare.webp"
import note_nikachu_net from "./assets/works/note.nikachu.net.webp"
import handbook_nitnc from "./assets/works/handbook.numazu-ct.jp.webp"

function Works() {

    useEffect(() => {
        document.title = `👨‍💻Works - Nikachu's portfolio`;
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

                        <Link to={'/'}><img className="w-10 ml-2 rounded-full" src={img_nikachu_noback} /></Link>
                        <div className="flex-1 px-2 mr-2 font-bold text-xl">
                            <Link to={'/'}>nikachu2012</Link>
                        </div>

                        <div className="flex-none hidden lg:block">
                            <ul className="menu menu-horizontal [&>*]:ml-[5px] px-1">
                                <MenuBar />
                            </ul>
                        </div>
                    </div>

                    <div className="w-full flex justify-center content-center flex-wrap mt-[13px]">
                        <h2 className="text-2xl font-bold">今までに作った物</h2>
                    </div>

                    <div className="w-full flex justify-center content-center flex-wrap">

                        <div className="card w-96 bg-base-100 shadow-xl border border-[hsl(var(--b3))] mt-[15px] mx-[5px]">
                            <figure className="px-10 pt-10">
                                <img src={handbook_nitnc} className="rounded-xl" />
                            </figure>
                            <div className="card-body items-center text-left p-[20px]">
                                <h2 className="card-title">沼津高専学生便覧 on Web</h2>
                                <p>沼津高専の校則等が載っている学生便覧を、Web上で見れるようにし、Algoliaを用いた全文検索機能を付けたものです。<br />学内向けとして制作しました。</p>
                            </div>
                        </div>

                        <div className="card w-96 bg-base-100 shadow-xl border border-[hsl(var(--b3))] mt-[15px] mx-[5px]">
                            <figure className="px-10 pt-10">
                                <img src={note_nikachu_net} className="rounded-xl" />
                            </figure>
                            <div className="card-body items-center text-left p-[20px]">
                                <h2 className="card-title">note.nikachu.net</h2>
                                <p>技術的なことを主に投稿するブログのようなサイトです。静的サイトジェネレータであるHugoを利用しています。</p>
                                <div className="card-actions ">
                                    <a href="https://note.nikachu.net/" target="_blank"><button className="btn btn-sm btn-primary">見てみる</button></a>
                                    <a href="https://github.com/nikachu2012/note.nikachu.net" target="_blank"><button className="btn btn-sm btn-primary">ソースコード</button></a>
                                </div>
                            </div>
                        </div>

                        <div className="card w-96 bg-base-100 shadow-xl border border-[hsl(var(--b3))] mt-[15px] mx-[5px]">
                            <figure className="px-10 pt-10">
                                <img src={tanka_database} className="rounded-xl" />
                            </figure>
                            <div className="card-body items-center text-left p-[20px]">
                                <h2 className="card-title">全短歌データベース</h2>
                                <p>すべての短歌を1つのデータベースにまとめ、検索できるサイトです。話題となった全短歌データベースと同じようなものです。</p>
                                <div className="card-actions ">
                                    <a href="https://tankadb.nikachu.net/" target="_blank"><button className="btn btn-sm btn-primary">使ってみる</button></a>
                                    <a href="https://github.com/nikachu2012/tanka-database" target="_blank"><button className="btn btn-sm btn-primary">ソースコード</button></a>
                                </div>
                            </div>
                        </div>

                        <div className="card w-96 bg-base-100 shadow-xl border border-[hsl(var(--b3))] mt-[15px] mx-[5px]">
                            <figure className="px-10 pt-10">
                                <img src={line_de_healthcare} className="rounded-xl" />
                            </figure>
                            <div className="card-body items-center text-left p-[20px]">
                                <h2 className="card-title">LINEでヘルスケア</h2>
                                <p>
                                    LINE, LIFF, OpenPoseを用いて、スマホカメラから姿勢検知を行い、ヨガ姿勢の自動採点を行うアプリです。<br />
                                    沼津高専チャレンジコンテストにて優秀賞をいただきました。
                                </p>
                                <div className="card-actions ">
                                    <a href="https://www.numazu-ct.ac.jp/news/6066/" target="_blank"><button className="btn btn-sm btn-primary">関連サイト</button></a>
                                </div>
                            </div>
                        </div>

                        <div className="card w-96 bg-base-100 shadow-xl border border-[hsl(var(--b3))] mt-[15px] mx-[5px]">
                            <figure className="px-10 pt-10">
                                <img src={emojicode} className="rounded-xl" />
                            </figure>
                            <div className="card-body items-center text-left p-[20px]">
                                <h2 className="card-title">EmojiCode</h2>
                                <p>ブロックを使う言語とテキストを使う言語を融合させた画期的なプログラミング言語です。<br />第４回ジュニアプロコンin静岡にて最優秀賞をいただきました。</p>
                                <div className="card-actions ">
                                    <a href="https://emojicode-ide.nikachu.net/" target="_blank"><button className="btn btn-sm btn-primary">使ってみる</button></a>
                                    <a href="https://github.com/nikachu2012/EmojiCode-IDE" target="_blank"><button className="btn btn-sm btn-primary">ソースコード</button></a>
                                </div>
                            </div>
                        </div>

                        <div className="card w-96 bg-base-100 shadow-xl border border-[hsl(var(--b3))] mt-[15px] mx-[5px]">
                            <figure className="px-10 pt-10">
                                <img src={kosen_syllabus_kai} className="rounded-xl" />
                            </figure>
                            <div className="card-body items-center text-left p-[20px]">
                                <h2 className="card-title">高専シラバス改</h2>
                                <p>高専の公式シラバスがスマホなどで絶望的に見づらかったので制作しました。<br />利用には<a className="link" target="_blank" href="https://github.com/nikachu2012/kosen-syllabus-parser/">kosen-syllabus-parser</a>でデータの生成が必要です。</p>
                                <div className="card-actions ">
                                    <a href="https://syllabus.nikachu.net/" target="_blank"><button className="btn btn-sm btn-primary">使ってみる</button></a>
                                    <a href="https://github.com/nikachu2012/kosen-syllabus-kai" target="_blank"><button className="btn btn-sm btn-primary">ソースコード</button></a>
                                    <a href="https://zenn.dev/nikachu/articles/54f31c83e976c9" target="_blank"><button className="btn btn-sm btn-primary">Zennで見る</button></a>
                                </div>
                            </div>
                        </div>

                        <div className="card w-96 bg-base-100 shadow-xl border border-[hsl(var(--b3))] mt-[15px] mx-[5px]">
                            <figure className="px-10 pt-10">
                                <img src={clock} className="rounded-xl" />
                            </figure>
                            <div className="card-body items-center text-left p-[20px]">
                                <h2 className="card-title">Realtime-Clock</h2>
                                <p>デジタルとアナログの時計が表示できるものです。<br />JavaScriptの練習で制作しました。</p>
                                <div className="card-actions">
                                    <a href="https://realtimeclock.nikachu.net/" target="_blank"><button className="btn btn-sm btn-primary">使ってみる</button></a>
                                    <a href="https://github.com/nikachu2012/realtime-clock/" target="_blank"><button className="btn btn-sm btn-primary">ソースコード</button></a>
                                </div>
                            </div>
                        </div>

                        <div className="card w-96 bg-base-100 shadow-xl border border-[hsl(var(--b3))] mt-[15px] mx-[5px]">
                            <figure className="px-10 pt-10">
                                <img src={diary} className="rounded-xl" />
                            </figure>
                            <div className="card-body items-center text-left p-[20px]">
                                <h2 className="card-title">日記アプリ</h2>
                                <p>静岡県ジュニアプログラミングキャンプ SPAコースで作成したものです。Reactを利用して制作しました。</p>
                                <div className="card-actions">
                                    <a href="https://spa-diary.nikachu.net/" target="_blank"><button className="btn btn-sm btn-primary">使ってみる</button></a>
                                    <a href="https://github.com/nikachu2012/spa-diary" target="_blank"><button className="btn btn-sm btn-primary">ソースコード</button></a>
                                </div>
                            </div>
                        </div>

                        <div className="card w-96 bg-base-100 shadow-xl border border-[hsl(var(--b3))] mt-[15px] mx-[5px]">
                            <figure className="px-10 pt-10">
                                <img src={portfolio} className="rounded-xl" />
                            </figure>
                            <div className="card-body items-center text-left p-[20px]">
                                <h2 className="card-title">ポートフォリオ</h2>
                                <p>学んだ技術を活用して作成しました。v3ではReactを利用しています。</p>
                                <div className="card-actions">
                                    <a href="https://portfolio.nikachu.net/" target="_blank"><button className="btn btn-sm btn-primary">使ってみる</button></a>
                                    <a href="https://github.com/nikachu2012/portfolio" target="_blank"><button className="btn btn-sm btn-primary">ソースコード</button></a>
                                </div>
                            </div>
                        </div>

                        <div className="card w-96 bg-base-100 shadow-xl border border-[hsl(var(--b3))] mt-[15px] mx-[5px]">
                            <figure className="px-10 pt-10">
                                <img src={sc1} className="rounded-xl" />
                            </figure>
                            <div className="card-body items-center text-left p-[20px]">
                                <h2 className="card-title">しろくまクリッカーv1</h2>
                                <p>クッキークリッカーのパチモンです。JavaScriptに慣れることができた作品です。</p>
                                <div className="card-actions">
                                    <a href="https://v1.sirokumaclicker.nikachu.net/" target="_blank"><button className="btn btn-sm btn-primary">使ってみる</button></a>
                                    <a href="https://github.com/nikachu2012/Sirokuma-Clicker-V1" target="_blank"><button className="btn btn-sm btn-primary">ソースコード</button></a>
                                </div>
                            </div>
                        </div>



                        <div className="card w-96 bg-base-100 shadow-xl border border-[hsl(var(--b3))] mt-[15px] mx-[5px]">
                            <figure className="px-10 pt-10">
                                <img src={sc2} className="rounded-xl" />
                            </figure>
                            <div className="card-body items-center text-left p-[20px]">
                                <h2 className="card-title">しろくまクリッカーv2</h2>
                                <p>v1の後継です。Web系言語の深いところまで学ぶことができ、v1の改善点を改善した作品になりました。</p>
                                <div className="card-actions">
                                    <a href="https://v2.sirokumaclicker.nikachu.net/" target="_blank"><button className="btn btn-sm btn-primary">使ってみる</button></a>
                                    <a href="https://github.com/nikachu2012/Sirokuma-Clicker-V2" target="_blank"><button className="btn btn-sm btn-primary">ソースコード</button></a>
                                </div>
                            </div>
                        </div>

                        <div className="card w-96 bg-base-100 shadow-xl border border-[hsl(var(--b3))] mt-[15px] mx-[5px]">
                            <figure className="px-10 pt-10">
                                <img src={apex_roulette} className="rounded-xl" />
                            </figure>
                            <div className="card-body items-center text-left p-[20px]">
                                <h2 className="card-title">Apexルーレット</h2>
                                <p>Material-UIライブラリを利用してデザインにこだわりました。</p>
                                <div className="card-actions">
                                    <a href="https://apexroulette.nikachu.net" target="_blank"><button className="btn btn-sm btn-primary">使ってみる</button></a>
                                    <a href="https://github.com/nikachu2012/apex-roulette" target="_blank"><button className="btn btn-sm btn-primary">ソースコード</button></a>
                                </div>
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

export default Works

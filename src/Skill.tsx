import { useEffect } from "react";

import MenuBar from './components/MenuBar'
import img_nikachu from './assets/nikachu.webp'
import img_nikachu_noback from './assets/nikachu_noback.webp'
import { Link } from "react-router-dom";

function Skill() {

    useEffect(() => {
        document.title = `🎯Skill - Nikachu's portfolio`;
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

                    <div className="w-full flex justify-center content-center">
                        <div className="w-11/12 md:w-1/2 mt-[10px]">
                            <h2 className="text-2xl font-bold">🎯Skill</h2>

                            <div className="mt-[10px]">
                                <table className="table w-full">
                                    <thead>
                                        <tr>
                                            <th>言語</th>
                                            <th>得意度</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th>HTML</th>
                                            <td>
                                                <div className="rating">
                                                    <input type="radio" className="mask mask-star-2 bg-green-500" disabled />
                                                    <input type="radio" className="mask mask-star-2 bg-green-500" disabled />
                                                    <input type="radio" className="mask mask-star-2 bg-green-500" disabled />
                                                    <input type="radio" className="mask mask-star-2 bg-green-500" disabled />
                                                    <input type="radio" className="mask mask-star-2 bg-green-500" disabled checked />
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th>CSS</th>
                                            <td>
                                                <div className="rating">
                                                    <input type="radio" className="mask mask-star-2 bg-green-500" disabled />
                                                    <input type="radio" className="mask mask-star-2 bg-green-500" disabled />
                                                    <input type="radio" className="mask mask-star-2 bg-green-500" disabled />
                                                    <input type="radio" className="mask mask-star-2 bg-green-500" disabled />
                                                    <input type="radio" className="mask mask-star-2 bg-green-500" disabled checked />
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th>JavaScript</th>
                                            <td>
                                                <div className="rating">
                                                    <input type="radio" className="mask mask-star-2 bg-green-500" disabled />
                                                    <input type="radio" className="mask mask-star-2 bg-green-500" disabled />
                                                    <input type="radio" className="mask mask-star-2 bg-green-500" disabled />
                                                    <input type="radio" className="mask mask-star-2 bg-green-500" disabled />
                                                    <input type="radio" className="mask mask-star-2 bg-green-500" disabled checked />
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th>Python</th>
                                            <td>
                                                <div className="rating">
                                                    <input type="radio" className="mask mask-star-2 bg-green-500" disabled />
                                                    <input type="radio" className="mask mask-star-2 bg-green-500" disabled />
                                                    <input type="radio" className="mask mask-star-2 bg-green-500" disabled />
                                                    <input type="radio" className="mask mask-star-2 bg-green-500" disabled checked />
                                                    <input type="radio" className="mask mask-star-2 bg-green-500" disabled />
                                                </div>
                                            </td>
                                        </tr>

                                        <tr>
                                            <th>C++</th>
                                            <td>
                                                <div className="rating">
                                                    <input type="radio" className="mask mask-star-2 bg-green-500" disabled />
                                                    <input type="radio" className="mask mask-star-2 bg-green-500" disabled checked />
                                                    <input type="radio" className="mask mask-star-2 bg-green-500" disabled />
                                                    <input type="radio" className="mask mask-star-2 bg-green-500" disabled />
                                                    <input type="radio" className="mask mask-star-2 bg-green-500" disabled />
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <h2 className="text-2xl font-bold">GitHub Commit</h2>
                            <div className="w-full my-[10px]">
                                <img src="https://raw.githubusercontent.com/nikachu2012/nikachu2012/main/profile-3d-contrib/profile-night-rainbow.svg" alt="Nikachu's Status" />
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

export default Skill

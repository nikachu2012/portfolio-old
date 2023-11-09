import { useEffect } from "react";

import MenuBar from './components/MenuBar'
import img_nikachu from './assets/nikachu.webp'
import img_nikachu_noback from './assets/nikachu_noback.webp'
import { Link } from "react-router-dom";

function Social() {

    useEffect(() => {
        document.title = `🌐Social - Nikachu's portfolio`;
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

                    <div className="w-full h-[calc(100vh_-_64px)] flex justify-center items-center flex-col">
                        <h2 className="text-2xl font-bold">nikachuのSNS</h2>
                        <div className="flex flex-col items-center [&>*]:my-[5px] md:items-normal md:flex-row md:mt-[10px] md:[&>*]:mx-[5px]">
                            <a href="https://twitter.com/nikachu2012" target={"_blank"}><button className="btn btn-primary">X(Twitter)</button></a>
                            <a href="https://github.com/nikachu2012" target={"_blank"}><button className="btn btn-primary">GitHub</button></a>
                            <a href="https://www.instagram.com/nikachu2012/" target={"_blank"}><button className="btn btn-primary">Instagram</button></a>
                            <a href="https://www.youtube.com/@nikachu2012" target={"_blank"}><button className="btn btn-primary">YouTube</button></a>

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

export default Social

import React from 'react'
import MenuBar from './MenuBar'
import img_nikachu from './assets/nikachu.png'

import './index.css'

function Top() {
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
            <img className="w-10 ml-2 mr-1 rounded-full" src={img_nikachu} />
            <div className="flex-1 px-2 mr-2 font-bold text-xl">nikachu2012</div>
            <div className="flex-none hidden lg:block">
              <ul className="menu menu-horizontal [&>*]:ml-[5px] px-1">
                <MenuBar />
              </ul>
            </div>
          </div>
          Content
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

export default Top

import { useEffect } from 'react'
import MenuBar from './components/MenuBar'
import img_nikachu from './assets/nikachu.png'
import { Link } from 'react-router-dom'

function Top() {

  useEffect(() => {
    document.title = `Nikachu's Portfolio`;
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

          <div className="hero min-h-[calc(100vh_-_4rem)] bg-base-200">
            <div className="hero-content text-center">
              <div className="max-w-md">
                <div className='flex w-100 justify-center mb-[10px]'>
                  <img src={img_nikachu} alt="nikachu" className='w-24 rounded-full' />
                </div>

                <h1 className="text-5xl font-bold">Hello there👋</h1>
                <h2 className='text-2xl font-bold'>My name is <a className="underline" href=''>nikachu</a>.</h2>
                <p className="py-6">WebApp Creator</p>
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

export default Top

import '../css/header.css'
import logo from '../imgs/logo-burger.svg'
import { PiListBold } from "react-icons/pi";
import { IoCloseSharp } from "react-icons/io5";
import { useState } from 'react';


function Header() {

    const [listState, setlistState] = useState(false);
    const [headerShadow, setHeaderShadow] = useState(false);

    const [active, setActive] = useState(0);


    window.addEventListener("scroll", () => {

        if (window.scrollY > 100) {
            setHeaderShadow(true);
        }
        else {
            setHeaderShadow(false);
        }

    })


    return (
        <header className={headerShadow ? 'w-full flex flex-row justify-around items-center h-20 fixed top-0 z-20 header-shadow duration-500' : 'w-full flex flex-row justify-around items-center h-20 fixed top-0 z-20'}>
            <div className='flex flex-row items-center'>

                <div className='bg-yellow-400 p-1 rounded-md'>
                    <img className='w-6' src={logo} alt='Logo' />
                </div>

                <h1 className='capitalize font-bold ml-2 cursor-default'>burger</h1>
            </div>

            <div className='flex flex-row buttons-container'>
                <button onClick={() => setlistState(true)} className={listState == false ? 'font-bold text-3xl show-icon duration-500' : 'font-bold text-3xl hide-icon duration-500'}><PiListBold /></button>
                <button onClick={() => setlistState(false)} className={listState ? 'font-bold text-3xl show-icon duration-500' : 'font-bold text-3xl hide-icon duration-500'}><IoCloseSharp /></button>
            </div>

            <div className={listState ? 'links-list flex flex-col show-list duration-700' : 'links-list flex flex-col hide-list duration-700'}>
                <a className='capitalize font-bold mr-8 text-white hover:text-yellow-400 hover:translate-x-1 mt-10 ml-8 duration-300' href='#'>home</a>
                <a className='capitalize font-bold mr-8 text-white hover:text-yellow-400 hover:translate-x-1 mt-10 ml-8 duration-300' href='#recipe'>recipe</a>
                <a className='capitalize font-bold mr-8 text-white hover:text-yellow-400 hover:translate-x-1 mt-10 ml-8 duration-300' href='#popular'>popular</a>
                <a className='capitalize font-bold mr-8 text-white hover:text-yellow-400 hover:translate-x-1 mt-10 ml-8 duration-300' href='#delivery'>delivery</a>
                <a className='capitalize font-bold mr-8 text-white hover:text-yellow-400 hover:translate-x-1 mt-10 ml-8 duration-300' href='#contact'>contact</a>
            </div>

            <div className='header-links flex'>
                <a className='capitalize font-bold mr-8 text-black' href='#'>home</a>
                <a className='capitalize font-bold mr-8 text-black' href='#recipe'>recipe</a>
                <a className='capitalize font-bold mr-8 text-black' href='#popular'>popular</a>
                <a className='capitalize font-bold mr-8 text-black' href='#delivery'>delivery</a>
                <a className='capitalize font-bold mr-8 text-black' href='#contact'>contact</a>
            </div>
        </header >
    );
}

export default Header;
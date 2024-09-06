import '../css/popular.css'

import { HiMiniShoppingBag } from "react-icons/hi2";

import product1 from '../imgs/popular-burger-chicken.png'
import product2 from '../imgs/popular-burger-meat.png'
import product3 from '../imgs/popular-burger-grill.png'
import product4 from '../imgs/popular-burger-classic.png'
import product5 from '../imgs/popular-burger-big.png'


function Popular() {
    return (
        <section id='popular' className="popular-container flex flex-col pb-20">
            <h1 className="text-center capitalize text-3xl font-bold mb-20">most devoured <br /> burgers</h1>

            <div className='flex flex-row flex-wrap items-center justify-around'>

                <div className='product-container flex flex-col bg-yellow-400 px-12 pb-8 rounded-2xl border-white border-4' data-aos="fade-up">

                    <img className='w-40 product-img duration-500' src={product1} />
                    <h3 className='capitalize font-bold text-xl'>chicken <br /> burger</h3>

                    <div className='flex flex-row items-center justify-between'>
                        <p className='font-bold text-2xl mt-8'>$6</p>
                        <a className='h-fit bg-black text-white text-2xl px-2 py-2 rounded-xl mt-7' href='#'><HiMiniShoppingBag /></a>
                    </div>

                </div>

                <div className='product-container flex flex-col bg-yellow-400 px-12 pb-8 rounded-2xl border-white border-4' data-aos="fade-up">

                    <img className='w-40 product-img duration-500' src={product2} />
                    <h3 className='capitalize font-bold text-xl'>meat <br /> burger</h3>

                    <div className='flex flex-row items-center justify-between'>
                        <p className='font-bold text-2xl mt-8'>$10</p>
                        <a className='h-fit bg-black text-white text-2xl px-2 py-2 rounded-xl mt-7' href='#'><HiMiniShoppingBag /></a>
                    </div>

                </div>


                <div className='product-container flex flex-col bg-yellow-400 px-12 pb-8 rounded-2xl border-white border-4' data-aos="fade-up">

                    <img className='w-40 product-img duration-500' src={product3} />
                    <h3 className='capitalize font-bold text-xl'>grill <br /> burger</h3>

                    <div className='flex flex-row items-center justify-between'>
                        <p className='font-bold text-2xl mt-8'>$12</p>
                        <a className='h-fit bg-black text-white text-2xl px-2 py-2 rounded-xl mt-7' href='#'><HiMiniShoppingBag /></a>
                    </div>

                </div>


                <div className='product-container flex flex-col bg-yellow-400 px-12 pb-8 rounded-2xl border-white border-4' data-aos="fade-up">

                    <img className='w-40 product-img duration-500' src={product4} />
                    <h3 className='capitalize font-bold text-xl'>classic <br /> burger</h3>

                    <div className='flex flex-row items-center justify-between'>
                        <p className='font-bold text-2xl mt-8'>$8</p>
                        <a className='h-fit bg-black text-white text-2xl px-2 py-2 rounded-xl mt-7' href='#'><HiMiniShoppingBag /></a>
                    </div>

                </div>

                <div className='product-container flex flex-col bg-yellow-400 px-12 pb-8 rounded-2xl border-white border-4' data-aos="fade-up">

                    <img className='w-40 product-img duration-500' src={product5} />
                    <h3 className='capitalize font-bold text-xl'>big <br /> burger</h3>

                    <div className='flex flex-row items-center justify-between'>
                        <p className='font-bold text-2xl mt-8'>$15</p>
                        <a className='h-fit bg-black text-white text-2xl px-2 py-2 rounded-xl mt-7' href='#'><HiMiniShoppingBag /></a>
                    </div>

                </div>


            </div>


        </section>
    );
}

export default Popular;
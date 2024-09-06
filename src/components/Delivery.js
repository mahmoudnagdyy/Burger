import '../css/delivery.css'

import deliveryImg from '../imgs/delivery-burger.png'


function Delivery() {
    return (
        <section id='delivery' className="delivery-container flex flex-row justify-evenly items-center flex-wrap py-36 mb-36">
            <div className='flex flex-col' data-aos="zoom-in-right">
                <h2 className='capitalize font-bold text-3xl'>fast delivery</h2>
                <p className='my-5 first-letter:capitalize font-normal'>place your order for your favorite burger and we will <br /> deliver it to your door in minutes, get int touch and <br /> don't leave hungry.</p>
                <a className='text-black bg-yellow-400 w-fit capitalize font-bold my-8 py-3 px-2 rounded-xl hover:scale-110 duration-300' href='#'>contact now</a>
            </div>
            <img className='' src={deliveryImg} data-aos="zoom-in-left" />
        </section>
    );
}

export default Delivery;
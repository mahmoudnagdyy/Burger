import '../css/contact.css'

import contactMan from '../imgs/contact-man.png'

import { FaFacebook } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";

function Contact() {
    return (
        <section id='contact' className="contact-container flex flex-col justify-center">
            <h1 className='text-white font-bold capitalize text-3xl text-center mb-20' data-aos="fade-up">contact now</h1>

            <div className='flex flex-row flex-wrap justify-evenly'>

                <img className='contactMan' src={contactMan} data-aos="fade-up" />

                <div className='flex flex-col'>

                    <div className='flex flex-col'>
                        <h3 className='text-white capitalize text-2xl mb-4' data-aos="fade-up">write us</h3>

                        <div className='contact-links flex flex-row flex-wrap' data-aos="fade-up">
                            <a className='bg-yellow-400 text-3xl mr-4 p-1 rounded-lg duration-300' href=''><FaWhatsapp /></a>
                            <a className='bg-yellow-400 text-3xl mr-4 p-1 rounded-lg duration-300' href=''><FaFacebook /></a>
                            <a className='bg-yellow-400 text-3xl p-1 rounded-lg duration-300' href=''><FaTelegram /></a>
                        </div>

                        <div className='find flex flex-col mt-24' data-aos="fade-up">
                            <h3 className='text-white capitalize text-2xl mb-4'>find us here</h3>
                            <p className='text-white capitalize'>lima - sun city -  peru <br /> av. moon #4321</p>
                        </div>

                    </div>

                </div>



                <div className='call flex flex-col' data-aos="fade-up">
                    <h3 className='text-white capitalize text-2xl mb-4'>call us and order</h3>
                    <p className='text-white'>+0123456789</p>
                </div>

            </div>
        </section>
    );
}

export default Contact;
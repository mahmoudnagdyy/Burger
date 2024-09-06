import '../css/home.css'
import homeBurger from '../imgs/home-burger.png'
import homeDish from '../imgs/home-dish.png'

function Home() {
    return (
        <section className="home-conatiner flex flex-row justify-evenly items-center">
            <div className="flex flex-col animate__animated animate__fadeInUp">
                <h2 className='text-black capitalize font-bold text-5xl leading-normal'>love every <br /> burger</h2>
                <p className='text-stone-500 first-letter:capitalize mt-6 mb-5 font-medium'>we surve the best burgers on the planet,<br /> paving the way for cooking and preparing hot<br /> and delicious burgers.</p>
                <a className='mt-8 capitalize font-bold bg-amber-400 w-fit py-3 px-5 rounded-md hover:scale-105 duration-300' href='#'>buy now</a>
            </div>

            <div className='flex flex-col imgs-container animate__animated animate__fadeInUp'>
                <img className='z-10' src={homeBurger} />
                <img className='dish' src={homeDish} />
            </div>
        </section>
    );
}

export default Home;
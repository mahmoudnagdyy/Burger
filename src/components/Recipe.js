import '../css/recipe.css'

import recipeBurger from '../imgs/recipe-burger.png'
import recipeBread from '../imgs/recipe-bread.png'
import recipeCheese from '../imgs/recipe-cheese.png'
import recipeMeat from '../imgs/recipe-meat.png'
import recipeVegetable from '../imgs/recipe-vegetable.png'
import recipeSauces from '../imgs/recipe-sauces.png'



function Recipe() {
    return (
        <section id='recipe' className="recipe-container flex flex-col items-center">
            <h1 className="capitalize text-4xl mb-20 font-bold" data-aos="fade-up">our secret recipe</h1>

            <div className='recipe flex flex-row'>
                <img className='recipe-burger mr-20' src={recipeBurger} data-aos="fade-right"
                    data-aos-offset="300"
                    data-aos-easing="ease-in-sine" />

                <div className='flex flex-col items-center'>

                    <div className='flex flex-row mb-12' data-aos="fade-up"
                        data-aos-duration="3000">
                        <div className='bg-yellow-400 py-5 px-1 mr-5 rounded-2xl'>
                            <img className='h-14' src={recipeBread} />
                        </div>

                        <div className='flex flex-col justify-center'>
                            <h3 className='capitalize text-lg text-black'>bread</h3>
                            <p className='text-black first-letter:capitalize'>fresh bread, baked to <br /> perfection</p>
                        </div>
                    </div>


                    <div className='flex flex-row-reverse mb-12' data-aos="fade-up"
                        data-aos-duration="3000">
                        <div className='bg-yellow-400 py-5 px-1 ml-5 rounded-2xl'>
                            <img className='h-14' src={recipeCheese} />
                        </div>

                        <div className='flex flex-col justify-center'>
                            <h3 className='capitalize text-lg text-black'>cheese</h3>
                            <p className='text-black first-letter:capitalize'>cheese for a fantastic <br /> and healthy future</p>
                        </div>
                    </div>

                    <div className='flex flex-row mb-12' data-aos="fade-up"
                        data-aos-duration="3000">
                        <div className='bg-yellow-400 py-5 px-3 mr-5 rounded-2xl'>
                            <img className='h-16' src={recipeMeat} />
                        </div>

                        <div className='flex flex-col justify-center'>
                            <h3 className='capitalize text-lg text-black'>meat</h3>
                            <p className='text-black first-letter:capitalize'>100% pure beef, big <br /> and meaty</p>
                        </div>
                    </div>


                    <div className='flex flex-row-reverse mb-12' data-aos="fade-up"
                        data-aos-duration="3000">
                        <div className='bg-yellow-400 py-3 px-2  ml-5 rounded-2xl'>
                            <img className='w-20' src={recipeVegetable} />
                        </div>

                        <div className='flex flex-col justify-center'>
                            <h3 className='capitalize text-lg text-black'>vegetables</h3>
                            <p className='text-black first-letter:capitalize'>vegetables full of the<br /> essence of nature and <br />organic</p>
                        </div>
                    </div>


                    <div className='flex flex-row mb-12' data-aos="fade-up"
                        data-aos-duration="3000">
                        <div className='bg-yellow-400 py-5 px-4 mr-5 rounded-2xl'>
                            <img className='h-14' src={recipeSauces} />
                        </div>

                        <div className='flex flex-col justify-center'>
                            <h3 className='capitalize text-lg text-black'>sauces</h3>
                            <p className='text-black first-letter:capitalize'>fresh sauces, delicious <br /> for the balate.</p>
                        </div>
                    </div>


                </div>
            </div>
        </section>
    );
}

export default Recipe;

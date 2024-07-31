import React from 'react'

const Content = () => {
  return (
    <section class="text-gray-400 body-font bg-gray-900">
    <div className="content">
            <div class="container px-5 py-24 mx-auto">
            <div class="flex flex-wrap w-full mb-20">
            <div class="lg:w-1/2 w-full mb-6 lg:mb-0">
                <div className="heading">
                <h1 class="sm:text-3xl text-2xl font-medium title-font mb-2 text-white">Featured Recipe</h1>
                    <div class="h-1 w-20 bg-yellow-500 rounded">       
                    </div>
                </div>   
            </div>
            </div>
            <div class="flex flex-wrap -m-4">
            <div class="xl:w-1/4 md:w-1/2 p-4">
            <div className="card_color">
                <div class="bg-black p-6 rounded-lg">
                <img class="h-40 rounded w-full object-cover object-center mb-6" src="/images/dish1.png" alt="content"/>
                <h3 class="tracking-widest text-yellow-400 text-xs font-medium title-font">link Full Recipe</h3>
                <h2 class="text-lg text-white font-medium title-font mb-4">Spaghetti Carbonara</h2>
                <p class="leading-relaxed text-base">A classic Italian pasta with eggs, cheese, pancetta, and pepper. Rich, creamy, and perfect for a quick dinner or special treat.</p>
                </div>
            </div>
            </div>
            <div class="xl:w-1/4 md:w-1/2 p-4">
            <div className="card_color">
                <div class="bg-black p-6 rounded-lg">
                <img class="h-40 rounded w-full object-cover object-center mb-6" src="/images/dish2.png" alt="content"/>
                <h3 class="tracking-widest text-yellow-400 text-xs font-medium title-font">link Full Recipe</h3>
                <h2 class="text-lg text-white font-medium title-font mb-4">Chicken Tikka Masala</h2>
                <p class="leading-relaxed text-base">Marinated chicken in a creamy tomato sauce, packed with spices. A comforting Indian dish that delights every palate.</p>
                </div>
            </div>    
            </div>
            <div class="xl:w-1/4 md:w-1/2 p-4">
            <div className="card_color">
                <div class="bg-black p-6 rounded-lg">
                <img class="h-40 rounded w-full object-cover object-center mb-6" src="/images/dish3.png" alt="content"/>
                <h3 class="tracking-widest text-yellow-400 text-xs font-medium title-font">link Full Recipe</h3>
                <h2 class="text-lg text-white font-medium title-font mb-4">Beef Wellington</h2>
                <p class="leading-relaxed text-base">Beef tenderloin wrapped in puff pastry with mushrooms and pâté. An elegant dish for special occasions.</p>
                </div>
            </div>
            </div>
            <div class="xl:w-1/4 md:w-1/2 p-4">
                <div className="card_color">
                    <div class="bg-black p-6 rounded-lg">
                    <img class="h-40 rounded w-full object-cover object-center mb-6" src="/images/dish4.png" alt="content"/>
                    <h3 class="tracking-widest text-yellow-400 text-xs font-medium title-font">link Full Recipe</h3>
                    <h2 class="text-lg text-white font-medium title-font mb-4">Chocolate Lava Cake</h2>
                    <p class="leading-relaxed text-base">A decadent dessert with a molten chocolate center. Rich, gooey, and a favorite among chocolate lovers.</p>
                    </div>
                </div>
            </div>
            </div>
        </div>

    </div>
  
</section>
    
  )
}

export default Content
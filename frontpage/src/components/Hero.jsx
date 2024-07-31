import React from 'react'

const Hero = () => {
  return (
    <section class="text-gray-600 body-font">
      <div className="hero">
        <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
          <img class="object-cover object-center rounded" alt="hero" src="/images/dish.png"/>
        </div>
        <div class="heading lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
          <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-black-1000">Discover Your Next 
            <br class="hidden lg:inline-block"/>Favorite Recipe
          </h1>
          <p class="mb-8 leading-relaxed">Embark on a culinary journey with us, where you'll uncover a treasure trove of recipes ranging from timeless 
            family favorites to cutting-edge gourmet creations. 
            Whether you're a novice cook or a seasoned chef, 
            our meticulously crafted, easy-to-follow recipes, accompanied by expert tips and techniques, 
            will inspire you to create mouthwatering dishes that impress and delight. 
            Elevate your kitchen experience and bring new flavors to your table with 
            our diverse and delectable collection.</p>
          <div class="flex justify-center">
            <button class="inline-flex text-white bg-yellow-500 border-0 py-2 px-6 focus:outline-none hover:bg-yellow-600 rounded text-lg">Browse Recipes</button>
            <button class="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Join Our Community</button>
          </div>
        </div>
      </div>
    </div>
  
  </section>
  )
}

export default Hero;
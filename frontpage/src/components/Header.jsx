import React from 'react'

const Header = () => {
  return (
    <header class="text-gray-400 bg-chocolate-900 body-font ">
      <div className="HC">
      <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
      <a class="flex title-font font-medium items-center text-white mb-4 md:mb-0">
        <img src="/images/logo.png" alt="logo" />
        <span class="ml-3 text-xl">TASTE TALES</span>
      </a>
      <nav class="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
        <a class="mr-5 hover:text-white">HOME</a>
        <a class="mr-5 hover:text-white">RECIPES</a>
        <a class="mr-5 hover:text-white">BLOGS</a>
        <a class="mr-5 hover:text-white">ABOUT US</a>
      </nav>
      <button class="inline-flex items-center bg-black-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0">CONTACT
        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-1" viewBox="0 0 24 24">
          <path d="M5 12h14M12 5l7 7-7 7"></path>
        </svg>
      </button>
    </div>
    </div>
   
  </header>
)
}

export default Header;
import React from 'react'

const StechBanner = () => {
  return (
    <div class="bg-white">
  <div class="w-full">
    <div class="flex flex-col items-center  bg-[#2596be] p-4 sm:p-8 lg:flex-row lg:justify-between">
      <div class="mb-4 sm:mb-8 lg:mb-0">
        <h2 class="text-center text-xl font-extrabold text-white sm:text-2xl lg:text-left lg:text-4xl">A Concern of <span className='text-yellow-200' >Stech Group</span></h2>
        <p class="text-center text-white lg:text-left">Sign up for our newsletter</p>
      </div>

      <div class="flex flex-col items-center lg:items-end">
        <form class="mb-3 flex w-full max-w-md gap-2">
          <input placeholder="Email" class="bg-gray-white w-full flex-1 rounded border text-white px-3 py-2  outline-none  transition duration-100 focus:ring" />

          <button class="inline-block rounded bg-indigo-500 px-8 py-2 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700 md:text-base">Send</button>
        </form>

        <p class="text-center text-xs text-gray-400 lg:text-right">By signing up to our newsletter you agree to our <a href="#" class="underline transition duration-100 hover:text-indigo-500 active:text-indigo-600">Term of Service</a> and <a href="#" class="underline transition duration-100 hover:text-indigo-500 active:text-indigo-600">Privacy Policy</a>.</p>
      </div>
    </div>
  </div>
</div>
  )
}

export default StechBanner

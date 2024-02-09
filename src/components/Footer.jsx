import React from 'react'

function Footer() {
  return (
    <footer className=' w-full mt-auto h-fit shadow-lg bg-gray-50 bg-opacity-80 bg-gradient-to-b from-red-50 to-red-300'>
        <div className='text-black p-4 flex  flex-col items-center justify-center md:text-xl text-base' >
            <div>Data fetched from- <a href='https://reactnd-books-api.udacity.com/books' className='text-blue-300'>Udacity</a></div>
            <p>By Anshul Kashyap</p>
        </div>
    </footer>
  )
}

export default Footer
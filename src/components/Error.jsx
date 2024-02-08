import React from 'react'

function Error() {
  return (
    <div className='flex  flex-col justify-start md:m-80 my-60 mx-4 items-center'>
        <p className='text-2xl'>There seems to be an error Fetching data......</p>
        <button className='bg-red-300 p-4 rounded-xl m-4 ' onClick={()=>{window.location.reload()}}>Reload</button>
    </div>
  )
}

export default Error
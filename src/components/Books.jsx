import React from 'react'
import Rating from '@mui/material/Rating';
import { useNavigate } from 'react-router-dom';

function Books({data}) {

    const navigate = useNavigate();

  return (
    <>
    <div className='flex flex-row flex-wrap justify-center items-center m-10 mt-40'>
        {data.map((book)=>{
            return (
                <div key={book.id} onClick={()=>{navigate(`/${book.id}`)}} className='
                isolate aspect-video   bg-white/20  ring-1 ring-black
                flex cursor-pointer hover:bg-white  transition duration-300 flex-col items-center bg-white shadow-lg m-4 p-3 rounded-lg h-96 text-center my-10 mx-8 w-64
                bg-opacity-60
                '>
                    <img src={book.imageLinks.thumbnail} alt="" className='w-32 my-2 h-40'/>
                    <div className='flex p-4 flex-col items-center'>
                        <span className='text-lg font-bold'>{book.title}</span>
                        <span className='my-5 text-gray-500 text-sm'>{book.authors}</span>
                        <span className='text-center'>
                            {book.averageRating && <Rating name="read-only" precision={0.5} value={book.averageRating} readOnly />}
                            <br />
                            <span>{book.averageRating ? book.averageRating : null}</span>
                        </span>
                    </div>
                </div>
            )
        })}
    </div>
    </>
  )
}

export default Books
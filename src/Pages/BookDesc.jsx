import React, { useContext } from 'react'
import Navbar from '../components/Navbar'
import { useLocation } from 'react-router-dom'
import { DataContext } from '../App';
import Rating from '@mui/material/Rating';

function BookDesc() {

  const location = useLocation();
  const bookId = location.pathname.split("/")[1];

  const bookData = useContext(DataContext);
  console.log(bookData);
  return (
    <>
    <Navbar back={true}/>
    {bookData.filter((book)=>{
        return book.id === bookId
    }).map((book)=>{
        return (
    <div key={book.id} className='flex mt-60 flex-row justify-center items-center my-10 mx-8'>
                <div className='flex p-4 flex-col items-center'>
                <img src={book.imageLinks.thumbnail} alt="" className='w-64 my-2 h-96'/>
                    <span className='text-2xl w-3/5 text-center font-bold'>{book.title}</span>
                    <span className='text-lg font-bold'>{book.subtitle}</span>
                    <span className='my-5 text-gray-500 text-sm'>{book.authors}</span>
                    {book.averageRating && <Rating name="read-only" precision={0.5} value={book.averageRating} readOnly />}
                    <span className='text-center'>
                        <span>{book.averageRating ? book.averageRating : null}</span>
                    </span>
                    <br />
                    <br />
                </div>
                    <div className='w-2/5'>
                        <a href={`${book.previewLink}`} target='_blank'>
                            <button className='mb-4 p-3 bg-green-500 rounded text-white'>
                                Get Book
                            </button>
                            </a>
                    <h1 className='font-bold text-lg text-gray-800'>Description:</h1>
                    <p className='text-gray-600' >{book.description}</p>
                    </div>
            </div>         
        )
    })}
    </>
  )
}

export default BookDesc



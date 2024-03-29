import React from 'react'
import Navbar from '../components/Navbar'
import axios from 'axios'
import { useEffect, useState } from 'react'
import Books from '../components/Books'
import Loader from '../components/Loader'
import { useLocation } from 'react-router-dom'
import Error from '../components/Error'

function Home() {
  const [login, setLogin] = useState(false)
  const [books, setBooks] = useState([])
  const [loader, setLoader] = useState(true)
  const [error, setError] = useState(false)

  const location = useLocation();

  useEffect(()=>{
    if(location.state){
    setLogin(true);
  }else{
    setLogin(false);
  }
})
  const formData = location.state ? location.state.Data : null;
  console.log(formData);
  



  useEffect(() => {
    axios.get("https://reactnd-books-api.udacity.com/books",{ headers: { 'Authorization': 'whatever-you-want' }})
    .then((response) => {console.log(response.data.books); setBooks(response.data.books);  setLoader(false)})
    .catch((err) => {console.log(err); setLoader(false); setError(true)})
  }, [])
  

  return (
    <div className=''>
      <Navbar data={formData} login={login}/>
      
      {loader ? <Loader /> : <Books data={books} />}
      {error && <Error/> }
    </div>
  )
}

export default Home
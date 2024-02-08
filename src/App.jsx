import { Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home'
import Register from './Pages/Register'
import BookDesc from './Pages/BookDesc'
import User from './Pages/User'

import { useState, useEffect, createContext } from 'react'
import axios from 'axios'

export const DataContext = createContext(); 
function App() {

  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("https://reactnd-books-api.udacity.com/books", { headers: { 'Authorization': 'whatever-you-want' } })
      .then((response) => {
        console.log(response.data.books);
        setData(response.data.books);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <>
      <DataContext.Provider value={data}>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/Register' element={<Register />}></Route>
        <Route path='/:id' element={<BookDesc />}></Route>
        <Route path='/user' element={<User />}></Route>
      </Routes>
      </DataContext.Provider>
    </>
  )
}

export default App

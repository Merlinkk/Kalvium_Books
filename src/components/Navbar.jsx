import React from 'react'
import { Link } from 'react-router-dom'
import SearchIcon from '@mui/icons-material/Search';
// import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn';
import {useState, useRef, useEffect, useContext} from 'react'
import { DataContext } from '../App';
import { useNavigate } from 'react-router-dom';
import ReplyIcon from '@mui/icons-material/Reply';

function Navbar({pathname,back,data,login}) {
  

  const navigate = useNavigate();

  const bookData = useContext(DataContext);
  const [state, setState] = useState('')
    const [dropDownVisibility, setDropDownVisibility] = useState(true)
    const inputRef = useRef(null);

    const handleChange = (e) => {
        setState(e.target.value)
        setDropDownVisibility(true)
    }

    var filtered = bookData.filter((elem)=>{
        return elem.title.toLowerCase().includes(state.toLocaleLowerCase())
    })


    const handleEscapeKey = (e) => {
        if (e.key === 'Escape' && inputRef.current !== document.activeElement) {
          setDropDownVisibility(false);
          console.log('Escape');
        }
      };
    
      useEffect(() => {
        document.addEventListener('keydown', handleEscapeKey);
    
        return () => {
          document.removeEventListener('keydown', handleEscapeKey);
        };
      }, []);


  return (
    <nav className='flex flex-row z-10 justify-between items-center bg-white bg-opacity-10 backdrop-blur-xl shadow-lg fixed top-0 w-full p-2'>
        <div className='flex md:flex-row items-center m-3'>
        <Link to={{ pathname: '/', state: { data } }}>
            {back && <ReplyIcon style={{fontSize:'45px'}} className='mt-2 text-red-500' />}
        </Link>
        {!back && <Link to={{ pathname: '/', state: { data } }}>
            <img className='md:h-8 h-5 klv-logo' src="/Kalvium-Logo.svg" alt="" />
        </Link>}
        {!back && <span className='md:text-3xl sm:text-2xl mt-1 ml-2 font-bold text-red-500'>
                Books
            </span>}
        </div>
        
        {pathname !== '/Register' && (
        <div className='w-2/5 flex relative flex-col justify-center items-center'>
          <input
            onChange={handleChange}
            type="search"
            className='w-full h-10 bg-white pl-4 outline-none rounded pr-2' 
            placeholder='Search books'
          />


          {/* <button
            className='w-20 h-10 bg-white hover:bg-red-400 flex items-center justify-center rounded-r'
          >
            <SearchIcon />
          </button> */}

        <div className=' absolute top-8 z-10 pt-2 bg-white text-gray-400 w-full'>
        {state === '' ? null : 
        dropDownVisibility ? 
        <ul style={{listStyle: 'none',}}>
        {filtered ? filtered.map((elem)=>{
            return<li className=' cursor-pointer hover:bg-red-400 hover:text-white p-5' onClick={() => {navigate(`/${elem.id}`); setDropDownVisibility(false)}} key={elem.id}>
            {elem.title}
          </li>
        }) : <li className='cursor-pointer hover:bg-red-400 hover:text-white p-5'>No Books Found</li>}
        </ul> : null
        }
    </div>

        </div>
      )}

        <div className='flex  p-3 flex-row items-center justify-end' >
            <Link to={'/Register'}>
                <button className={` sm:p-2 shaodw-lg outline-none bg-white hover:bg-opacity-10 bg-opacity-30 transition text-white md:text-xl text-lg rounded sm:px-4 p-1 px-2 ${login ? 'bg-green-600 bg-opacity-100' : null} `}>{login ? data.name : 'Register'}</button>
            </Link>
        </div>

    </nav>
  )
}

export default Navbar
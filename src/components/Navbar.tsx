import { useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { signInWithPopup, signOut } from 'firebase/auth'
import { auth, Providers } from '../config/firebase.config'

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(false)

  const signOutOnClick = () => {
    signOut(auth);
    location.reload()
  }

  const signInOnClick = async () => {
    const response = await signInWithPopup(auth, Providers.google);
    if ( response.user ) {
        location.reload();
    }
  }

  const dropDown = () => {
    setIsVisible(!isVisible)
  }

  const clicked = () => {
    setIsVisible(false)
  }

  return (
    <nav className='flex items-center justify-between flex-wrap bg-red-800 p-6 font-serif'>
      <div className='flex items-center flex-shrink-0 text-amber-300 mr-6'>
          <Link to='/' className='font-semibold text-xl tracking-tight'>The Whiskey Locker</Link>
      </div>
      <div className="block">
          <button 
              onClick={dropDown}
              className="flex items-center px-3 py-2 text-amber-400 border rounded border-amber-400 hover:text-white hover:border-white">
              <i className="fa-solid fa-bars-staggered"></i>
          </button>
      </div>
      { isVisible ? (
          <div className='w-full block flex-grow items-center'>
              <div className="text-sm lg:flex-grow">
                  <button className='p-3 m-5 bg-amber-300 justify-center rounded-lg'>
                      <div>
                          <Link to='/' onClick={ clicked } className='flex place-items-center mt-4 lg:inline-block lg:mt-0
                          text-amber-800 hover:text-white mr-4'>Home</Link>
                      </div>
                  </button>
                  <button className='p-3 m-5 bg-amber-300 justify-center rounded-lg'>
                      <div>
                          <Link to='/dashboard' onClick={ clicked } className='flex place-items-center mt-4 lg:inline-block lg:mt-0
                          text-amber-800 hover:text-white mr-4'>Dashboard</Link>
                      </div>
                  </button>                  
                    {
                        !auth.currentUser ? 
                        <button className='p-3 m-5 bg-amber-300 justify-center rounded-lg'>
                            <div>
                                <Link to='/' onClick={ () => {signInOnClick()}} className='flex place-items-center mt-4 lg:inline-block lg:mt-0
                                text-amber-800 hover:text-white mr-4'>
                                    Login
                                </Link>
                            </div>
                        </button>
                            :
                        <button className='p-3 m-5 bg-amber-300 justify-center rounded-lg'>
                            <div>
                                <Link to='/' onClick={ () => {signOutOnClick()}} className='flex place-items-center mt-4 lg:inline-block lg:mt-0
                                text-amber-800 hover:text-white mr-4'>
                                    Logout
                                </Link>
                            </div>
                        </button>
                    }
                  
              </div>
            </div>
        ):(<></>)
      }</nav>
  )
}




export default Navbar

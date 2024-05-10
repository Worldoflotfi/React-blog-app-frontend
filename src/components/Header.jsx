import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaBars } from 'react-icons/fa'
import { AiOutlineClose } from 'react-icons/ai'

const Header = () => {
  const [isNavShowing, setIsNavShowing] = useState(false);
  const closeNavHandler = () => {
    if(window.innerWidth < 800){
      setIsNavShowing(true);
    } else {
      setIsNavShowing(false)
    }
  }
  return (
    <nav>
        <div className = "container nav__container">
          <Link to='/' onClick={closeNavHandler}>
            <h2 className='logo' >BLOG</h2>  
          </Link>
                     
           {isNavShowing && <ul className="nav__menu">
                <li><Link to='/profile/sdfsdf' onClick={closeNavHandler}>Mohamed Amine Lotfi</Link></li>
                <li><Link to='/create' onClick={closeNavHandler}>Create Post</Link></li>
                <li><Link to='/authors' onClick={closeNavHandler}>Authors</Link></li>
                <li><Link to='/login' onClick={closeNavHandler}>Logout</Link></li>
            </ul>}
            <button className="nav__toggle-btn" onClick={() => setIsNavShowing(!isNavShowing)}>
                {isNavShowing ? <AiOutlineClose/> : <FaBars/>}
            </button>
        </div>
    </nav>
  )
}

export default Header
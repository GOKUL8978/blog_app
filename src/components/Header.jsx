import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='Navbar'>
        <div className="container">
        <div className="title">
          <img src="https://cdn.logojoy.com/wp-content/uploads/2018/05/30164213/375.png" alt="" width="60px"/>
          <h1><Link to="/"  className='link'>MyBlog</Link> </h1>
        </div>
        <div className="right">
           <Link className='link' to="/?cat=art"><h6>Art</h6> </Link>
            <Link className='link' to="/?cat=science"><h6>Science</h6> </Link>
             <Link className='link' to="/?cat=food"><h6>Food</h6> </Link>
              <Link className='link' to="/?cat=lifestyle"><h6>Lifestyle</h6> </Link>
               <Link className='link' to="/?cat=education"><h6>Education</h6> </Link>
               <span>Gokul</span>
               <span>Logout</span>
               <span className='post'>
                <Link className='link' to="/write">Post</Link>
               </span>
        </div>
        </div>
    </div>
  )
}

export default Header
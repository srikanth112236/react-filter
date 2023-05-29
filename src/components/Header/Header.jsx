import React from 'react'
import Alert from 'react-bootstrap/Alert';
import { Link } from 'react-router-dom';
const Header = () => {
  return (
    <div>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
   <Link className='text-decoration-none text-black ' to='/'>Signet</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className=" mx-2 px-5 navbar-nav">
        <li className=" mx-2 px-5 nav-item">
          <Link className='text-decoration-none text-black ' to='/' >Home</Link>
        </li>
        <li className=" mx-2 px-5 nav-item">
        <Link className='text-decoration-none text-black ' to='/courses' >Courses</Link>
        </li>
        <li className=" mx-2 px-5 nav-item">
        <Link className='text-decoration-none text-black ' to='/form' >Form</Link>
        </li>
     
      </ul>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Header
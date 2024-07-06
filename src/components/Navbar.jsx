import React from 'react'
import { routes } from '../config/route'
import { Link } from 'react-router-dom'

const Navbar = () => {
  
  return (
    <div className='ga-maamli-regular'>
      <h2>Dashboard</h2>
      <div className='tab-links active-link'>
        {routes.map((page) => (
          <Link to={page.path}>{page.name}</Link>
        ))}
      </div>
    </div>
  )
}

export default Navbar

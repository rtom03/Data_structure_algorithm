import React from 'react'
import { routes } from '../config/route'
import { Link } from 'react-router-dom'
import { FaBars } from 'react-icons/fa'
import { MdDashboard } from 'react-icons/md'

const Navbar = () => {
  
  return (
    <div className='ga-maamli-regular'>
      <div className='flex flex-col justufy-center'>
      <div className='flex flex-row gap-2 items-center pb-5'>
        <MdDashboard />
      <h2 className='header'>Dashboard</h2>
      </div>
      <div className='tab-links active-link'>
        {routes.map((page) => (
          <Link to={page.path}>{page.name}</Link>
        ))}
      </div>
      </div>
    </div>
  )
}

export default Navbar

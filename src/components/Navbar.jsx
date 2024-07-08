
import React from 'react';
import { routes } from '../config/route';
import { Link } from 'react-router-dom';
import { FaBars, FaHashtag, FaRedo, FaSearch, FaStaylinked, FaSync } from 'react-icons/fa';
import { MdDashboard } from 'react-icons/md';
import { FaChartLine, FaSort, FaTree } from 'react-icons/fa6';

const Navbar = () => {
  return (
    <div className='ga-maamli-regular'>
      <div className='flex flex-col justify-center'>
        <div className='flex flex-row gap-2 items-center pb-5'>
          <MdDashboard size={24} />
          <h2 className='header'>Dashboard</h2>
        </div>
        <div className='flex flex-row items-start'>
          <div className='flex flex-col gap-8 pr-4'>
            <FaSync size={17} className='mt-1'/>
            <FaChartLine size={17} />
            <FaHashtag size={17} />
            <FaStaylinked />
            <FaRedo size={17} />
            <FaSearch size={17} />
            <FaSort size={17} />
            <FaTree size={17} className='mb-2'/>
          </div>
          <div className='tab-links'>
            {routes.map((page) => (
              <Link to={page.path} key={page.path} className='link'>
                {page.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

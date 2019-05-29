import React from 'react'
import { Link } from 'react-router-dom'

const Links = () => (
  <ul className='nav justify-content-center flex-container'>
    <li className='nav-item'>
      <Link className='nav-link active' to='/'>Home</Link>
    </li>
    <li className='nav-item'>
      <Link className='nav-link' to='/leaderboard'>Leaderboard</Link>
    </li>
    <li className='nav-item'>
      <Link className='nav-link' to='/login'>Logout</Link>
    </li>
  </ul>
)


export default Links

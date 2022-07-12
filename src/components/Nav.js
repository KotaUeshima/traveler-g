import React from 'react'
import { Link} from 'react-router-dom'

function Nav() {
  return (
    <nav>
      <Link to='/'>Home</Link>
      <Link to='/about'>About</Link>
      <Link to='/traveler-experiences'>Traveler Experiences</Link>
    </nav>
  )
}

export default Nav
import React from 'react'
import { Link } from 'react-router-dom'

const Links = () => (
  <>
    <p>
      <Link to='/scoreboard'>Score Board</Link>
    </p>
    <p>
      <Link to='/leaderboard'>Leaderboard</Link>
    </p>
    <p>
      <Link to='/login'>Logout</Link>
    </p>
  </>
)


export default Links

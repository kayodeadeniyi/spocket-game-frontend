import React from 'react'
import { connect } from 'react-redux'

import Scoreboard from './Scoreboard'
import Game from './Game'


class HomePage extends React.Component {
  render() {
    const { user } = this.props

    return (
      <div>
        <h1>Hi {user.first_name}!</h1>
        <Game />
        <Scoreboard />
      </div>
    )
  }
}

const mapStateToProps = ({authentication}) => {
  const { user } = authentication

  return {user}
}

export default connect(mapStateToProps)(HomePage)

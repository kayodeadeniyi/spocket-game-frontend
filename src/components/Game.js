import React from 'react'
import { connect } from 'react-redux'

import { scoreboardActions } from '../actions'

class Game extends React.Component {
  constructor() {
    super()

    this.state = {startGame: false}
  }

  initializeGame = () => {
    this.setState({startGame: true})
  }

  render() {
    return (
      <div>
        {
          this.state.startGame ?
            (
              <div>
                Game is starting
              </div>
            ) :
            <button
              type='button'
              onClick={this.initializeGame}
              className='btn btn-primary'
            >
              Start Game
            </button>
        }
      </div>
    )
  }
}

const mapStateToProps = ({scoreboards}) => ({scoreboards})

export default connect(mapStateToProps)(Game)

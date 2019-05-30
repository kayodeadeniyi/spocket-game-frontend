import React from 'react'
import { connect } from 'react-redux'

import Wheel from './Wheel'

import { scoreboardActions, alertActions } from '../actions'


class Game extends React.Component {
  constructor() {
    super()

    this.state = {
      startGame: false,
      score: {'user 1': 0, 'user 2': 0}
    }
  }

  updateScore = (winner) => {
    this.setState({score: {...this.state.score, [winner]: this.state.score[winner] + 1}})
  }

  initializeGame = () => {
    this.setState({startGame: true})
  }

  display = (winner) => {
    this.setState({winner})
  }

  componentDidUpdate(prevProps, prevState) {
    const prevScoreValues = Object.values(prevState.score)
    const currentScoreValues = Object.values(this.state.score)
    if (currentScoreValues.includes(3) && JSON.stringify(prevScoreValues) !== JSON.stringify(currentScoreValues)) {
      // TODO: Put the actual user that won.
      this.props.dispatch(alertActions.success('Someone won'))
      this.props.dispatch(scoreboardActions.submitGameResult(this.prepareParams()))
      setTimeout(() => {
        this.setState({
          score: {'user 1': 0, 'user 2': 0},
          startGame: false
        })
        this.props.dispatch(alertActions.clear())
      }, 2000)
    }
  }

  prepareParams() {
    const score = this.state.score

    return (
      {
        winner_id: score['user 1'] > score['user 2'] ? 1 : 2,
        loser_id: score['user 1'] < score['user 2'] ? 1 : 2,
        winner_score: score['user 1'] > score['user 2'] ? score['user 1'] : score['user 2'],
        loser_score: score['user 1'] < score['user 2'] ? score['user 1'] : score['user 2']
      }
    )
  }

  render() {
    return (
      <div className='game'>
        {!this.state.startGame && <button type='button' onClick={this.initializeGame} className='btn btn-primary'>Start Game</button>}
        {this.state.startGame &&
          <>
            <div>
              <p>Current game score</p>
              <p>User 1: {this.state.score['user 1']}</p>
              <p>User 2: {this.state.score['user 2']}</p>
            </div>
            <Wheel updateScore={this.updateScore} />
          </>
        }

      </div>
    )
  }
}

const mapStateToProps = ({scoreboards}) => ({scoreboards})

export default connect(mapStateToProps)(Game)

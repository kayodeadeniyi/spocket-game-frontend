import React from 'react'
import { connect } from 'react-redux'

import { scoreboardActions } from '../actions'

class Scoreboard extends React.Component {
  componentDidMount() {
    !this.props.scoreboards.allGames && this.props.dispatch(scoreboardActions.getAll())
  }

  render() {
    const { scoreboards } = this.props

    return (
      <div>
        <p>ScoreBoard</p>
        <table className='table'>
          <thead>
            <tr>
              <th scope='col' >S/N</th>
              <th scope='col' >Winner</th>
              <th scope='col' >Score</th>
            </tr>
          </thead>
          <tbody>
            {
              scoreboards.allGames &&
              scoreboards.allGames.map((game, index) => (
                <tr key={game.id}>
                  <td>{index + 1}</td>
                  <td>{`${game.winner.first_name} ${game.winner.last_name}`}</td>
                  <td>{`${game.winner_score} - ${game.loser_score}`}</td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    )
  }
}

const mapStateToProps = ({scoreboards}) => ({scoreboards})

export default connect(mapStateToProps)(Scoreboard)

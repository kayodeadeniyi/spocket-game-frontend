import React from 'react'
import { connect } from 'react-redux'

import { scoreboardActions } from '../actions'

class Scoreboard extends React.Component {
  componentDidMount() {
    !this.props.scoreboards.allScores && this.props.dispatch(scoreboardActions.getAll())
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
              scoreboards.allScores &&
              scoreboards.allScores.map((score, index) => {
                return(
                  <tr key={score.id}>
                    <td>{index + 1}</td>
                    <td>{`${score.winner.first_name} ${score.winner.last_name}`}</td>
                    <td>{`${score.winner_score} - ${score.loser_score}`}</td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
      </div>
    )
  }
}

const mapStateToProps = ({scoreboards}) => ({scoreboards})

export default connect(mapStateToProps)(Scoreboard)

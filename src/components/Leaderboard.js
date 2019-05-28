import React from 'react'
import { connect } from 'react-redux'

import { userActions } from '../actions'

class Leaderboard extends React.Component {
  componentDidMount() {
    this.props.dispatch(userActions.getAll())
  }

  render() {
    const { users } = this.props

    return (
      <div>
        <p>Leaderboard</p>
        <table className='table'>
          <thead>
            <tr>
              <th scope='col' >S/N</th>
              <th scope='col' >First Name</th>
              <th scope='col' >Last Name</th>
              <th scope='col' >Email</th>
              <th scope='col' >Score</th>
            </tr>
          </thead>
          <tbody>
            { users.allUsers &&
              users.allUsers.map((user, index) => {
                return(
                  <tr key={user.email}>
                    <td>{index + 1}</td>
                    <td>{user.first_name}</td>
                    <td>{user.last_name}</td>
                    <td>{user.email}</td>
                    <td>{user.score}</td>
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

const mapStateToProps = ({users}) => ({users})

export default connect(mapStateToProps)(Leaderboard)

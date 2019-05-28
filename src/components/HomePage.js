import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import { userActions } from '../actions'

class HomePage extends React.Component {
  componentDidMount() {
    this.props.dispatch(userActions.getAll())
  }

  render() {
    const { user, users } = this.props

    return (
      <div>
        <h1>Hi {user.first_name}!</h1>
        <h3>All users</h3>
        {users.loading && <em>Loading users...</em>}
        {
          users.allUsers &&
          <ul>
            {users.allUsers.map(user =>
              <li key={user.id}>
                {`${user.first_name} ${+ user.last_name}`}
              </li>
            )}
          </ul>
        }
        <p>
          <Link to='/login'>Logout</Link>
        </p>
      </div>
    )
  }
}

const mapStateToProps = state => {
  const { users, authentication } = state
  const { user } = authentication

  return {
    user,
    users
  }
}

export default connect(mapStateToProps)(HomePage)

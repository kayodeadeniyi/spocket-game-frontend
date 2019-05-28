import React from 'react'
import { connect } from 'react-redux'

import { userActions } from '../actions'

class HomePage extends React.Component {
  componentDidMount() {
    this.props.dispatch(userActions.getAll())
  }

  render() {
    const { user } = this.props

    return (
      <div>
        <h1>Hi {user.first_name}!</h1>
      </div>
    )
  }
}

const mapStateToProps = ({authentication}) => {
  const { user } = authentication

  return {user}
}

export default connect(mapStateToProps)(HomePage)

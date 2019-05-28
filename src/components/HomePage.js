import React from 'react'
import { connect } from 'react-redux'


class HomePage extends React.Component {
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

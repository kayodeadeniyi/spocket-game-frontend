import React from 'react'
import { Router, Route } from 'react-router-dom'
import { connect } from 'react-redux'

import { history } from '../helpers'
import { alertActions } from '../actions'
import { PrivateRoute } from '../components/PrivateRoute'
import HomePage from '../components/HomePage'
import LoginPage from '../components/LoginPage'

class App extends React.Component {
  constructor(props) {
    super(props)

    const { dispatch } = this.props
    history.listen((location, action) => dispatch(alertActions.clear()))
  }

  render() {
    const { alert } = this.props

    return (
      <div>
        {alert.message && <div className={`alert ${alert.type}`}>{alert.message}</div>}
        <Router history={history}>
          <PrivateRoute exact path='/' component={HomePage} />
          <Route path='/login' component={LoginPage} />
        </Router>
      </div>
    )
  }
}

const mapStateToProps = ({alert}) => ({alert})

export default connect(mapStateToProps)(App)

import React from 'react'
import { Route, Redirect } from 'react-router-dom'

export const PrivateRoute = ({ component: Component, ...rest }) => {
  const renderFunction = props => (
    localStorage.getItem('user') ?
    <Component {...props} /> :
    <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
  )

  return (
    <Route
      {...rest}
      render={renderFunction}
    />
  )
}

import React from 'react'
import { Route, Redirect } from 'react-router-dom'

import Links from '../components/Links'

export const PrivateRoute = ({ component: Component, ...rest }) => {
  const renderFunction = props => (
    localStorage.getItem('user') ?
    (
      <div>
        <Links />
        <Component {...props} />
      </div>
    ) :
    <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
  )

  return (
    <Route
      {...rest}
      render={renderFunction}
    />
  )
}

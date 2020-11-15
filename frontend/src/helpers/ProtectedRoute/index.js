import React from 'react'
import propTypes from 'prop-types'
import { Route, Redirect } from 'react-router-dom'
import { getToken } from '../Account'

const ProtectedRoute = ({ component, path }) => {
	return getToken() ? (
		<Route component={component} path={path} />
	) : (
		<Redirect to="/sign-in" />
	)
}

ProtectedRoute.propTypes = {
	component: propTypes.object.isRequired,
	path: propTypes.string.isRequired,
}

export default ProtectedRoute

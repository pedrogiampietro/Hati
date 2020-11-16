import React, { Component } from 'react'
import { Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { getAccount } from '../account'

const ProtectedRoute = ({ component: Component, account, ...rest }) => {
	const MinhaConta = getAccount()
	return (
		<Route
			{...rest}
			render={(props) => {
				if (MinhaConta) return <Component {...props} />
				else
					return (
						<Redirect to={{ pathname: '/', state: { from: props.location } }} />
					)
			}}
		/>
	)
}

const mapStateToProps = (state) => {
	return { account: state.account.account }
}

export default connect(mapStateToProps)(ProtectedRoute)

import React from 'react'
import { connect } from 'react-redux'
import { useHistory } from 'react-router-dom'

import PasswordStrengthBar from 'react-password-strength-bar'
import Container from '../../Layouts/Container'
import { toast, ToastContainer } from 'react-toastify'

import { changePassword } from '../../../actions/AccountActions'
import { getFormData } from '../../../helpers/FormData'

import Error from '../../../helpers/Error'

const ChangePassword = ({ account, changePassword }) => {
	const [passwordStrength, setPasswordStrength] = React.useState('')
	const [inputError, setInputError] = React.useState()
	const history = useHistory()

	const submitHandler = (event) => {
		event.preventDefault()

		const data = getFormData(event)
		changePassword(data)
			.then(() => {
				toast.success('Your password has been successfully exchanged..')
				setTimeout(() => history.push('/account/characters'), 5000)
			})
			.catch((err) => {
				const { data } = err.response
				const botacara = data.metadata.error
				Object.values(botacara).map((err) => setInputError(err))
			})
	}

	return (
		<Container>
			<div className="panel panel-default">
				<div className="panel-heading">Change Password</div>
				<div className="panel-body">
					<Error error={JSON.stringify(inputError)} />

					<form onSubmit={submitHandler}>
						<div className="form-group">
							<label htmlFor="password">New Password</label>
							<input
								type="password"
								className="form-control"
								id="password"
								name="password"
								placeholder="New Password"
								onChange={(e) => setPasswordStrength(e.target.value)}
								required
							/>
						</div>
						<div className="form-group">
							<label>Password Strength</label>

							<PasswordStrengthBar
								barColors={['#ddd', '#ef4836', '#f6b44d', '#2b90ef', '#26c281']}
								shortScoreWord=""
								scoreWords={['Weak', 'Weak', 'Okay', 'Good', 'Strong']}
								password={passwordStrength || ''}
							/>
						</div>
						<div className="form-group">
							<label htmlFor="password_confirmation">Repeat New Password</label>
							<input
								type="password"
								className="form-control"
								id="password_confirmation"
								name="password_confirmation"
								placeholder="Repeat New Password"
								required
							/>
						</div>

						<button type="submit" className="btn btn-default btn-sm">
							Change Password
						</button>
						<a href="/account/manage">
							<button type="button" className="btn btn-default btn-sm">
								Return
							</button>
						</a>
					</form>
				</div>
			</div>
			<ToastContainer />
		</Container>
	)
}

const mapStateToProps = (state) => {
	return {
		account: state.account.account,
	}
}

export default connect(mapStateToProps, { changePassword })(ChangePassword)

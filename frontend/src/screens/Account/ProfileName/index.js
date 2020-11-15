import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { useHistory } from 'react-router-dom'
import { profileName } from '../../../actions/AccountActions'

import { getFormData } from '../../../helpers/FormData'
import Container from '../../Layouts/Container'
import Error from '../../../helpers/Error'

const ProfileName = ({ profileName }) => {
	const [error, setError] = React.useState()
	const history = useHistory()

	const submitHandler = (event) => {
		event.preventDefault()
		const data = getFormData(event)
		profileName(data)
			.then(() => {
				history.push('/account/characters')
			})
			.catch((err) => {
				const { data } = err.response
				setError(data.message)
			})
	}

	return (
		<Container>
			<div id="contentBody" className="col-sm-9">
				<div className="panel panel-default">
					<div className="panel-heading">Add Profile Name</div>
					<div className="panel-body">
						<Error error={error} />
						<form onSubmit={submitHandler}>
							Here you can set your account's profile name.
							<br />
							Your profile name is a name that is used to publicly identify your
							account.
							<br />
							<br />
							Your profile name will be displayed:
							<ul>
								<li>
									<strong>When you post on the forum.</strong>
								</li>
								<li>On your account's public profile page.</li>
								<li>
									On your character's profile page (unless your character is
									hidden.)
								</li>
							</ul>
							<br />
							Profile Name rules:
							<ul>
								<li>
									<strong>
										Do <u>NOT</u>
									</strong>{' '}
									use your account name or password.
								</li>
								<li>The name must be between 2 and 32 characters.</li>
								<li>The name must not already be taken.</li>
								<li>
									The name must properly represent your identity in our
									community. If you are a newer player, do not worry about this.
								</li>
								<li>The name must not contain profanity.</li>
								<li>The name cannot be changed.</li>
							</ul>
							<br />
							<strong>
								You can only set your profile name <u>once</u>!
							</strong>
							<div className="form-group">
								<label htmlFor="profileName">Profile Name:</label>
								<input
									className="form-control"
									id="profileName"
									name="profileName"
								/>
							</div>
							<button type="submit" className="btn btn-success">
								Add Profile Name
							</button>
							<Link to="/account/characters">
								<button type="button" className="btn btn-primary ml-2">
									Return
								</button>
							</Link>
						</form>
					</div>
				</div>
			</div>
		</Container>
	)
}

const mapStateToProps = (state) => {
	return {
		account: state.account.account,
	}
}

export default connect(mapStateToProps, { profileName })(ProfileName)

import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { useHistory } from 'react-router-dom'

import { profileInfo } from '../../../actions/AccountActions'
import { playerList } from '../../../actions/PlayerActions'

import { getFormData } from '../../../helpers/form'
import Container from '../../Layouts/Container'
import ProfileForm from '../../../components/ProfileForm'

const ProfileInfo = ({ account, profileInfo, playerList }) => {
	const history = useHistory()

	React.useEffect(() => {
		profileInfo()
		playerList()
	}, [profileInfo, playerList])

	const submitHandler = (event) => {
		event.preventDefault()
		const data = getFormData(event)
		profileInfo(data)

		history.push('/account/characters')
	}

	return (
		<Container>
			<div id="contentBody" className="col-sm-9">
				<div className="panel panel-default">
					<div className="panel-heading">Update Profile Information</div>
					<div className="panel-body">
						<form onSubmit={submitHandler}>
							<ProfileForm
								label="Real Name"
								name="rlname"
								type="text"
								data={account}
							/>
							<ProfileForm
								label="Location"
								name="location"
								type="text"
								data={account}
							/>

							<button type="submit" className="btn btn-primary">
								Update Profile
							</button>
							<Link to="/account/characters">
								<button type="button" className="btn btn-inverse">
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

export default connect(mapStateToProps, { profileInfo, playerList })(
	ProfileInfo
)

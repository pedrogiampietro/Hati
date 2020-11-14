import React from 'react'
import { Link } from 'react-router-dom'
import Container from '../../../screens/Layouts/Container'

import { GiWolfHowl } from 'react-icons/gi'

const InvalidToken = () => {
	return (
		<Container>
			<div className="h-alt-hf d-flex flex-column align-items-center justify-content-center text-center">
				<div
					className="alert alert-danger bg-white pt-4 pr-5 pb-3 pl-5"
					id="demo-alert"
				>
					<h1 className="fs-xxl fw-700 color-fusion-500 d-flex align-items-center justify-content-center m-0">
						<GiWolfHowl className="profile-image-sm rounded-circle bg-danger-700 mr-1 p-1" />
						<span className="color-danger-700">Invalid Token</span>
					</h1>
					<h3 className="fw-500 mb-0 mt-3">
						You have experienced a auth controller.
					</h3>
					<p className="container container-sm mb-0 mt-1">
						Invalid token response, enter a valid token response, log in to
						generate a valid token and browse normally.
					</p>
					<div className="mt-4">
						<Link
							to="/"
							className="btn btn-outline-default bg-fusion-800 waves-effect waves-themed"
						>
							<span className="fw-700">Cancel</span>
						</Link>
						<Link
							to="/sign-in"
							className="btn btn-primary waves-effect waves-themed"
						>
							<span className="fw-700">Continue</span>
						</Link>
					</div>
				</div>
			</div>
		</Container>
	)
}

export default InvalidToken

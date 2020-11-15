import React from 'react'

const Error = ({ error }) => {
	if (!error) return null

	return (
		<div id="messages">
			<div className="alert alert-danger">
				<strong>Error</strong>
				<ul>
					<li>{error}</li>
				</ul>
			</div>
		</div>
	)
}

export default Error

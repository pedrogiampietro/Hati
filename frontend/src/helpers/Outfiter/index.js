import React from 'react'
import './styles.css'

const Outfiter = ({ ...props }) => {
	const URL = 'http://outfits.ferobraglobal.com/animoutfit.php?'
	const name = props.Name
	const id = props.LookType
	const addons = props.LookAddons
	const head = props.LookHead
	const body = props.LookBody
	const legs = props.LookLegs
	const feet = props.LookFeet
	return (
		<img
			src={`${URL}id=${id}&addons=${addons}&head=${head}&body=${body}&legs=${legs}&feet=${feet}&name=${name}`}
			alt="Outfiter"
		/>

		// <span className="profile-image btn btn-outline-primary btn-lg btn-icon rounded-circle waves-effect waves-themed">
		// 	<img
		// 		src={`${URL}id=${id}&addons=${addons}&head=${head}&body=${body}&legs=${legs}&feet=${feet}&name=${name}`}
		// 		alt="Outfiter"
		// 		className="profile-image rounded-circle"
		// 	/>
		// </span>
	)
}

export default Outfiter

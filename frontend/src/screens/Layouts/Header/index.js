import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { useHistory, useParams } from 'react-router-dom'
import { playerGetCharacter } from '../../../actions/PlayerActions'
import { changeMinify, changeMenuOnMobile } from '../../../assets/js/scripts'

const Header = ({ playerGetCharacter }) => {
	const history = useHistory()
	const { name } = useParams()
	const [searchName, setSearchName] = useState()
	const [error, setError] = useState(false)

	useEffect(() => {
		playerGetCharacter(name)
			.then(({ payload }) => {
				/* data players */
				const dataPlayers = payload.data
				setSearchName(dataPlayers)
			})
			.catch((err) => {
				const { data } = err.response
				setError(data.message)
			})
	}, [name, playerGetCharacter])

	const submitHandle = (e) => {
		e.preventDefault()

		history.push(`/character/${searchName}`)
	}

	return (
		<header className="page-header" role="banner">
			<div className="page-logo">
				<span
					className="page-logo-link press-scale-down d-flex align-items-center position-relative"
					data-toggle="modal"
					data-target="#modal-shortcut"
				>
					<span className="page-logo-text mr-1">Hati AAC</span>
					<span className="position-absolute text-white opacity-50 small pos-top pos-right mr-2 mt-n2"></span>
					<i className="fal fa-angle-down d-inline-block ml-1 fs-lg color-primary-300"></i>
				</span>
			</div>

			<div className="hidden-md-down dropdown-icon-menu position-relative">
				<span
					className="header-btn btn js-waves-off"
					data-action="toggle"
					data-classname="nav-function-hidden"
					title="Hide Navigation"
					onClick={() => changeMinify()}
				>
					<i className="ni ni-menu"></i>
				</span>
			</div>

			<div className="hidden-lg-up">
				<span
					className="header-btn btn press-scale-down waves-effect waves-themed"
					data-action="toggle"
					data-classname="mobile-nav-on"
					onClick={() => changeMenuOnMobile()}
				>
					<i className="ni ni-menu"></i>
				</span>
			</div>

			<div className="search">
				<form
					onSubmit={submitHandle}
					className="app-forms hidden-xs-down"
					role="search"
					autoComplete="off"
				>
					<br />
					<div className="input-group input-group-lg mb-3">
						<input
							onChange={(e) => setSearchName(e.target.value)}
							type="text"
							className="form-control shadow-inset-2"
							id="filter-icon"
							placeholder="Search of Character"
							aria-label="type 2 or more letters"
						/>
						<div className="input-group-append">
							<span className="input-group-text">
								<i className="fal fa-search"></i>
							</span>
						</div>
					</div>
				</form>
			</div>
		</header>
	)
}

const mapStateToProps = (state) => {
	return {
		players: state.player.player,
	}
}

export default connect(mapStateToProps, { playerGetCharacter })(Header)

import React from 'react'
import { connect } from 'react-redux'
import { playerGet } from '../../actions/PlayerActions'

import Menu from '../Layouts/Menu'
import Header from '../Layouts/Header'
import Footer from '../Layouts/Footer'

const Dashboard = ({ playerGet, account }) => {
	return (
		<div className="page-wrapper">
			<div className="page-inner">
				<Menu />

				<div className="page-content-wrapper">
					<Header />

					<main id="js-page-content" role="main" className="page-content">
						<h1>Dashboard</h1>
					</main>

					<Footer />
				</div>
			</div>
		</div>
	)
}

const mapStateToProps = state => {
	return {
		account: state.account.account,
		players: state.player.player,
	}
}

export default connect(mapStateToProps, { playerGet })(Dashboard)

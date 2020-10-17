import React from 'react'
import { connect } from 'react-redux'
import Error from '../../helpers/error'

import Container from '../../screens/Layouts/Container'
import NotFound from '../../assets/img/page_not.svg'
import './styles.css'

const PageSearch = () => {
	return (
		<Container>
			<div className="NoResultsSection">
				<div className="NoResultsContent">
					<h1>Oops!!</h1>

					<Error error="that name does not exists." />

					<img src={NotFound} width="500" alt="No results" />
				</div>
			</div>
		</Container>
	)
}

const mapStateToProps = (state) => {
	return {
		players: state.player.player,
	}
}

export default connect(mapStateToProps, {})(PageSearch)

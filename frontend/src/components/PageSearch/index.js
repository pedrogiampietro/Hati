import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { useParams } from 'react-router-dom'
import { playerGetCharacter } from '../../actions/PlayerActions'
import Error from '../../helpers/error'

import Menu from '../../screens/Layouts/Menu'
import Header from '../../screens/Layouts/Header'
import Footer from '../../screens/Layouts/Footer'
import NotFound from '../../assets/img/page_not.svg'
import './styles.css'

const PageSearch = ({ playerGetCharacter }) => {
	const [, setCharacterPage] = useState([])
	const [error, setError] = useState(false)
	const { name } = useParams()

	useEffect(() => {
		playerGetCharacter(name)
			.then(({ payload }) => {
				/* data players */
				const dataPlayers = payload.data.data[0].player
				setCharacterPage(dataPlayers)
			})
			.catch((err) => {
				const { data } = err.response
				setError(data.message)
			})
	}, [name, playerGetCharacter])

	return (
		<div className="page-wrapper">
			<div className="page-inner">
				<Menu />

				<div className="page-content-wrapper">
					<Header />

					<main id="js-page-content" role="main" className="page-content">
						<h1>PageSearch</h1>
						<div className="NoResultsSection">
							<div className="NoResultsContent">
								<h1>Oops!!</h1>

								<Error error={error} />

								<img src={NotFound} width="500" alt="No results" />
							</div>
						</div>
					</main>

					<Footer />
				</div>
			</div>
		</div>
	)
}

const mapStateToProps = (state) => {
	return {
		players: state.player.player,
	}
}

export default connect(mapStateToProps, { playerGetCharacter })(PageSearch)

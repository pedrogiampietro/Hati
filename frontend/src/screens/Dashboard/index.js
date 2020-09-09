import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { playerList } from '../../actions/PlayerActions'
import { getFormData } from '../../helpers/form'
import { newsCreate } from '../../actions/NewsActions'

import Menu from '../Layouts/Menu'
import Header from '../Layouts/Header'
import Footer from '../Layouts/Footer'

const Dashboard = ({ playerList, newsCreate, account, players }) => {
	useEffect(() => {
		playerList()
	}, [playerList])

	const submitHandle = e => {
		e.preventDefault()
		const data = getFormData(e)

		for (e in data) {
			data[e] = parseInt(data[e]) || data[e]
		}

		newsCreate(data)
	}

	return (
		<div className="page-wrapper">
			<div className="page-inner">
				<Menu />

				<div className="page-content-wrapper">
					<Header />

					<main id="js-page-content" role="main" className="page-content">
						<h1>Dashboard</h1>
						{account?.name}

						<form onSubmit={submitHandle}>
							<select name="author_aid">
								{players && players.length
									? players.map(player => {
											return (
												<option key={player.id} value={player.id}>
													{player.name}
												</option>
											)
									  })
									: null}
							</select>
							<br />
							<input type="hidden" name="author_guid" value={account?.id} />
							<br />
							<label>Titulo:</label>
							<input
								type="text"
								name="post_topic"
								placeholder="Titúlo"
								required
							/>
							<br />
							<label>Descrição:</label> <br />
							<textarea
								type="text"
								placeholder="Descrição"
								name="post_text"
								required
							/>
							<br />
							<button type="submit">Enviar</button>
						</form>
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
		post: state.post.post,
	}
}

export default connect(mapStateToProps, { playerList, newsCreate })(Dashboard)

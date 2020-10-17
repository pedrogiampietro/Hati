import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { playerCreate, playerList } from '../../../../actions/PlayerActions'

import Container from '../../../Layouts/Container'
import { createCharacterVocations } from '../../../../config'
import Error from '../../../../helpers/error'
import './styles.css'

const CreateCharacter = ({ playerCreate, playerList, player }) => {
	const [error, setError] = React.useState('')
	const [name, setName] = React.useState('')
	const [sex, setSex] = React.useState('')
	const [vocation, setVocation] = React.useState('')

	React.useEffect(() => {
		playerList()
	}, [playerList])

	const submitHandler = (event) => {
		event.preventDefault()

		const data = {
			name,
			sex,
			vocation,
		}

		playerCreate(data).catch((err) => {
			const { data } = err.response
			setError(data.message)
		})
	}

	if (player?.length >= 5) {
		return <Redirect to="/account/characters" />
	}

	return (
		<Container>
			<form onSubmit={submitHandler}>
				<div id="contentBody" className="col-sm-9">
					<div className="panel-content">
						<div className="border px-3 pt-3 pb-0 rounded">
							<div className="tab-content py-3">
								<div className="tab-pane fade active show">
									<div className="panel panel-default">
										<div className="panel-heading">Create Character</div>
										<div className="panel-body">
											<div className="modal-dialog">
												<div className="modal-content">
													<div className="modal-content">
														<div className="modal-body">
															<div className="section over-hide z-bigger">
																<div className="background-color"></div>
																<div className="section over-hide z-bigger">
																	<div className="container pb-5">
																		<div className="form-group">
																			<label
																				className="form-label"
																				htmlFor={name}
																			>
																				Name
																			</label>
																			<input
																				type="text"
																				className="form-control"
																				name={name}
																				placeholder="Enter your nickname"
																				onChange={(event) =>
																					setName(
																						event.target.value
																							.toLowerCase()
																							.split(' ')
																							.map(
																								(word) =>
																									word.charAt(0).toUpperCase() +
																									word.slice(1)
																							)
																							.join(' ')
																					)
																				}
																				required
																			/>
																			<span className="help-block">
																				Your unique username to Game.
																			</span>
																		</div>

																		<div className="frame-wrap mb-0">
																			<div
																				className="btn-group btn-group-toggle"
																				data-toggle="buttons"
																			>
																				<label className="btn btn-primary waves-effect waves-themed">
																					<input
																						className="form-check-input"
																						type="radio"
																						name={sex}
																						id="sex"
																						value="1"
																						onChange={(event) =>
																							setSex(Number(event.target.value))
																						}
																					/>
																					Male
																				</label>
																				<label className="btn btn-primary waves-effect waves-themed">
																					<input
																						className="form-check-input"
																						type="radio"
																						name={sex}
																						id="sex"
																						value="0"
																						onChange={(event) =>
																							setSex(Number(event.target.value))
																						}
																					/>
																					Female
																				</label>
																			</div>
																		</div>

																		<div className="row justify-content-center pb-5">
																			<div className="col-12 pt-5">
																				<p className="mb-4 pb-2">
																					Choose Characters
																				</p>
																			</div>
																			<div className="col-12 pb-5">
																				{Object.keys(
																					createCharacterVocations
																				).map((vocation) => (
																					<span
																						key={
																							createCharacterVocations[vocation]
																								.vocation_id
																						}
																					>
																						<input
																							className="checkbox-tools"
																							type="radio"
																							name="vocation"
																							id={
																								createCharacterVocations[
																									vocation
																								].vocation_id
																							}
																							value={
																								createCharacterVocations[
																									vocation
																								].vocation_id
																							}
																							onChange={(event) =>
																								setVocation(
																									Number(event.target.value)
																								)
																							}
																						/>
																						<label
																							className="for-checkbox-tools"
																							htmlFor={
																								createCharacterVocations[
																									vocation
																								].vocation_id
																							}
																						>
																							{
																								createCharacterVocations[
																									vocation
																								].name
																							}
																						</label>
																					</span>
																				))}
																			</div>
																		</div>
																		<div className="row justify-content-center pb-5">
																			<Error error={error} />
																		</div>
																	</div>
																</div>
															</div>
														</div>

														<div className="row justify-content-center pb-5">
															<button className="btn btn-dark btn-round">
																Create
															</button>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</form>
		</Container>
	)
}

const mapStateToProps = (state) => {
	return {
		player: state.player.player,
	}
}

export default connect(mapStateToProps, { playerCreate, playerList })(
	CreateCharacter
)

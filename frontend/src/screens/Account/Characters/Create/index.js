import React from 'react'
import { connect } from 'react-redux'
import { getFormData } from '../../../../helpers/form'
import { playerCreate } from '../../../../actions/PlayerActions'
import { createCharacterVocations } from '../../../../config'
import { FiPlus } from 'react-icons/fi'
import './styles.css'

const CreateCharacter = ({ playerCreate }) => {
	const submitHandler = (e) => {
		e.preventDefault()
		const data = getFormData(e)
		playerCreate(data)
	}

	return (
		<>
			<span
				className="new-character"
				data-toggle="modal"
				data-target="#myModal"
			>
				<FiPlus size={24} color="#886ab5" />
			</span>

			<div className="modal fade" id="myModal">
				<div className="modal-dialog modal-dialog-centered">
					<div className="modal-content">
						<div className="modal-content">
							<div className="modal-header">
								<button
									type="button"
									className="close"
									data-dismiss="modal"
									aria-hidden="true"
								>
									&times;
								</button>
							</div>

							<form onSubmit={submitHandler}>
								<div className="modal-body">
									<div className="section over-hide z-bigger">
										<div className="background-color"></div>
										<div className="section over-hide z-bigger">
											<div className="container pb-5">
												<div className="form-group">
													<label className="form-label" htmlFor="name">
														Name
													</label>
													<input
														type="text"
														className="form-control"
														name="name"
														placeholder="Enter your nickname"
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
																name="sex"
																id="sex"
																value="1"
															/>
															Male
														</label>
														<label className="btn btn-primary waves-effect waves-themed">
															<input
																className="form-check-input"
																type="radio"
																name="sex"
																id="sex"
																value="0"
															/>
															Female
														</label>
													</div>
												</div>

												<div className="row justify-content-center pb-5">
													<div className="col-12 pt-5">
														<p className="mb-4 pb-2">Choose Characters</p>
													</div>
													<div className="col-12 pb-5">
														{Object.keys(createCharacterVocations).map(
															(vocation) => (
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
																			createCharacterVocations[vocation]
																				.vocation_id
																		}
																		value={
																			createCharacterVocations[vocation]
																				.vocation_id
																		}
																	/>
																	<label
																		className="for-checkbox-tools"
																		htmlFor={
																			createCharacterVocations[vocation]
																				.vocation_id
																		}
																	>
																		{createCharacterVocations[vocation].name}
																	</label>
																</span>
															)
														)}
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>

								<div className="row justify-content-center pb-5">
									<button className="btn btn-dark btn-round">Create</button>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

const mapStateToProps = (state) => {
	return {
		player: state.player.player,
	}
}

export default connect(mapStateToProps, { playerCreate })(CreateCharacter)

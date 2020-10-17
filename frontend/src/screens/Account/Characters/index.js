import React, { useEffect } from 'react'
import { Redirect, Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { signOut } from '../../../actions/AccountActions'
import { playerList } from '../../../actions/PlayerActions'
import { convertTimestempToDate } from '../../../helpers/datetime'

import Container from '../../Layouts/Container'
// import CreateCharacter from './Create/index'
import { FiPlus } from 'react-icons/fi'
import './styles.css'

const Characters = ({ players, playerList, signOut, account }) => {
	useEffect(() => {
		playerList()
	}, [playerList])

	if (!account) {
		return <Redirect to="/sign-in" />
	}

	const signOutHandler = (e) => {
		e.preventDefault()
		signOut()
	}

	const Account = account[0]?.account

	return (
		<Container>
			<div id="contentBody" className="col-sm-9">
				<div className="panel panel-danger">
					<div className="panel-heading ">Recovery Key</div>

					<button
						className="btn btn-danger btn-sm align-self-end"
						onClick={signOutHandler}
					>
						Logout
					</button>
					<div className="panel-body">
						<strong>
							You do not have a recovery key. It is recommended that you
							generate one.
							<br />
							In case you lose your account, using the recovery key is the only
							option to recover it.
						</strong>
						<br />
						<br />
						<Link to="/account/key">
							<button className="btn btn-success btn-sm">
								Generate Recovery Key
							</button>
						</Link>
					</div>
				</div>

				{Account === undefined ? null : (
					<div className="panel-content">
						<div className="border px-3 pt-3 pb-0 rounded">
							<ul className="nav nav-pills" role="tablist">
								<li className="nav-item">
									<a
										className="nav-link active"
										data-toggle="tab"
										href="#js_pill_border_icon-1"
									>
										<i className="fal fa-home mr-1"></i>Account Information
									</a>
								</li>
								<li className="nav-item">
									<a
										className="nav-link"
										data-toggle="tab"
										href="#js_pill_border_icon-2"
									>
										<i className="fal fa-user mr-1"></i>Profile
									</a>
								</li>
								{/* <li className="nav-item">
						<a
							className="nav-link"
							data-toggle="tab"
							href="#js_pill_border_icon-3"
						>
							<i className="fal fa-clock mr-1"></i>Configurations
						</a>
					</li> */}
							</ul>
							<div className="tab-content py-3">
								<div
									className="tab-pane fade active show"
									id="js_pill_border_icon-1"
									role="tabpanel"
								>
									<div className="panel panel-default">
										<div className="panel-heading">Account Information</div>
										<div className="panel-body">
											<table className="table table-striped table-hover table-fixed">
												<tbody>
													<tr>
														<td>Name</td>
														<td>{Account?.name}</td>
														<td></td>
													</tr>
													<tr>
														<td>E-mail Address</td>
														<td>{Account?.email}</td>
														<td></td>
													</tr>
													<tr>
														<td>Created</td>
														<td className="col-md-9">
															{convertTimestempToDate(Account?.creation)}
														</td>
														<td></td>
													</tr>
													<tr>
														<td className="col-md-2 notranslate">Hati Coins</td>
														<td>0</td>
														<td></td>
													</tr>
													<tr>
														<td>Premium Account</td>
														<td>(Premmium Days: {Account?.premdays})</td>
														<td align="right">
															<big>
																<span
																	id="coins_refunded_info"
																	href="#"
																	rel="popover"
																	data-placement="top"
																	data-trigger="hover"
																>
																	<i className="fa fa-info"></i>
																</span>
															</big>
														</td>
													</tr>
												</tbody>
											</table>
											<div className="demo">
												<button className="btn btn-primary btn-sm">
													Change Password
												</button>

												<button
													className="btn btn-danger btn-sm"
													onClick={signOutHandler}
												>
													Logout
												</button>
											</div>
										</div>
									</div>
								</div>
								<div
									className="tab-pane fade"
									id="js_pill_border_icon-2"
									role="tabpanel"
								>
									<div className="row">
										<div className="col-md-6">
											<div className="panel panel-default">
												<div className="panel-heading">Profile Information</div>
												<div className="panel-body">
													<table className="table table-striped table-hover table-fixed">
														<tbody>
															<tr>
																<td>Real Name:</td>
																<td className="col-md-4 notranslate">
																	{Account?.rlname}
																</td>
															</tr>
															<tr>
																<td>Location:</td>
																<td className="col-md-4">
																	{Account?.location}
																</td>
															</tr>
															<tr>
																<td>Flag:</td>
																<td className="col-md-4">{Account?.flag}</td>
															</tr>
														</tbody>
													</table>

													<table>
														<tbody>
															<tr>
																<td className="col-md-3">
																	<a href="/account/profile_info">
																		<button
																			className="btn btn-primary btn-sm"
																			align="left"
																		>
																			Update Information
																		</button>
																	</a>
																</td>
															</tr>
														</tbody>
													</table>
												</div>
											</div>
										</div>
										<div className="col-md-6">
											<div className="panel panel-default">
												<div className="panel-heading">Profile Avatar</div>
												<div className="panel-body" align="center">
													{/* <img className="avatar" src="/avatar/10067400.png" /> */}
													<br />
													<br />
													<a href="/account/avatar">
														<button className="btn btn-primary btn-sm">
															Update Avatar
														</button>
													</a>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div
									className="tab-pane fade"
									id="js_pill_border_icon-3"
									role="tabpanel"
								>
									Etsy mixtape wayfarers, ethical wes anderson tofu before they
									sold out mcsweeney's organic lomo retro fanny pack lo-fi
									farm-to-table readymade. Messenger bag gentrify pitchfork
									tattooed craft beer, iphone skateboard locavore carles etsy
									salvia banksy hoodie helvetica. DIY synth PBR banksy irony.
									Leggings gentrify squid 8-bit cred pitchfork.
								</div>
							</div>
						</div>
					</div>
				)}

				<br />
				<div className="panel panel-default">
					<div className="panel-heading">Characters</div>

					<div className="panel-body hidden-md hidden-lg">
						<div className="character-container">
							{players && players.length
								? players.map((player) => {
										return (
											<div key={player.id} className="new-character">
												<Link to={`/character/${player.name}`}>
													<span
														className="profile-image rounded-circle d-block m-auto"
														style={{
															backgroundImage: `url("https://www.tibiawiki.com.br/images/e/e4/Outfit_Citizen_Male.gif")`,
															backgroundSize: 'cover',
														}}
													></span>
													<span className="d-block text-truncate text-muted fs-xs mt-1">
														{player.name}
													</span>
												</Link>
											</div>
										)
								  })
								: null}
							{players?.length < 5 && (
								<Link to="/account/characters/create">
									<span className="new-character">
										<FiPlus size={24} color="#886ab5" />
									</span>
								</Link>
							)}
						</div>
					</div>
				</div>
			</div>
		</Container>
	)
}

const mapStateToProps = (state) => {
	return {
		account: state.account.account,
		players: state.player.player,
	}
}

export default connect(mapStateToProps, { playerList, signOut })(Characters)

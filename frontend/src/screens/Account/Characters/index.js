import React, { useEffect } from 'react'
import { Redirect, Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { signOut } from '../../../actions/AccountActions'
import { playerList } from '../../../actions/PlayerActions'

import Container from '../../Layouts/Container'

const Characters = ({ players, playerList, signOut, account }) => {
	useEffect(() => {
		playerList()
	}, [playerList])

	if (!account) {
		return <Redirect to="/" />
	}

	const signOutHandler = (e) => {
		e.preventDefault()
		signOut()
	}

	return (
		<Container>
			<div id="contentBody" className="col-sm-9">
				<div className="panel panel-danger">
					<div className="panel-heading">Recovery Key</div>
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

				<div className="panel panel-default">
					<div className="panel-heading">Account Information</div>
					<div className="panel-body">
						<table className="table-highscores">
							<tbody>
								<tr>
									<td>Name</td>
									<td>159154</td>
									<td></td>
								</tr>
								<tr>
									<td>E-mail Address</td>
									<td>peoekopa@hotmail.com</td>
									<td></td>
								</tr>
								<tr>
									<td>Discord</td>
									<td>
										<a href="https://discordapp.com/api/oauth2/authorize?client_id=528572548489805835&amp;redirect_uri=https%3A%2F%2Fcyntara.org%2Fdiscord&amp;response_type=code&amp;scope=identify">
											Connect your account with your Discord account.
										</a>
									</td>
									<td></td>
								</tr>
								<tr>
									<td>Created</td>
									<td className="col-md-9">25 Sep 20 12:20 AM</td>
									<td></td>
								</tr>
								<tr>
									<td className="col-md-2 notranslate">Cyntara Coins</td>
									<td>0 (Refunds Left: 3, Remaining Coins: 0)</td>
									<td></td>
								</tr>
								<tr>
									<td>Refunded Coins</td>
									<td>0</td>
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
						<a href="/account/password">
							<button className="btn btn-primary btn-sm">
								Change Password
							</button>
						</a>
						<a href="/account/logout">
							<button
								className="btn btn-danger btn-sm"
								onClick={signOutHandler}
							>
								Logout
							</button>
						</a>
					</div>
				</div>

				<div className="row">
					<div className="col-md-6">
						<div className="panel panel-default">
							<div className="panel-heading">Profile Information</div>
							<div className="panel-body">
								<table className="table table-striped table-hover table-fixed">
									<tbody>
										<tr>
											<td>Real Name:</td>
											<td className="col-md-4 notranslate"></td>
										</tr>
										<tr>
											<td>Location:</td>
											<td className="col-md-4"></td>
										</tr>
										<tr>
											<td>Flag:</td>
											<td className="col-md-4">
												{/* <img
													className="flag"
													src="/static/img/misc/flags/br.gif"
												/> */}
											</td>
										</tr>
									</tbody>
								</table>

								<table>
									<tbody>
										<tr>
											<td className="col-md-3">
												<a href="/account/profile_info">
													<button
														className="btn btn-default btn-sm"
														align="left"
													>
														Update Information
													</button>
												</a>
											</td>
											<td className="col-md-3" align="right">
												<a href="/account/profile_name">
													<button className="btn btn-primary btn-sm">
														Set Profile Name
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
									<button className="btn btn-default btn-sm">
										Update Avatar
									</button>
								</a>
							</div>
						</div>
					</div>
				</div>

				<div className="panel panel-default">
					<div className="panel-heading">Characters</div>

					<div className="panel-body hidden-xs hidden-sm">
						<table className="table table-striped table-hover">
							<tbody></tbody>
						</table>
						<a href="/account/character">
							<button className="btn btn-success" align="right">
								Create Character
							</button>
						</a>
					</div>

					<div className="panel-body hidden-md hidden-lg">
						<table className="table table-striped table-hover table-fixed">
							<tbody></tbody>
						</table>
						<a href="/account/character">
							<button className="btn btn-inverse" align="right">
								Create Character
							</button>
						</a>
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

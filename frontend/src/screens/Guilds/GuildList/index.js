import React from 'react'
import { connect } from 'react-redux'
import { Link, useParams } from 'react-router-dom'

import {
	guildShow,
	guildMember,
	guildInvite,
	guildGetInvites,
	guildHasInvite,
	guildAccept,
} from '../../../actions/GuildActions'
import { getFormData } from '../../../helpers/FormData'
import { characterVocations } from '../../../config'
import Outfiter from '../../../helpers/Outfiter'

import Container from '../../Layouts/Container'
import GuildLogoDefault from '../../../assets/img/guild_logo_default.png'
import { FaSignInAlt, FaRegTrashAlt } from 'react-icons/fa'

import './styles.css'

const GuildList = ({
	guildShow,
	guildMember,
	guildInvite,
	guildGetInvites,
	guildHasInvite,
	guildAccept,
}) => {
	const [guild, setGuild] = React.useState([])
	const [member, setMember] = React.useState([])
	const [invitedList, setInvitedList] = React.useState([])
	const [acceptInvite, setAcceptInvite] = React.useState([])
	const [playerId, setPlayerId] = React.useState(0)
	const [postInteraction, setPostInteraction] = React.useState(false)

	const { id } = useParams()

	function interaction() {
		setPostInteraction(!postInteraction)
	}

	React.useEffect(() => {
		guildShow(id).then(({ payload }) => {
			const newData = payload.data.data
			setGuild(newData)

			guildMember(id).then(({ payload }) => {
				const newData = payload.data.data
				setMember(newData)
			})

			guildGetInvites(id).then(({ payload }) => {
				const newData = payload.data.data
				setInvitedList(newData)
			})

			guildHasInvite(id).then(({ payload }) => {
				const newData = payload.data.data
				setAcceptInvite(newData)
			})
		})
	}, [
		guildShow,
		guildGetInvites,
		guildMember,
		guildHasInvite,
		id,
		postInteraction,
	])

	const submitHandler = (e) => {
		e.preventDefault()
		const data = getFormData(e)
		guildInvite(id, data)
		interaction()
	}

	const acceptHandler = (e) => {
		e.preventDefault(e)
		guildAccept(id, playerId)
		interaction()
	}

	return (
		<Container>
			<div className="panel panel-default col-sm-6 mx-auto">
				<div className="panel-heading">Overview</div>
				<div className="panel-body">
					<div className="parent">
						<div className="guild-logo ml-4">
							<div className="d-inline-flex flex-column justify-content-center mr-3">
								<span className="fw-300 fs-xs d-block opacity-50">
									<img
										className="profile-image-lg"
										src={GuildLogoDefault}
										alt="GuildLogo"
									/>
								</span>
								<span className="fw-500 fs-xl d-block color-primary-500 mb-6">
									Member
								</span>
							</div>
						</div>
						<div className="guild-description ml-4">
							<h2 className="text-primary">Guild Description:</h2>
							<p>{guild.description}</p>
						</div>
						<div className="guild-name">
							<span className="display-4 d-block l-h-n m-0 fw-500 text-primary">
								<p className="attempt-1">
									<em>{guild.name}</em>
								</p>
							</span>
						</div>
					</div>

					<div className="panel-body mt-4">
						<ul className="nav nav-pills" role="tablist">
							<li className="nav-item">
								<a
									className="nav-link active"
									data-toggle="tab"
									href="#members"
								>
									<i className="fal fa-user mr-1"></i>Members
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" data-toggle="tab" href="#wars">
									<i className="fal fa-chart-bar mr-1"></i>Active Wars
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" data-toggle="tab" href="#settings">
									<i className="fal fa-cog text-danger mr-1" />
									Settings
								</a>
							</li>
						</ul>

						<hr />
						<div className="tab-content">
							<div className="tab-pane active table-responsive" id="members">
								<table className="table table-bordered ">
									<thead>
										<tr>
											<th>Rank</th>

											<th>Player</th>
											<th>Vocation &amp; Level</th>
										</tr>
									</thead>
									<tbody>
										{member.map((members) =>
											members.rank === members.guild_rank.level ? (
												<tr key={members.id}>
													<td>
														{members.rank === members.guild_rank.level
															? members.guild_rank.name
															: null}
													</td>

													<td>
														<div
															className={`${
																members.players_online === null
																	? `d-inline-block align-middle status status-danger mr-3`
																	: `d-inline-block align-middle status status-success mr-3`
															}`}
														>
															<Outfiter
																Name={members.name}
																LookBody={members.player.lookbody}
																LookFeet={members.player.lookfeet}
																LookHead={members.player.lookhead}
																LookLegs={members.player.looklegs}
																LookType={members.player.looktype}
																LookAddons={members.lookaddons}
															/>
														</div>
														<div className="info-card-text flex-1">
															<h2 className="fs-xl text-truncate text-truncate-lg text-primary">
																<Link to={`/character/${members.player.name}`}>
																	{members.player.name}{' '}
																	<span className="fw-300">
																		<i>(Rei do Gesior)</i>
																	</span>
																</Link>
															</h2>
														</div>
													</td>
													<td className="hidden-xs">
														{characterVocations[members.player.vocation]} (Level{' '}
														{members.player.level})
													</td>
												</tr>
											) : null
										)}
									</tbody>
								</table>
							</div>
							<div className="tab-pane" id="wars">
								<br />
								{guild.name} is not currently participating in any active war.
							</div>
							<div className="tab-pane" id="settings">
								<div className="panel-container show">
									<div className="panel-content">
										<div className="row">
											<div className="col-auto">
												<div
													className="nav flex-column nav-pills"
													id="v-pills-tab"
													role="tablist"
													aria-orientation="vertical"
												>
													<a
														className="nav-link active"
														id="v-pills-changelogo-tab"
														data-toggle="pill"
														href="#v-pills-changelogo"
														role="tab"
														aria-controls="v-pills-changelogo"
														aria-selected="true"
													>
														<i className="fal fa-home" />
														<span className="hidden-sm-down ml-1">
															{' '}
															Change Logo
														</span>
													</a>
													<a
														className="nav-link"
														id="v-pills-changeguildmotd-tab"
														data-toggle="pill"
														href="#v-pills-changeguildmotd"
														role="tab"
														aria-controls="v-pills-changeguildmotd"
														aria-selected="false"
													>
														<i className="fal fa-user" />
														<span className="hidden-sm-down ml-1">
															{' '}
															Change Guild Motd
														</span>
													</a>
													<a
														className="nav-link"
														id="v-pills-renameguildrank-tab"
														data-toggle="pill"
														href="#v-pills-renameguildrank"
														role="tab"
														aria-controls="v-pills-renameguildrank"
														aria-selected="false"
													>
														<i className="fal fa-envelope" />
														<span className="hidden-sm-down ml-1">
															{' '}
															Rename Guild Ranks
														</span>
													</a>
													<a
														className="nav-link"
														id="v-pills-disband-tab"
														data-toggle="pill"
														href="#v-pills-disband"
														role="tab"
														aria-controls="v-pills-disband"
														aria-selected="false"
													>
														<i className="fal fa-cog" />
														<span className="hidden-sm-down ml-1">
															Disband Guild
														</span>
													</a>
												</div>
											</div>
											<div className="col">
												<div className="tab-content" id="v-pills-tabContent">
													<div
														className="tab-pane fade active show"
														id="v-pills-changelogo"
														role="tabpanel"
														aria-labelledby="v-pills-changelogo-tab"
													>
														<h3>Change Logo</h3>
													</div>
													<div
														className="tab-pane fade"
														id="v-pills-changeguildmotd"
														role="tabpanel"
														aria-labelledby="v-pills-changeguildmotd-tab"
													>
														<h3>Change Guild Motd</h3>
													</div>
													<div
														className="tab-pane fade"
														id="v-pills-renameguildrank"
														role="tabpanel"
														aria-labelledby="v-pills-renameguildrank-tab"
													>
														<h3>Rename Guild Rank</h3>
													</div>
													<div
														className="tab-pane fade"
														id="v-pills-disband"
														role="tabpanel"
														aria-labelledby="v-pills-disband-tab"
													>
														<h3>Disbang Guild</h3>
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

			<div className="col-sm-5 mx-auto">
				<form onSubmit={acceptHandler}>
					<table className="table table-bordered">
						<thead>
							<tr>
								<th>Player</th>
								<th>Vocation &amp; Level</th>
								<th />
							</tr>
						</thead>

						<tbody>
							{acceptInvite.length > 0
								? acceptInvite.map((list) => (
										<tr key={list.id}>
											<td>
												<Link
													className="notranslate"
													to={`/character/${list.player.name}`}
												>
													{list.player.name}
												</Link>
											</td>
											<td className="hidden-xs">
												{characterVocations[list.player.vocation]} (Level{' '}
												{list.player.level})
											</td>

											<td>
												<div align="center">
													{acceptInvite.length > 0 ? (
														<button
															type="submit"
															className="btn btn-outline-success btn-sm ml-auto mr-2 flex-shrink-0 waves-effect waves-themed"
															id={list.id}
															onClick={() => setPlayerId(list.player_id)}
														>
															<FaSignInAlt size={14} />
														</button>
													) : null}

													{/* <span className="btn btn-outline-danger btn-sm flex-shrink-0 waves-effect waves-themed">
									<FaRegTrashAlt size={14} color="#" />
								</span> */}
												</div>
											</td>
										</tr>
								  ))
								: invitedList?.map((list) => (
										<tr key={list.id}>
											<td>
												<Link
													className="notranslate"
													to={`/character/${list.player.name}`}
												>
													{list.player.name}
												</Link>
											</td>
											<td className="hidden-xs">
												{characterVocations[list.player.vocation]} (Level{' '}
												{list.player.level})
											</td>

											<td>
												<div align="center">
													{acceptInvite.length > 0 ? (
														<button
															type="submit"
															className="btn btn-outline-success btn-sm ml-auto mr-2 flex-shrink-0 waves-effect waves-themed"
															id={list.id}
															onClick={() => setPlayerId(list.player_id)}
														>
															<FaSignInAlt size={14} />
														</button>
													) : null}

													{/* <span className="btn btn-outline-danger btn-sm flex-shrink-0 waves-effect waves-themed">
												<FaRegTrashAlt size={14} color="#" />
											</span> */}
												</div>
											</td>
										</tr>
								  ))}
						</tbody>
					</table>
				</form>
			</div>
			<form onSubmit={submitHandler}>
				<div className="d-flex flex-column align-items-center justify-content-center text-center">
					<div className="row">
						<div className="col-9 pr-1 mb-3">
							<input
								type="text"
								name="player_id"
								className="form-control"
								placeholder="Enter name to invite player."
							/>
						</div>
						<div className="col-3 pr-1 mb-3">
							<button className="btn btn-sm btn-outline-primary">Invite</button>
						</div>
					</div>
				</div>
			</form>
		</Container>
	)
}

const mapStateToProps = (state) => {
	return {
		account: state.account.account,
		players: state.player.player,
	}
}

export default connect(mapStateToProps, {
	guildShow,
	guildMember,
	guildInvite,
	guildGetInvites,
	guildHasInvite,
	guildAccept,
})(GuildList)

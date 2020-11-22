import React from 'react'
import { connect } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import {
	guildShow,
	guildInvite,
	guildGetInvites,
} from '../../../actions/GuildActions'
import { getFormData } from '../../../helpers/FormData'

import Container from '../../Layouts/Container'
import GuildLogoDefault from '../../../assets/img/guild_logo_default.png'

import './styles.css'

const GuildList = ({ guildShow, guildInvite, guildGetInvites }) => {
	const [guildList, setGuildList] = React.useState([])
	const [invitedList, setInvitedList] = React.useState([])
	const { guild_memberships } = guildList
	const { id } = useParams()

	React.useEffect(() => {
		guildShow(id).then(({ payload }) => {
			const newData = payload.data.data
			setGuildList(newData)
			guildGetInvites(id).then(({ payload }) => {
				const newData = payload.data.data
				setInvitedList(newData)
			})
		})
	}, [guildShow, guildGetInvites, id])

	const submitHandler = (e) => {
		e.preventDefault()

		const data = getFormData(e)
		guildInvite(id, data)
	}

	return (
		<Container>
			<div className="panel panel-default col-sm-9 mx-auto">
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
									{guildList?.guild_memberships?.length} Member
								</span>
							</div>
						</div>
						<div className="guild-description ml-4">
							<h2 className="text-primary">Guild Description:</h2>
							<p>{guildList.description}</p>
						</div>
						<div className="guild-name">
							<span className="display-4 d-block l-h-n m-0 fw-500 text-primary">
								<p className="attempt-1">
									<em>{guildList.name}</em>
								</p>
							</span>
						</div>
					</div>

					<div className="panel-body">
						<br />

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
						</ul>

						<hr />
						<div className="tab-content">
							<div className="tab-pane active" id="members">
								<table className="table table-bordered">
									<thead>
										<tr>
											<th>Rank</th>
											<th />
											<th>Player</th>
											<th>Vocation &amp; Level</th>
											<th>Status</th>
										</tr>
									</thead>
									<tbody>
										{guild_memberships?.map((members) => (
											<tr key={members.id}>
												<td>{members.rank}</td>
												<td className="hidden-xs">
													<div
														className="player-outfit"
														style={{
															backgroundImage:
																'url("/outfit/1123_97_0_114_113_3.png")',
														}}
														align="right"
													/>
												</td>
												<td>
													<Link
														className="notranslate"
														to={`/character/${members.player.name}`}
													>
														{members.player.name}
													</Link>
												</td>
												<td className="hidden-xs">
													{members.player.vocation} (Level{' '}
													{members.player.level})
												</td>
												<td className="hidden-xs" align="center">
													<div className="d-inline-block align-middle status status-success" />
												</td>
											</tr>
										))}
									</tbody>
								</table>
							</div>
							<div className="tab-pane" id="wars">
								<br />
								Cartel is not currently participating in any active war.
							</div>
						</div>
					</div>
				</div>
			</div>

			<form onSubmit={submitHandler}>
				<div className="container">
					<div className="row">
						<div className="col-3 pr-1 mb-3">
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
						<div className="col-6">
							<ul>
								<div className="row">
									<div className="col-1 pr-1 mb-3">
										{invitedList.map((players) => (
											<li key={players}>{players.player.name}</li>
										))}
									</div>
								</div>
							</ul>
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
	guildInvite,
	guildGetInvites,
})(GuildList)

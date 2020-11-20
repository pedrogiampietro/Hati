import React from 'react'
import { connect } from 'react-redux'
import { guildCreate, guildList } from '../../actions/GuildActions'
import { playerList } from '../../actions/PlayerActions'
import { getFormData } from '../../helpers/FormData'

import Container from '../Layouts/Container'
import { RiTableLine } from 'react-icons/ri'
import { FaThList } from 'react-icons/fa'

import GuildLogoDefault from '../../assets/img/guild_logo_default.png'

const Guilds = ({ playerList, guildList, players }) => {
	const [guild, setGuild] = React.useState([])
	const [className, setClassName] = React.useState('col-xl-4')

	React.useEffect(() => {
		playerList()
		guildList().then(({ payload }) => {
			const newData = payload.data.data
			setGuild(newData)
		})
	}, [playerList, guildList])

	const submitHandler = (e) => {
		e.preventDefault()
		const data = getFormData(e)
		guildCreate(data)
	}

	const clickToRow = () => setClassName('col-xl-12')

	const clickToGrid = () => setClassName('col-xl-4')

	return (
		<Container>
			<div className="row">
				<div className="col-xl-12">
					<div className="border-faded bg-faded p-3 mb-g d-flex">
						<input
							type="text"
							id="js-filter-guilds"
							name="filter-guilds"
							className="form-control shadow-inset-2 form-control-lg"
							placeholder="Filter Guilds"
						/>
						<div
							className="btn-group btn-group-lg btn-group-toggle hidden-lg-down ml-3"
							data-toggle="buttons"
						>
							<label
								className={`btn btn-default ${
									className === 'col-xl-4' && 'active'
								} waves-effect waves-themed`}
							>
								<input
									type="radio"
									name="guildsview"
									id="grid"
									defaultChecked
									onClick={clickToGrid}
								/>
								<RiTableLine size={24} />
							</label>
							<label
								className={`btn btn-default ${
									className === 'col-xl-12' && 'active'
								} waves-effect waves-themed`}
							>
								<input
									type="radio"
									name="guildsview"
									id="table"
									onClick={clickToRow}
								/>
								<FaThList size={24} />
							</label>
						</div>
					</div>
				</div>
			</div>

			<section>
				<pre>
					<form onSubmit={submitHandler}>
						<input type="text" name="name" placeholder="Guild name" />
						<br />
						<select name="ownerid">
							{players && players.length
								? players.map((player) => {
										return (
											<option key={player.id} value={player.id}>
												{player.name}
											</option>
										)
								  })
								: null}
						</select>
						<br />
						<textarea
							name="description"
							id="description"
							cols="30"
							rows="10"
						></textarea>
						<br />
						<button className="btn btn-primary btn-sm">Teste API</button>
					</form>
				</pre>
			</section>

			{/* Guilds List */}
			<div className="row">
				{guild.map((guilds) => (
					<div key={guilds.id} className={className}>
						<div className="card border shadow-0 shadow-sm-hover mb-g">
							<div className="card-body border-faded border-top-0 border-left-0 border-right-0 rounded-top">
								<div className="d-flex flex-row align-items-center">
									<span className="status status-success mr-3">
										<img
											src={GuildLogoDefault}
											alt="GuildLogo"
											className="profile-image-lg rounded-circle d-block"
											style={{
												backgroundSize: 'cover',
											}}
										/>
									</span>
									<div className="info-card-text flex-1">
										<span className="fs-xl text-truncate text-truncate-lg text-info">
											{guilds.name}
										</span>

										<span className="text-truncate text-truncate-xl">
											Leader: {guilds.player.name}
										</span>
									</div>
								</div>
							</div>
							<div className="card-body p-0 collapse show">
								<div className="p-3">
									<span className="mt-1 d-block fs-sm fw-400 text-dark">
										{guilds.description}
									</span>
								</div>
							</div>
						</div>
					</div>
				))}
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

export default connect(mapStateToProps, { playerList, guildList })(Guilds)

import React from 'react'
import { connect } from 'react-redux'
import { guildCreate } from '../../actions/GuildActions'
import { playerList } from '../../actions/PlayerActions'
import { getFormData } from '../../helpers/FormData'

import Container from '../Layouts/Container'
import { RiTableLine } from 'react-icons/ri'
import { FaThList } from 'react-icons/fa'

const Guilds = ({ playerList, players }) => {
	React.useEffect(() => {
		playerList()
	}, [playerList])

	const submitHandler = (e) => {
		e.preventDefault()
		const data = getFormData(e)

		guildCreate(data)
	}

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
							<label className="btn btn-default active waves-effect waves-themed">
								<input
									type="radio"
									name="guildsview"
									id="grid"
									defaultChecked
									defaultValue="grid"
								/>
								<RiTableLine size={24} />
							</label>
							<label className="btn btn-default waves-effect waves-themed">
								<input
									type="radio"
									name="guildsview"
									id="table"
									defaultValue="table"
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
										console.log(player)
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
			<div className="row js-list-filter" id="js-contacts">
				<div className="col-xl-4">
					<div
						id="c_1"
						className="card border shadow-0 shadow-sm-hover mb-g"
						data-filter-tags="oliver kopyov"
					>
						<div className="card-body border-faded border-top-0 border-left-0 border-right-0 rounded-top">
							<div className="d-flex flex-row align-items-center">
								<span className="status status-success mr-3">
									<span
										className="rounded-circle profile-image d-block "
										style={{
											backgroundImage:
												'url("data:image/png;base64,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")',
											backgroundSize: 'cover',
										}}
									/>
								</span>
								<div className="info-card-text flex-1">
									<span
										className="fs-xl text-truncate text-truncate-lg text-info"
										data-toggle="dropdown"
										aria-expanded="false"
									>
										A mais bolada do server
										<i className="fal fa-angle-down d-inline-block ml-1 fs-md" />
									</span>

									<span className="text-truncate text-truncate-xl">
										Leader: Pedrao
									</span>
								</div>
							</div>
						</div>
						<div className="card-body p-0">
							<div className="p-3">
								<span className="mt-1 d-block fs-sm fw-400 text-dark">
									Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt,
									est. Aperiam possimus voluptatum totam deleniti, pariatur
									cupiditate. Excepturi quisquam animi, molestiae, quibusdam
									iure nam repellat optio enim velit deserunt hic?
								</span>
							</div>
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

export default connect(mapStateToProps, { playerList })(Guilds)

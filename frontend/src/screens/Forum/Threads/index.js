import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { connect } from 'react-redux'
import { forumSection } from '../../../actions/ForumActions'
import { convertTimestempToDate } from '../../../helpers/datetime'

import Container from '../../Layouts/Container'
import noneAvatar from '../../../assets/img/none_avatar.png'

const Threads = ({ forumSection }) => {
	const [threadList, setThreadList] = React.useState([])
	const { section } = useParams()

	React.useEffect(() => {
		forumSection(section)
			.then(({ payload }) => {
				const newData = payload.data.data
				setThreadList(newData)
			})
			.catch((err) => {
				alert('error!')
				console.log(err)
			})
	}, [forumSection, section])

	return (
		<Container>
			<div className="card mb-g border shadow-0">
				<div className="card-header bg-white">
					<div className="row no-gutters align-items-center">
						<div className="col">
							<span className="h6 font-weight-bold text-uppercase">Forum</span>
						</div>
						<div className="col d-flex align-items-center">
							<Link
								to="/forum/:section/create"
								className="btn btn-success shadow-0 btn-sm ml-auto flex-shrink-0 waves-effect waves-themed"
							>
								New Thread
							</Link>
						</div>
					</div>
				</div>
				<div className="card-header bg-white p-0">
					<div className="row no-gutters row-grid align-items-stretch">
						<div className="col-12 col-md">
							<div className="text-uppercase text-muted py-2 px-3">Title</div>
						</div>
						<div className="col-sm-6 col-md-2 col-xl-1 hidden-md-down">
							<div className="text-uppercase text-muted py-2 px-3">Views</div>
						</div>
						<div className="col-sm-6 col-md-3 hidden-md-down">
							<div className="text-uppercase text-muted py-2 px-3">
								Last update
							</div>
						</div>
					</div>
				</div>
				<div className="card-body p-0">
					<div className="row no-gutters row-grid">
						{threadList.map((props) => {
							return props.post_topic === '' ||
								props.post_topic === null ? null : (
								<div key={props.id} className="col-12">
									<div className="row no-gutters row-grid align-items-stretch">
										<div className="col-md">
											<div className="p-3">
												<div className="d-flex flex-column">
													<Link
														to={`/forum/${section}/${props.id}`}
														className="fs-lg fw-500 d-flex align-items-start"
													>
														{props.post_topic}
														{/* <span className="badge badge-warning ml-auto">
															Em Alta
														</span> */}
													</Link>
													<div className="d-block text-muted fs-sm">
														Started by{' '}
														<Link to="/characters/:name" className="text-info">
															{props.player.name}
														</Link>{' '}
														on {convertTimestempToDate(props.post_date)}
													</div>
												</div>
											</div>
										</div>
										<div className="col-4 col-md-2 col-xl-1 hidden-md-down">
											<div className="p-3 p-md-3">
												<span className="d-block text-muted">
													{props.views} <i>Views</i>
												</span>
											</div>
										</div>
										<div className="col-8 col-md-3 hidden-md-down">
											<div className="p-3 p-md-3">
												<div className="d-flex align-items-center">
													<div className="d-inline-block align-middle status status-success status-sm mr-2">
														<img
															src={noneAvatar}
															alt="None Avatar"
															className="profile-image-md rounded-circle d-block"
															style={{
																backgroundSize: 'cover',
															}}
														/>
													</div>
													<div className="flex-1 min-width-0">
														<Link to="#" className="d-block text-truncate">
															Nam at justo magna. Aenean facilisis ultricies
															turpis
														</Link>
														<div className="text-muted small text-truncate">
															Today, 12:13{' '}
															<Link
																to="/characters/:name"
																className="text-info"
															>
																c_lantern
															</Link>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							)
						})}
					</div>
				</div>
			</div>
		</Container>
	)
}

const mapStateToProps = (state) => {
	return {
		account: state.account.account,
	}
}

export default connect(mapStateToProps, { forumSection })(Threads)

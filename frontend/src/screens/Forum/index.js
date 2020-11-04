import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { forumList } from '../../actions/ForumActions'
import Container from '../Layouts/Container'

import noneAvatar from '../../assets/img/none_avatar.png'

const Forum = ({ forumList }) => {
	const [categoryLists, setCategoryLists] = React.useState([])

	React.useEffect(() => {
		forumList().then(({ payload }) => {
			const newData = payload.data.data
			setCategoryLists(newData)
		})
	}, [forumList])

	return (
		<Container>
			<div className="row">
				<div className="col-xl-12">
					<div className="input-group input-group-lg mb-g">
						<input
							type="text"
							className="form-control shadow-inset-2"
							placeholder="Search topics"
						/>
						<div className="input-group-append">
							<span className="input-group-text">
								<i className="fal fa-search" />
							</span>
						</div>
					</div>
					<div className="card mb-g border shadow-0">
						<div className="card-header bg-white p-0">
							<div className="row no-gutters row-grid align-items-stretch">
								<div className="col-12 col-md">
									<div className="text-uppercase text-muted py-2 px-3">
										Title
									</div>
								</div>
								<div className="col-sm-6 col-md-2 col-xl-1 hidden-md-down">
									<div className="text-uppercase text-muted py-2 px-3">
										Status
									</div>
								</div>
								<div className="col-sm-6 col-md-3 hidden-md-down">
									<div className="text-uppercase text-muted py-2 px-3">
										Last posts
									</div>
								</div>
							</div>
						</div>
						<div className="card-body p-0">
							<div className="row no-gutters row-grid">
								{categoryLists.map((boards) => {
									return (
										<div key={boards.id} className="col-12">
											<div className="row no-gutters row-grid align-items-stretch">
												<div className="col-md">
													<div className="p-3">
														<div className="d-flex">
															<span className="icon-stack display-4 mr-3 flex-shrink-0">
																<i className="base-19 icon-stack-3x color-primary-400" />
																<i className="base-7 icon-stack-2x color-primary-300" />
																<i className="base-7 icon-stack-1x fs-xxl color-primary-200" />
																<i className="base-7 icon-stack-1x color-primary-500" />
																<i className="fal fa-globe icon-stack-1x text-white opacity-85" />
															</span>
															<div className="d-inline-flex flex-column">
																<Link
																	to={`/forum/${boards.id}`}
																	className="fs-lg fw-500 d-block"
																>
																	{boards.title}
																</Link>
																<div className="d-block text-muted fs-sm">
																	{boards.description}
																</div>
															</div>
														</div>
													</div>
												</div>
												<div className="col-4 col-md-2 col-xl-1 hidden-md-down">
													<div className="p-3 p-md-3">
														<span className="d-block text-muted">
															{boards.topics} <i>Topics</i>
														</span>
														<span className="d-block text-muted">
															{boards.posts} <i>Posts</i>
														</span>
													</div>
												</div>
												<div className="col-8 col-md-3 hidden-md-down">
													<div className="p-3 p-md-3">
														<div className="d-flex align-items-center">
															<div className="d-inline-block align-middle status status-success status-sm mr-2">
																<img
																	src={noneAvatar}
																	className="profile-image-md rounded-circle d-block"
																	alt=""
																/>
															</div>
															<div className="flex-1 min-width-0">
																<Link
																	to="/last-news"
																	className="d-block text-truncate"
																>
																	Integer id eros vitae leo semper sodales vel a
																	est.
																</Link>
																<div className="text-muted small text-truncate">
																	Today, 02:25{' '}
																	<Link to="/:name" className="text-info">
																		pedro
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

export default connect(mapStateToProps, { forumList })(Forum)

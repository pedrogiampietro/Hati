import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import Container from '../Layouts/Container'

const Forum = () => {
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
								{/* thread */}
								<div className="col-12">
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
															to="/forum/last-news"
															className="fs-lg fw-500 d-block"
														>
															Latest news
														</Link>
														<div className="d-block text-muted fs-sm">
															Curabitur scelerisque ipsum nec dui lacinia
															bibendum
														</div>
													</div>
												</div>
											</div>
										</div>
										<div className="col-4 col-md-2 col-xl-1 hidden-md-down">
											<div className="p-3 p-md-3">
												<span className="d-block text-muted">
													124 <i>Topics</i>
												</span>
												<span className="d-block text-muted">
													314 <i>Posts</i>
												</span>
											</div>
										</div>
										<div className="col-8 col-md-3 hidden-md-down">
											<div className="p-3 p-md-3">
												<div className="d-flex align-items-center">
													<div className="d-inline-block align-middle status status-success status-sm mr-2">
														<span
															className="profile-image-md rounded-circle d-block"
															style={{
																backgroundImage:
																	'url("img/demo/avatars/avatar-c.png")',
																backgroundSize: 'cover',
															}}
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
								{/* thread -end */}
								{/* thread */}
								<div className="col-12">
									<div className="row no-gutters row-grid align-items-stretch">
										<div className="col-md">
											<div className="p-3">
												<div className="d-flex">
													<span className="icon-stack display-4 mr-3 flex-shrink-0">
														<i className="base-2 icon-stack-3x color-primary-400" />
														<i className="base-10 text-white icon-stack-1x" />
														<i className="ni md-profile color-primary-800 icon-stack-2x" />
													</span>
													<div className="d-inline-flex flex-column">
														<Link
															to="/forum/discussions"
															className="fs-lg fw-500 d-block"
														>
															Complaints or Questions
															<span className="badge badge-warning rounded">
																Sticky
															</span>
														</Link>
														<div className="d-block text-muted fs-sm">
															Fusce at velit viverra, luctus augue nec, dapibus
															urna
														</div>
													</div>
												</div>
											</div>
										</div>
										<div className="col-4 col-md-2 col-xl-1 hidden-md-down">
											<div className="p-3 p-md-3">
												<span className="d-block text-muted">
													243 <i>Topics</i>
												</span>
												<span className="d-block text-muted">
													407 <i>Posts</i>
												</span>
											</div>
										</div>
										<div className="col-8 col-md-3 hidden-md-down">
											<div className="p-3 p-md-3">
												<div className="d-flex align-items-center">
													<div className="d-inline-block align-middle status status-success status-sm mr-2">
														<span
															className="profile-image-md rounded-circle d-block"
															style={{
																backgroundImage:
																	'url("img/demo/avatars/avatar-a.png")',
																backgroundSize: 'cover',
															}}
														/>
													</div>
													<div className="flex-1 min-width-0">
														<Link
															to="/forum/discussions"
															className="d-block text-truncate"
														>
															Duis vitae sapien urna. Proin pellentesque laoreet
															ligula pharetra semper.
														</Link>
														<div className="text-muted small text-truncate">
															Today, 12:12{' '}
															<Link to="/character/:name" className="text-info">
																yinz
															</Link>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
								{/* thread -end */}
								{/* thread */}
								<div className="col-12">
									<div className="row no-gutters row-grid align-items-stretch">
										<div className="col-md">
											<div className="p-3">
												<div className="d-flex">
													<span className="icon-stack display-4 mr-3 flex-shrink-0">
														<i className="base-7 icon-stack-3x color-primary-500" />
														<i className="base-7 icon-stack-2x color-primary-700" />
														<i className="ni ni-graph icon-stack-1x text-white" />
													</span>
													<div className="d-inline-flex flex-column">
														<Link
															to="/forum/bug-report"
															className="fs-lg fw-500 d-block"
														>
															Bug Report
														</Link>
														<div className="d-block text-muted fs-sm">
															Sed felis eros, facilisis eu cursus at, efficitur
															et felis
														</div>
													</div>
												</div>
											</div>
										</div>
										<div className="col-4 col-md-2 col-xl-1 hidden-md-down">
											<div className="p-3 p-md-3">
												<span className="d-block text-muted">
													64 <i>Topics</i>
												</span>
												<span className="d-block text-muted">
													102 <i>Posts</i>
												</span>
											</div>
										</div>
										<div className="col-8 col-md-3 hidden-md-down">
											<div className="p-3 p-md-3">
												<div className="d-flex align-items-center">
													<div className="d-inline-block align-middle status status-success status-sm mr-2">
														<span
															className="profile-image-md rounded-circle d-block"
															style={{
																backgroundImage:
																	'url("img/demo/avatars/avatar-b.png")',
																backgroundSize: 'cover',
															}}
														/>
													</div>
													<div className="flex-1 min-width-0">
														<Link
															to="/forum/bug-report"
															className="d-block text-truncate"
														>
															Nunc id varius nisl, a feugiat eros
														</Link>
														<div className="text-muted small text-truncate">
															Today, 05:01{' '}
															<Link to="/character/:name" className="text-info">
																gege
															</Link>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
								{/* thread -end */}
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

export default connect(mapStateToProps, {})(Forum)

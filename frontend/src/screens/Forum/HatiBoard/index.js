import React from 'react'
import noneAvatar from '../../../assets/img/none_avatar.png'

const HatiBoard = () => {
	return (
		<div className="card mb-g border shadow-0">
			<div className="card-header bg-white">
				<div className="row no-gutters align-items-center">
					<div className="col">
						<span className="h6 font-weight-bold text-uppercase">Hati AAC</span>
					</div>
					<div className="col d-flex">
						<span className="btn btn-outline-primary btn-sm ml-auto mr-2 flex-shrink-0 waves-effect waves-themed">
							Report?
						</span>
					</div>
				</div>
			</div>
			<div className="card-header bg-white p-0">
				<div className="row no-gutters row-grid align-items-stretch">
					<div className="col-12 col-md">
						<div className="text-uppercase text-muted py-2 px-3">Title</div>
					</div>
					<div className="col-sm-6 col-md-2 col-xl-1 hidden-md-down">
						<div className="text-uppercase text-muted py-2 px-3">Status</div>
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
											<i className="base-2 icon-stack-3x color-primary-400" />
											<i className="base-10 text-white icon-stack-1x" />
											<i className="ni md-profile color-primary-800 icon-stack-2x" />
										</span>
										<div className="d-inline-flex flex-column">
											<span className="fs-lg fw-500 d-block">
												News
												<span className="badge badge-warning rounded ml-1">
													Sticky
												</span>
											</span>
											<div className="d-block text-muted fs-sm">Hati News.</div>
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
											<img
												src={noneAvatar}
												className="profile-image-md rounded-circle d-block"
												alt=""
											/>
										</div>
										<div className="flex-1 min-width-0">
											<span className="d-block text-truncate">
												Duis vitae sapien urna. Proin pellentesque laoreet
												ligula pharetra semper.
											</span>
											<div className="text-muted small text-truncate">
												Today, 12:12 <span className="text-info">katty60</span>
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
											<span className="fs-lg fw-500 d-block">Changelog</span>
											<div className="d-block text-muted fs-sm">
												You can see the latest changes to Hati on this board.
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
											<img
												src={noneAvatar}
												className="profile-image-md rounded-circle d-block"
												alt=""
											/>
										</div>
										<div className="flex-1 min-width-0">
											<span className="d-block text-truncate">
												Nunc id varius nisl, a feugiat eros
											</span>
											<div className="text-muted small text-truncate">
												Today, 05:01 <span className="text-info">gsnoopy520</span>
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
	)
}

export default HatiBoard

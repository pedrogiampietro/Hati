import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import Container from '../../Layouts/Container'

const avatarImg =
	'https://carismartes.com.br/assets/global/images/avatars/avatar7_big@2x.png'

const Discussions = () => {
	return (
		<Container>
			<div className="row">
				<div className="col-xl-12">
					<div className="input-group input-group-lg mb-g">
						<input
							type="text"
							className="form-control shadow-inset-2"
							placeholder="Search Discussion"
						/>
						<div className="input-group-append">
							<span className="input-group-text">
								<i className="fal fa-search" />
							</span>
						</div>
					</div>
					{/* post */}
					<div className="card mb-g border shadow-0">
						<div className="card-header bg-white p-0">
							<div className="p-3 d-flex flex-row">
								<div className="d-block flex-shrink-0">
									<img
										src={avatarImg}
										className="profile-image rounded-circle"
										alt=""
									/>
								</div>
								<div className="d-block ml-2">
									<span className="h6 font-weight-bold text-uppercase d-block m-0">
										<Link to="#">
											Account information &amp; Security
										</Link>{' '}
										/ <span className="fw-300">Package location</span>
									</span>
									<Link
										to="#"
										className="fs-sm text-info h6 fw-500 mb-0 d-block"
									>
										Dr. Codex Lantern
									</Link>
									<div className="d-flex mt-1 text-warning align-items-center">
										<i className="fas fa-star mr-1" />
										<i className="fas fa-star mr-1" />
										<i className="fas fa-star mr-1" />
										<i className="fas fa-star mr-1" />
										<i className="fal fa-star mr-1" />
										<span className="text-muted fs-xs font-italic">
											(140 votes)
										</span>
									</div>
								</div>
								<Link
									to="#"
									className="d-inline-flex align-items-center text-dark ml-auto align-self-start"
								>
									<span>55</span>
									<i className="fas fa-heart ml-1 text-danger" />
								</Link>
							</div>
						</div>
						<div className="card-body ">
							<p>
								Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
								posuere cubilia Curae; Phasellus quis sem diam. Sed commodo
								metus in ultrices consequat. Vestibulum eu orci ante. Mauris vel
								tincidunt mauris. Cras finibus, purus eu pharetra molestie, orci
								felis lacinia orci, ac congue quam turpis a nibh
							</p>
							<p>
								Nam viverra diam magna, eget lobortis orci tincidunt sed. Donec
								et lobortis est. Morbi eget massa est. In iaculis odio lectus,
								sed efficitur nunc viverra non. Nullam molestie eros magna, eu
								posuere mauris posuere sit amet. Pellentesque hendrerit
								condimentum ipsum, euismod ornare lectus pharetra eget. Praesent
								semper est erat, commodo mollis arcu efficitur vitae. Maecenas
								gravida sit amet nisi vel interdum.
							</p>
							<p>
								Vestibulum molestie, ipsum vitae feugiat lacinia, nisi magna
								accumsan velit, ac semper nisi felis vitae augue. Vivamus mattis
								quis erat eu gravida. Integer venenatis risus vitae ullamcorper
								cursus. Proin sodales odio sed aliquet pulvinar. Duis ipsum
								erat, ultricies a dolor non, tempor dictum ante. Morbi vel metus
								lectus
							</p>
						</div>
						<div className="card-footer">
							<div className="d-flex align-items-center">
								<span className="text-sm text-muted font-italic">
									<i className="fal fa-clock mr-1" /> Posted 1 week ago
								</span>
								<Link to="#" className="flex-shrink-0 ml-auto">
									Reply <i className="fal fa-reply ml-2" />{' '}
								</Link>
							</div>
						</div>
					</div>
					{/* post -end */}
					{/* post */}
					<div className="card mb-g border shadow-0">
						<div className="card-header bg-white p-0">
							<div className="p-3 d-flex flex-row">
								<div className="d-block flex-shrink-0">
									<img
										src={avatarImg}
										className="profile-image rounded-circle"
										alt=""
									/>
								</div>
								<div className="d-block ml-2">
									<span className="h6 font-weight-bold text-uppercase d-block m-0">
										RE: Package location
									</span>
									<Link
										to="#"
										className="fs-sm text-info h6 fw-500 mb-0 d-block"
									>
										Oliver Kopyov
									</Link>
									<div className="d-flex mt-1 text-warning align-items-center">
										<i className="fas fa-star mr-1" />
										<i className="fas fa-star mr-1" />
										<i className="fas fa-star mr-1" />
										<i className="fal fa-star mr-1" />
										<i className="fal fa-star mr-1" />
										<span className="text-muted fs-xs font-italic">
											(90 votes)
										</span>
									</div>
								</div>
								<Link
									to="#"
									className="d-inline-flex align-items-center text-dark ml-auto align-self-start"
								>
									<i className="fal fa-heart ml-1 text-muted" />
								</Link>
							</div>
						</div>
						<div className="card-body ">
							<blockquote className="font-italic fw-sm bg-faded border border-top-0 border-right-0 border-bottom-0 p-3">
								Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
								posuere cubilia Curae; Phasellus quis sem diam. Sed commodo
								metus in ultrices consequat. Vestibulum eu orci ante. Mauris vel
								tincidunt mauris. Cras finibus, purus eu pharetra molestie, orci
								felis lacinia orci, ac congue quam turpis a nibh...
							</blockquote>
							<p>
								Proin vehicula nibh a nisl porta laoreet. Etiam quis massa quam.
								Etiam elementum nunc accumsan ullamcorper viverra. Sed aliquam
								ligula eu porta posuere. Nullam in dictum lacus. Nulla auctor
								hendrerit purus, sit amet lacinia tellus placerat nec. Nunc
								condimentum urna sit amet blandit egestas. Nam non placerat
								nisi. Sed sit amet massa porta, porttitor tellus porttitor,
								sagittis ex. Duis vitae dolor sit amet sem mattis molestie.
								Aliquam id pharetra leo.
							</p>
						</div>
						<div className="card-footer">
							<div className="d-flex align-items-center">
								<span className="text-sm text-muted font-italic">
									<i className="fal fa-clock mr-1" /> Posted 4 days ago
								</span>
								<Link to="#" className="flex-shrink-0 ml-auto">
									Reply <i className="fal fa-reply ml-2" />{' '}
								</Link>
							</div>
						</div>
					</div>
					{/* post -end */}
					{/* post */}
					<div className="card mb-g border shadow-0">
						<div className="card-header bg-white p-0">
							<div className="p-3 d-flex flex-row">
								<div className="d-block flex-shrink-0">
									<img
										src={avatarImg}
										className="profile-image rounded-circle"
										alt=""
									/>
								</div>
								<div className="d-block ml-2">
									<span className="h6 font-weight-bold text-uppercase d-block m-0">
										RE: Package location
									</span>
									<Link
										to="#"
										className="fs-sm text-info h6 fw-500 mb-0 d-block"
									>
										Dr. John Cook PhD
									</Link>
									<div className="d-flex mt-1 text-warning align-items-center">
										<i className="fas fa-star mr-1" />
										<i className="fas fa-star mr-1" />
										<i className="fas fa-star mr-1" />
										<i className="fas fa-star mr-1" />
										<i className="fas fa-star mr-1" />
										<span className="text-muted fs-xs font-italic">
											(77 votes)
										</span>
									</div>
								</div>
								<Link
									to="#"
									className="d-inline-flex align-items-center text-dark ml-auto align-self-start"
								>
									<i className="fal fa-heart ml-1 text-muted" />
								</Link>
							</div>
						</div>
						<div className="card-body ">
							<p>
								Proin vehicula nibh a nisl porta laoreet. Etiam quis massa quam.
								Etiam elementum nunc accumsan ullamcorper viverra. Sed aliquam
								ligula eu porta posuere. Nullam in dictum lacus. Nulla auctor
								hendrerit purus, sit amet lacinia tellus placerat nec. Nunc
								condimentum urna sit amet blandit egestas. Nam non placerat
								nisi. Sed sit amet massa porta, porttitor tellus porttitor,
								sagittis ex. Duis vitae dolor sit amet sem mattis molestie.
								Aliquam id pharetra leo.
							</p>
							<p>
								Vivamus at sapien eget lorem suscipit laoreet. Donec tincidunt
								augue auctor, ullamcorper urna ac, bibendum odio. Donec ac
								facilisis mauris. Quisque egestas quam libero, in vulputate
								purus accumsan vitae
							</p>
						</div>
						<div className="card-footer">
							<div className="d-flex align-items-center">
								<span className="text-sm text-muted font-italic">
									<i className="fal fa-clock mr-1" /> Posted 2 days ago
								</span>
								<Link to="#" className="flex-shrink-0 ml-auto">
									Reply <i className="fal fa-reply ml-2" />{' '}
								</Link>
							</div>
						</div>
					</div>
					{/* post -end */}
					{/* post */}
					<div className="card mb-g border shadow-0">
						<div className="card-header bg-white p-0">
							<div className="p-3 d-flex flex-row">
								<div className="d-block flex-shrink-0">
									<img
										src={avatarImg}
										className="profile-image rounded-circle"
										alt=""
									/>
								</div>
								<div className="d-block ml-2">
									<span className="h6 font-weight-bold text-uppercase d-block m-0">
										RE: Package location
									</span>
									<Link
										to="#"
										className="fs-sm text-info h6 fw-500 mb-0 d-block"
									>
										Sarah McBrook
									</Link>
									<div className="d-flex mt-1 text-warning align-items-center">
										<i className="fas fa-star mr-1" />
										<i className="fas fa-star mr-1" />
										<i className="fas fa-star mr-1" />
										<i className="fas fa-star mr-1" />
										<i className="fas fa-star mr-1" />
										<span className="text-muted fs-xs font-italic">
											(146 votes)
										</span>
									</div>
								</div>
								<Link
									to="#"
									className="d-inline-flex align-items-center text-dark ml-auto align-self-start"
								>
									<span>3</span>
									<i className="fas fa-heart ml-1 text-danger" />
								</Link>
							</div>
						</div>
						<div className="card-body ">
							<p>
								Curabitur sollicitudin eros eget nibh commodo posuere. Aenean
								non diam at massa accumsan elementum eget in arcu. Cras
								vestibulum ornare nulla, vel porttitor turpis tristique at. In
								laoreet eleifend dolor, ac eleifend nunc porttitor et. Praesent
								volutpat risus in metus lacinia porttitor
							</p>
						</div>
						<div className="card-footer">
							<div className="d-flex align-items-center">
								<span className="text-sm text-muted font-italic">
									<i className="fal fa-clock mr-1" /> Posted 1 hour ago
								</span>
								<Link to="#" className="flex-shrink-0 ml-auto">
									Reply <i className="fal fa-reply ml-2" />{' '}
								</Link>
							</div>
						</div>
					</div>
					{/* post -end */}
					<ul className="pagination mt-3">
						<li className="page-item disabled">
							<Link className="page-link" to="#" aria-label="Previous">
								<span aria-hidden="true">
									<i className="fal fa-chevron-left" />
								</span>
							</Link>
						</li>
						<li className="page-item active" aria-current="page">
							<span className="page-link">
								1<span className="sr-only">(current)</span>
							</span>
						</li>
						<li className="page-item">
							<Link className="page-link" to="#">
								2
							</Link>
						</li>
						<li className="page-item">
							<Link className="page-link" to="#">
								3
							</Link>
						</li>
						<li className="page-item">
							<Link className="page-link" to="#" aria-label="Next">
								<span aria-hidden="true">
									<i className="fal fa-chevron-right" />
								</span>
							</Link>
						</li>
					</ul>
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

export default connect(mapStateToProps, {})(Discussions)

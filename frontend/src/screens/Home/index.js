import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { newsList } from '../../actions/NewsActions'
import { dataAtualFormatada } from '../../helpers/datetime'
import Menu from '../Layouts/Menu'
import Header from '../Layouts/Header'
import Footer from '../Layouts/Footer'

const Home = ({ newsList }) => {
	const [newsPost, setNewsPost] = useState([])

	useEffect(() => {
		newsList()
			.then(({ payload }) => {
				const newData = payload.data.data
				setNewsPost(newData)
			})
			.catch(err => {
				alert('posts não foram carregados.')
				console.log(err)
			})
	}, [newsList])

	return (
		<div className="mod-bg-1">
			<div className="page-wrapper">
				<div className="page-inner">
					<Menu />

					<div className="page-content-wrapper">
						<Header />

						<main id="js-page-content" role="main" className="page-content">
							<div className="subheader">
								<h1 className="subheader-title">
									<i className="fal fa-home"></i> Home
								</h1>
							</div>

							{newsPost && newsPost.length
								? newsPost.map(props => {
										return (
											<div key={props.id} className="card mb-g">
												<div className="card-body pb-0 px-4">
													<div className="d-flex flex-row pb-3 pt-2  border-top-0 border-left-0 border-right-0">
														<div className="d-inline-block align-middle status status-success mr-3">
															<span
																className="profile-image rounded-circle d-block"
																style={{
																	backgroundImage: `url("https://www.tibiawiki.com.br/images/e/e4/Outfit_Citizen_Male.gif")`,
																	backgroundSize: 'cover',
																}}
															></span>
														</div>
														<h5 className="mb-0 flex-1 text-dark fw-500">
															{props.player.name}
															<small className="m-0 l-h-n">
																{props.player.group_id}
															</small>
														</h5>

														<span className="js-get-date">
															<i className="far fa-clock"></i>{' '}
															{dataAtualFormatada(props.createdAt)}
														</span>
													</div>
													<hr className="m-0 w-100" />
													<br />
													<h1 className="subheader-title">
														<i className="fas fa-newspaper"></i>{' '}
														{props.post_topic}
													</h1>
													<div className="pb-3 pt-2 border-top-0 border-left-0 border-right-0 text-muted">
														{props.post_text}
													</div>
													<div className="d-flex align-items-center demo-h-spacing py-3">
														<button className="d-inline-flex align-items-center text-dark">
															<i className="fas fa-heart fs-xs mr-1 text-danger"></i>{' '}
															<span>2 Likes</span>
														</button>
														<button className="d-inline-flex align-items-center text-dark">
															<i className="fal fa-comment fs-xs mr-1"></i>{' '}
															<span>2 Comments</span>
														</button>
													</div>
												</div>
												<div className="card-body py-0 px-4 border-faded border-right-0 border-bottom-0 border-left-0">
													<div className="d-flex flex-column align-items-center">
														<div className="d-flex flex-row w-100 py-4">
															<div className="d-inline-block align-middle status status-sm status-success mr-3">
																<span
																	className="profile-image profile-image-md rounded-circle d-block mt-1"
																	style={{
																		backgroundImage: `url("https://www.tibiawiki.com.br/images/e/e4/Outfit_Citizen_Male.gif")`,
																		backgroundSize: 'cover',
																	}}
																></span>
															</div>
															<div className="mb-0 flex-1 text-dark">
																<div className="d-flex">
																	<Link to="/" className="text-dark fw-500">
																		Test name
																	</Link>
																	<span className="text-muted fs-xs opacity-70 ml-auto">
																		15 minutes
																	</span>
																</div>
																<p className="mb-0">
																	Excellent work, looking forward to it.
																</p>
															</div>
														</div>
														<hr className="m-0 w-100" />

														<div className="d-flex flex-row w-100 py-4">
															<div className="d-inline-block align-middle status status-sm status-success mr-3">
																<span
																	className="profile-image profile-image-md rounded-circle d-block mt-1"
																	style={{
																		backgroundImage: `url("https://www.tibiawiki.com.br/images/e/e4/Outfit_Citizen_Male.gif")`,
																		backgroundSize: 'cover',
																	}}
																></span>
															</div>
															<div className="mb-0 flex-1 text-dark">
																<div className="d-flex">
																	<Link to="/" className="text-dark fw-500">
																		Jobs
																	</Link>
																	<span className="text-muted fs-xs opacity-70 ml-auto">
																		3 minutes
																	</span>
																</div>
																<p className="mb-0">Congrats mate!</p>
																<div className="pl-0 d-flex flex-row w-100 pb-0 pt-4">
																	<div className="d-inline-block align-middle status status-sm status-success mr-3">
																		<span
																			className="profile-image profile-image-md rounded-circle d-block mt-1"
																			style={{
																				backgroundImage: `url("https://www.tibiawiki.com.br/images/e/e4/Outfit_Citizen_Male.gif")`,
																				backgroundSize: 'cover',
																			}}
																		></span>
																	</div>
																	<div className="mb-0 flex-1 text-dark">
																		<div className="d-flex">
																			<Link to="/" className="text-dark fw-500">
																				Yinzera
																			</Link>
																			<span className="text-muted fs-xs opacity-70 ml-auto">
																				30 seconds
																			</span>
																		</div>
																		<p className="mb-0">Thanks!</p>
																	</div>
																</div>
															</div>
														</div>
														<hr className="m-0 w-100" />

														<div className="py-3 w-100">
															<textarea
																className="form-control border-0 p-0"
																rows="2"
																placeholder="add a comment..."
															></textarea>
														</div>
													</div>
												</div>
											</div>
										)
								  })
								: null}

							<h3>
								Hati Team
								<small className="mb-0">We build cool things...</small>
							</h3>
							<div className="d-flex flex-wrap demo demo-h-spacing mt-3 mb-3">
								<div className="rounded-pill bg-white shadow-sm p-2 border-faded mr-3 d-flex flex-row align-items-center justify-content-center flex-shrink-0">
									<img
										src="https://i.imgur.com/nZhyuRY.png"
										alt=""
										className="img-thumbnail img-responsive rounded-circle"
										style={{ width: '5rem', height: '5rem' }}
									/>
									<div className="ml-2 mr-3">
										<h5 className="m-0">
											Developer Web
											<small className="m-0 fw-300">Lead Author</small>
										</h5>
										<a
											href="https://twitter.com/@pedrogiampietro"
											className="text-info fs-sm"
										>
											@pedrogiampietro
										</a>{' '}
										-
										<span className="text-info fs-sm" title="Contact Sunny">
											<i className="fal fa-envelope"></i>
										</span>
									</div>
								</div>
								<div></div>
							</div>
						</main>

						<div
							className="page-content-overlay"
							data-action="toggle"
							data-classname="mobile-nav-on"
						></div>

						<Footer />
					</div>
				</div>
			</div>
		</div>
	)
}

const mapStateToProps = state => {
	return {
		post: state.post.post,
	}
}

export default connect(mapStateToProps, { newsList })(Home)

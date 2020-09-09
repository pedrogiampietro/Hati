import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { newsList } from '../../actions/NewsActions'
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
											<div
												key={props.id}
												className="fs-lg fw-300 p-5 bg-white border-faded rounded mb-g"
											>
												<h3 className="mb-g">{props.post_topic}</h3>
												<p>{props.post_text}</p>

												<p>
													Sincerely,
													<br />
													{props.player.name}
													<br />
												</p>
											</div>
										)
								  })
								: 'teste'}

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
							data-class="mobile-nav-on"
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

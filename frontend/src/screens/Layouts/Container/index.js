import React from 'react'
import { useLocation } from 'react-router-dom'

import Header from '../Header'
import Menu from '../Menu'
import Footer from '../Footer'
import { GiWolfHowl } from 'react-icons/gi'

import { closeMenuOnMobile } from '../../../assets/js/scripts'

import './styles.css'

const Container = ({ children }) => {
	const [title, setTitle] = React.useState('')
	const location = useLocation()
	console.log(location)

	React.useEffect(() => {
		const { pathname } = location

		switch (pathname) {
			case '/':
				setTitle('Home')
				break
			case '/sign-in':
				setTitle('Sign In')
				break
			case '/sign-up':
				setTitle('Sign Up')
				break
			case '/highscores':
				setTitle('Highscores')
				break
			case '/account/characters':
				setTitle('Account Managment')
				break
			case '/account/profile':
				setTitle('Profile')
				break
			case '/account/avatar':
				setTitle('Avatar')
				break
			case '/account/characters/create':
				setTitle('Create Character')
				break
			case '/forum':
				setTitle('Forum')
				break
			case '/forum/last-news':
				setTitle('Last News')
				break
			case '/forum/discussions':
				setTitle('Discussions')
				break
			case '/forum/bug-report':
				setTitle('Bug Report')
				break

			default:
				setTitle('Hati AAC')
		}
	}, [location])

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
									<GiWolfHowl size={44} color="#886ab5" /> {title}
								</h1>
							</div>

							{children}

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
						<Footer />
					</div>
				</div>
			</div>
			<div
				className="fechaMenu isClose"
				onClick={() => closeMenuOnMobile()}
			></div>
		</div>
	)
}

export default Container

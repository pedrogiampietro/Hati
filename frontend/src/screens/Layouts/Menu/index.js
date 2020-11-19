import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import Logo from '../../../assets/img/logo.png'
import coverCard from '../../../assets/img/card-backgrounds/cover-2-lg.png'

import { BiGlobe } from 'react-icons/bi'
import { ImUserPlus } from 'react-icons/im'
import { FaSignInAlt } from 'react-icons/fa'
import { GoCloudDownload } from 'react-icons/go'
import { SiStatuspage } from 'react-icons/si'
import { GiTrophy, GiCheckedShield, GiBattleGear } from 'react-icons/gi'
import { AiOutlineMessage, AiOutlineShoppingCart } from 'react-icons/ai'

const Menu = ({ account }) => {
	return (
		<aside className="page-sidebar ">
			<nav id="js-primary-nav" className="primary-nav" role="navigation">
				<div className="info-card">
					<img src={Logo} className="profile-image rounded-circle" alt="Logo" />
					<div className="info-card-text">
						<span className="d-flex align-items-center text-white">
							<span className="text-truncate text-truncate-sm d-inline-block">
								<h1>Hati</h1>
							</span>
						</span>
						<span className="d-inline-block text-truncate text-truncate-sm">
							AAC
						</span>
					</div>
					<img src={coverCard} className="cover" alt="cover" />
				</div>
				<ul id="js-nav-menu" className="nav-menu ">
					<li>
						<Link to="/">
							<BiGlobe size={18} className="mr-2" />
							<span className="nav-link-text">News</span>
						</Link>
					</li>

					<li>
						<Link to="/sign-up">
							<ImUserPlus size={18} className="mr-2" />
							<span className="nav-link-text">Register</span>
						</Link>
					</li>

					<li>
						<Link to="/sign-in">
							<FaSignInAlt size={18} className="mr-2" />
							<span className="nav-link-text">
								{account ? 'My Account' : 'Login'}
							</span>
						</Link>
					</li>

					<li>
						<Link to="/downloads">
							<GoCloudDownload size={18} className="mr-2" />
							<span className="nav-link-text">Downloads</span>
						</Link>
					</li>
					<li className="nav-title">Community</li>
					<li>
						<Link to="/online">
							<SiStatuspage size={18} className="mr-2" />
							<span className="nav-link-text">Online List</span>
						</Link>
					</li>
					<li>
						<Link to="/highscores">
							<GiTrophy size={18} className="mr-2" />
							<span className="nav-link-text" data-i18n="nav.form_stuff">
								Highscores
							</span>
						</Link>
					</li>
					<li>
						<Link to="/forum">
							<AiOutlineMessage size={18} className="mr-2" />
							<span className="nav-link-text">Forum</span>
						</Link>
					</li>
					<li className="nav-title">Guilds</li>
					<li>
						<Link to="/guilds">
							<GiCheckedShield size={18} className="mr-2" />
							<span className="nav-link-text">Guild List</span>
						</Link>
					</li>
					<li>
						<Link to="/wars">
							<GiBattleGear size={18} className="mr-2" />
							<span className="nav-link-text">Guild War</span>
						</Link>
					</li>
					<li className="nav-title">Market</li>
					<li>
						<Link to="/shop">
							<AiOutlineShoppingCart size={18} className="mr-2" />
							<span className="nav-link-text">Shop</span>
						</Link>
					</li>
				</ul>
				<div className="filter-message js-filter-message bg-success-600"></div>
			</nav>
		</aside>
	)
}

const mapStateToProps = (state) => {
	return {
		account: state.account.account,
	}
}

export default connect(mapStateToProps)(Menu)

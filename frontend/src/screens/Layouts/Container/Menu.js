import React from 'react'

import Menu from '../Menu'
import { GiWolfHowl } from 'react-icons/gi'

import { closeMenuOnMobile } from '../../../assets/js/scripts'

import './styles.css'

const ContainerOnlyMenu = ({ children }) => {
	return (
		<div className="mod-bg-1">
			<div className="page-wrapper">
				<div className="page-inner">
					<Menu />
					<div className="page-content-wrapper">
						<main id="js-page-content" role="main" className="page-content">
							<div className="subheader">
								<h1 className="subheader-title">
									<GiWolfHowl size={44} color="#fff" />
								</h1>
							</div>
						</main>
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

export default ContainerOnlyMenu

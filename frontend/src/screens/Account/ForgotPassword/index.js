import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import ContainerOnlyMenu from '../../Layouts/Container/Menu'
import Background from '../../../assets/img/backgrounds/pattern-1.svg'

import './styles.css'

const ForgotPassword = () => {
	return (
		<>
			<div class="page-inner bg-brand-gradient ">
				<ContainerOnlyMenu />
				<div class="page-content-wrapper bg-transparent m-0">
					<div class="height-10 w-100 shadow-lg px-4 bg-brand-gradient">
						<div class="d-flex align-items-center container p-0">
							<div class="page-logo width-mobile-auto m-0 align-items-center justify-content-center bg-transparent bg-img-none shadow-0 height-9">
								<span class="page-logo-link press-scale-down d-flex align-items-center">
									<span class="page-logo-text mr-1">Hati AAC</span>
								</span>
							</div>

							<span class="text-white opacity-50 ml-auto mr-2 hidden-sm-down">
								Already a member?
							</span>
							<Link to="/sign-in" class="btn-link text-white ml-auto ml-sm-0">
								Secure Login
							</Link>
						</div>
					</div>

					<div
						class="flex-1"
						style={{
							backgroundImage: `url(${Background})`,
							backgroundRepeat: 'no-repeat',
							backgroundPosition: 'center bottom',
							backgroundSize: 'cover',
						}}
					>
						{' '}
						<div class="container py-4 py-lg-5 my-lg-5 px-4 px-sm-0">
							<div class="row">
								<div class="col-xl-12">
									<h2 class="fs-xxl fw-500 mt-4 text-white text-center">
										"My dog ate my password"
										<small class="h3 fw-300 mt-3 mb-5 text-white opacity-60 hidden-sm-down">
											Not a problem, happens to the best of us. Just use the
											form below to reset it!
										</small>
									</h2>
								</div>
								<div class="col-xl-6 ml-auto mr-auto">
									<div class="card p-4 rounded-plus bg-faded">
										<form
											id="js-login"
											novalidate=""
											action="intel_analytics_dashboard.html"
										>
											<div class="form-group">
												<label class="form-label" for="lostaccount">
													Your username or email
												</label>
												<input
													type="email"
													id="lostaccount"
													class="form-control"
													placeholder="Recovery email"
													required=""
												/>
												<div class="invalid-feedback">
													No, you missed this one.
												</div>
												<div class="help-block">
													We will email you the instructions
												</div>
											</div>
											<div class="row no-gutters">
												<div class="col-md-4 ml-auto text-right">
													<button
														id="js-login-btn"
														type="submit"
														class="btn btn-danger waves-effect waves-themed"
													>
														Recover
													</button>
												</div>
											</div>
										</form>
									</div>
								</div>
							</div>
						</div>
						<div class="d-block text-center text-white">2020 © HatiAAC ;</div>
					</div>
				</div>
			</div>
		</>
	)
}

const mapStateToProps = (state) => {
	return {
		account: state.account.account,
	}
}

export default connect(mapStateToProps, {})(ForgotPassword)

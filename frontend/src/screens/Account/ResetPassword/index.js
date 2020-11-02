import React from 'react'
import { connect } from 'react-redux'
import { Link, useHistory } from 'react-router-dom'
import { getFormData } from '../../../helpers/form'
import { resetPassword } from '../../../actions/AccountActions'

import ContainerOnlyMenu from '../../Layouts/Container/Menu'
import Background from '../../../assets/img/backgrounds/pattern-1.svg'
import Error from '../../../helpers/error'

import './styles.css'

const ResetPassword = ({ resetPassword }) => {
	const [error, setError] = React.useState()
	const history = useHistory()

	const submitHandler = (e) => {
		e.preventDefault()
		const data = getFormData(e)

		resetPassword(data)
			.then(({ payload }) => {
				history.push('/sign-in')
			})
			.catch((err) => {
				const { data } = err.response

				if (Object.entries(data.metadata).length > 0) {
					Object.keys(data.metadata.error).forEach(function (item) {
						setError(data.metadata.error[item])
					})
				} else {
					setError(data.message)
				}
			})
	}

	return (
		<>
			<div className="page-inner bg-brand-gradient ">
				<ContainerOnlyMenu />
				<div className="page-content-wrapper bg-transparent m-0">
					<div className="height-10 w-100 shadow-lg px-4 bg-brand-gradient">
						<div className="d-flex align-items-center container p-0">
							<div className="page-logo width-mobile-auto m-0 align-items-center justify-content-center bg-transparent bg-img-none shadow-0 height-9">
								<span className="page-logo-link press-scale-down d-flex align-items-center">
									<span className="page-logo-text mr-1">Hati AAC</span>
								</span>
							</div>

							<span className="text-white opacity-50 ml-auto mr-2 hidden-sm-down">
								Already a member?
							</span>
							<Link
								to="/sign-in"
								className="btn-link text-white ml-auto ml-sm-0"
							>
								Secure Login
							</Link>
						</div>
					</div>

					<div
						className="flex-1"
						style={{
							backgroundImage: `url(${Background})`,
							backgroundRepeat: 'no-repeat',
							backgroundPosition: 'center bottom',
							backgroundSize: 'cover',
						}}
					>
						{' '}
						<div className="container py-4 py-lg-5 my-lg-5 px-4 px-sm-0">
							<div className="row">
								<div className="col-xl-12">
									<h2 className="fs-xxl fw-500 mt-4 text-white text-center">
										Thank you request! Please check your email.
										<small className="h3 fw-300 mt-3 mb-5 text-white opacity-60 hidden-sm-down">
											We’ve sent a message to your e-mail a link to forgot your
											account.
										</small>
									</h2>
								</div>
								<div className="col-xl-6 ml-auto mr-auto">
									<div className="card p-4 rounded-plus bg-faded">
										<form onSubmit={submitHandler}>
											<div className="form-group">
												<label className="form-label" htmlFor="email">
													Your e-mail
												</label>
												<input
													type="email"
													id="email"
													name="email"
													className="form-control"
													placeholder="email from your account you want to recover"
													required
												/>
												<div className="invalid-feedback">
													No, you missed this one.
												</div>
												<div className="help-block">
													We will email you the instructions
												</div>
											</div>

											<div className="form-group">
												<label className="form-label" htmlFor="token">
													Token
												</label>
												<input
													type="text"
													id="token"
													name="token"
													className="form-control"
													placeholder="token you received in the requested email."
													required
												/>
											</div>

											<div className="form-group">
												<label className="form-label" htmlFor="password">
													New Password
												</label>
												<input
													type="password"
													id="password"
													name="password"
													className="form-control"
													placeholder="enter the new password, avoid using password from other servers."
													required
												/>
												<div className="invalid-feedback">
													No, you missed this one.
												</div>
												<div className="help-block">
													<Error error={error} />
												</div>
											</div>
											<div className="row no-gutters">
												<div className="col-md-4 ml-auto text-right">
													<button
														type="submit"
														className="btn btn-danger waves-effect waves-themed"
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
						<div className="d-block text-center text-white">
							2020 © HatiAAC.
						</div>
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

export default connect(mapStateToProps, { resetPassword })(ResetPassword)

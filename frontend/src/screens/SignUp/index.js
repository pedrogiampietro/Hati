import React from 'react'
import { Redirect, useHistory } from 'react-router-dom'
import { connect } from 'react-redux'
import { signUp } from '../../actions/AccountActions'
import { getFormData } from '../../helpers/form'

import Container from '../Layouts/Container'
import SignUpBackground from '../../assets/img/backgrounds/pattern-1.svg'
import { toast, ToastContainer } from 'react-toastify'

const SignUp = ({ signUp, account, children }) => {
	const history = useHistory()
	const [error, setError] = React.useState()

	const submitHandler = (e) => {
		e.preventDefault()
		const data = getFormData(e)
		signUp(data)
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
	toast.error(error)

	if (account) {
		return <Redirect to="/account/characters" />
	}

	return (
		<>
			<Container>
				<div
					className="flex-1"
					style={{
						backgroundImage: `url(${SignUpBackground})`,
						backgroundRepeat: 'no-repeat',
						backgroundPosition: 'center',
						backgroundSize: 'cover',
					}}
				>
					<div className="row">
						<div className="col-xl-12">
							<h2 className="fs-xxl fw-500 mt-4 text-primary text-center">
								Register now, its free!
								<small className="h3 fw-300 mt-3 mb-5 text-primary opacity-60 hidden-sm-down">
									Your registration is free for an unlimited time. Enjoy Hati on
									your mobile, desktop or tablet.
									<br />
									You are ready to go wherever you go!
								</small>
							</h2>
						</div>
						<div className="col-xl-6 ml-auto mr-auto">
							<div className="card p-4 rounded-plus bg-faded">
								<div className="alert alert-primary text-dark" role="alert">
									<strong>Heads Up!</strong> Our server-save takes place at 6am
									every day. Verification emails can be delayed by up to 10
									minutes. Check your spam box.
								</div>
								<form onSubmit={submitHandler}>
									<div className="form-group row">
										<label className="col-xl-12 form-label" htmlFor="name">
											I never registered the same password used on other
											servers! Avoid getting hacked.
										</label>
										<div className="col-6 pr-1">
											<input
												type="text"
												name="name"
												className="form-control"
												placeholder="Enter your account name"
											/>

											<div className="invalid-feedback">
												No, you missed this one.
											</div>
										</div>
									</div>
									<div className="form-group row">
										<div className="col-6 pr-1">
											<input
												type="password"
												name="password"
												className="form-control"
												placeholder="Enter your password"
											/>
											<div className="invalid-feedback">
												No, you missed this one.
											</div>
											<div className="help-block">
												Your password must be 8-20 characters long, contain
												letters and numbers, and must not contain spaces,
												special characters, or emoji.
											</div>
										</div>
										<div className="col-6 pl-1">
											<input
												type="password"
												name="password_confirmation"
												className="form-control"
												placeholder="Confirm password"
											/>

											<div className="invalid-feedback">
												Sorry, you missed this one.
											</div>
										</div>
									</div>
									<div className="form-group">
										<label className="form-label" htmlFor="email">
											Email will be needed for verification and account recovery
										</label>
										<input
											type="email"
											name="email"
											className="form-control"
											placeholder="Enter your valid e-mail"
										/>
										<div className="invalid-feedback">
											No, you missed this one.
										</div>
										<div className="help-block">
											Your email will also be your username
										</div>
									</div>

									<div className="form-group demo">
										<div className="custom-control custom-checkbox">
											<input
												type="checkbox"
												className="custom-control-input"
												name="isTerms"
												id="isTerms"
											/>
											<label className="custom-control-label" htmlFor="isTerms">
												{' '}
												I agree to terms &amp; conditions
											</label>
											<div className="invalid-feedback">
												You must agree before proceeding
											</div>
										</div>
										{/* <div className="custom-control custom-checkbox">
											<input
												type="checkbox"
												className="custom-control-input"
												id="newsletter"
											/>
											<label
												className="custom-control-label"
												htmlFor="newsletter"
											>
												Sign up for newsletters (dont worry, we won't send so
												many)
											</label>
										</div> */}
									</div>
									<div className="row no-gutters">
										<div className="col-md-4 ml-auto text-right">
											<button
												id="js-login-btn"
												type="submit"
												className="btn btn-block btn-danger btn-lg mt-3 waves-effect waves-themed"
											>
												Create
											</button>
										</div>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
				<ToastContainer />
			</Container>
		</>
	)
}

const mapStateToProps = (state) => {
	return {
		account: state.account.account,
	}
}

export default connect(mapStateToProps, { signUp })(SignUp)

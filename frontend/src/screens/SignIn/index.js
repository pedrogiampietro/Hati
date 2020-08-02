import React from 'react';
import { Link, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { signIn } from '../../actions/AccountActions'

const SignIn = (props) => {
    const { signIn, account} = props

    if (account) {
        return <Redirect to='/account/characters' />
    }

    const submitHandler = (e) => {
        e.preventDefault()

        const formData = new FormData(e.target)
        const data = Object.fromEntries(formData)

        signIn(data)
    }

    console.log('***** signIn.account', account)

    return (

        <div className="blankpage-form-field">
        <div className="page-logo m-0 w-100 align-items-center justify-content-center rounded border-bottom-left-radius-0 border-bottom-right-radius-0 px-4">
            <a href="form_input_groups.html" className="page-logo-link press-scale-down d-flex align-items-center">
                <img src="https://i.imgur.com/HoKkhv2.png" alt="Hati AAC" aria-roledescription="logo" />
                <span className="page-logo-text mr-1">Hati AAC</span>
                <i className="fal fa-angle-down d-inline-block ml-1 fs-lg color-primary-300"></i>
            </a>
        </div>
        <div className="card p-4 border-top-left-radius-0 border-top-right-radius-0">
         <form onSubmit={submitHandler}>
                <div className="form-group">
                    <label className="form-label" htmlFor="accountname">Account Name</label>
                    <input type="text" className="form-control" placeholder="Your account name" name="name" />
                </div>

                <div className="form-group">
                    <label className="form-label" htmlFor="password">Password</label>
                    <input type="password" name="password" className="form-control" />
                </div>

                <div className="form-group text-left">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="rememberme" />
                        <label className="custom-control-label" htmlFor="rememberme"> Remember me for the next 30 days</label>
                    </div>
                </div>
                <button type="submit" className="btn btn-default float-right">Login</button>
            </form>
        </div>
        <div className="blankpage-footer text-center">
             <Link to="/recovery"><strong>Recover Password</strong></Link> <br/>
             <Link to="/sign-up"><strong>Register Account</strong></Link>
        </div>
    </div>
    
    )
}

const mapStateToProps = (state) => {
    return {
        account: state.account.account
    }
}


export default connect(mapStateToProps, { signIn })(SignIn)
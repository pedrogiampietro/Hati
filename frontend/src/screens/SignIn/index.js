import React from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { signIn } from './SignInActions'

const SignIn = (props) => {

    const { account, signIn} = props

    const submitHandler = (e) => {
        e.preventDefault()

        signIn({ name: '1234563', password: '123456' })
    }

    console.log('***** signIn.account', account)

    return (
        <div className="container h-100 pt-5">
            <h1>Sign in</h1>
            <div className="d-flex flex-column h-100">
                <form onSubmit={submitHandler}>
                    <div className="form-group">
                        <label>Email</label>
                        <input type="text" className="form-control" />
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" className="form-control" />
                    </div>
                    <div>
                        <button className="btn btn-dark btn-round">Submit</button>
                    </div>
                </form>
                <div className="container text-center fixed-bottom pb-5">
                    <div className="text-muted">Don't have an Account?</div>
                    <Link to="/sign-up">Sign up</Link>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        account: state.signIn.account
    }
}


export default connect(mapStateToProps, { signIn })(SignIn)
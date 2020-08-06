import React from 'react';
import { Link, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { signUp } from '../../actions/AccountActions'
import { getFormData } from '../../helpers/form';

const SignUp = (props) => {
    const { signUp, account } = props

    const submitHandler = (e) => {
        e.preventDefault()
        const data = getFormData(e)
        signUp(data)
        
    }
    
    if (account) {
        return <Redirect to='/account/characters' />
    }

    return (
        <div className="container h-100 pt-5">
            <h1>Sign Up</h1>
            <div className="d-flex flex-column h-100">
                <form onSubmit={submitHandler}>
                    <div className="form-group">
                        <label>Account Name</label>
                        <input type="text" className="form-control" name="name" />
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" className="form-control" name="password"/>
                    </div>
                    <div className="form-group">
                        <label>Password Confirmation</label>
                        <input type="password" className="form-control" name="password_confirmation" />
                    </div>
                    <div>
                        <button className="btn btn-dark btn-round">Submit</button>
                    </div>
                </form>
                <div className="container text-center fixed-bottom pb-5">
                    <div className="text-muted">Already have an Account?</div>
                    <Link to='/sign-in'>Sign in</Link>
                </div>
            </div>
        </div>
    )
}


const mapStateToProps = (state) => {
    return {
        account: state.account.account
    }
}


export default connect(mapStateToProps, { signUp })(SignUp)
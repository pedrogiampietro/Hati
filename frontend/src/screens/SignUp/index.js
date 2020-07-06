import React from 'react'
import { Link } from 'react-router-dom'

const SignUp = () => {
    return (
        <div className="container h-100 pt-5">
            <h1>Sign Up</h1>
            <div className="d-flex flex-column h-100">
                <form>
                    <div className="form-group">
                        <label>E-mail</label>
                        <input type="text" className="form-control" />
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" className="form-control" />
                    </div>
                    <div className="form-group">
                        <label>Password Confirmation</label>
                        <input type="password" className="form-control" />
                    </div>
                    <div>
                        <button className="btn btn-primary btn-round">Submit</button>
                    </div>
                </form>
                <div className="container text-center fixed-bottom pb-5">
                    <div className="text-muted">Already have an account?</div>
                    <Link to='/sign-in'>Sign In</Link>
                </div>
            </div>
        </div>
    )
}

export default SignUp
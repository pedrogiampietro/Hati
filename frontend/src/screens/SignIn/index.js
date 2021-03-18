import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { getFormData } from '../../helpers/FormData';
import { signIn } from '../../actions/AccountActions';

import Container from '../Layouts/Container';
import Error from '../../helpers/Error';

import { FaSignInAlt } from 'react-icons/fa';
import { GiPadlock } from 'react-icons/gi';

import Button from '../../components/Button';

const SignIn = (props) => {
  const { signIn, account } = props;
  const [error, setError] = React.useState();
  const [loading, setLoading] = React.useState(false);

  if (account) {
    return <Redirect to="/account/characters" />;
  }

  const submitHandler = (e) => {
    e.preventDefault();
    setLoading(true);
    const data = getFormData(e);
    signIn(data).catch((err) => {
      const { data } = err.response;
      setError(data.message);
      setLoading(false);
    });
  };

  return (
    <Container>
      <div className="row">
        <div className="col col-md-6 col-lg-7 hidden-sm-down">
          <h2 className="fs-xxl fw-500 mt-4 text-primary">
            If your HatiAAC Account is already connected to an authenticator,
            click on "Use Authenticator". A field will be displayed which allows
            you to provide your authenticator token along with your account data
            upon login. Otherwise, you will be asked for your authenticator
            token in the next stepaccmanage.
            <small className="h3 fw-300 mt-3 mb-5 text-primary opacity-60">
              An authenticator is a security feature which helps to prevent any
              unauthorised access to your Kivera-Global account! You can connect
              your account to an authenticator via your account management page.
            </small>
          </h2>
          <Link to="/">
            <span className="fs-lg fw-500 text-primary opacity-70">
              Learn more &gt;&gt;
            </span>
          </Link>
        </div>
        <div className="col-sm-12 col-md-6 col-lg-5 col-xl-4 ml-auto">
          <h1 className="text-primary fw-300 mb-3 d-sm-block d-md-none">
            Secure login
          </h1>
          <div className="card p-4 rounded-plus bg-faded">
            <form onSubmit={submitHandler}>
              <div className="form-group">
                <label className="form-label" htmlFor="accountname">
                  Account Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Your account name"
                  name="name"
                />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="password">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  className="form-control"
                />
              </div>

              <Error error={error} />
              <div className="row no-gutters">
                <div className="col-lg-6 pr-lg-1 my-2">
                  {/* <button
										type="submit"
										className="btn btn-info btn-block btn-lg waves-effect waves-themed"
									>

									</button> */}
                  <Button
                    className="btn btn-info btn-block btn-lg waves-effect waves-themed"
                    type="submit"
                    disabled={loading ? true : false}
                  >
                    <FaSignInAlt size={20} className="mr-2" />
                    {loading ? 'Loading... ' : 'Sign-in'}
                  </Button>
                </div>
                <div className="col-lg-6 pl-lg-1 my-2">
                  <Link to="/forgot">
                    {' '}
                    <button
                      id="js-login-btn"
                      className="btn btn-danger btn-block btn-lg waves-effect waves-themed"
                    >
                      <GiPadlock size={20} /> Forgot Password
                    </button>
                  </Link>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Container>
  );
};

const mapStateToProps = (state) => {
  return {
    account: state.account.account,
  };
};

export default connect(mapStateToProps, { signIn })(SignIn);

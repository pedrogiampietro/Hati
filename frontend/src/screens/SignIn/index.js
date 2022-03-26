import React, { useState, useCallback } from 'react';
import { Link, Redirect, useHistory } from 'react-router-dom';
import { Formik, Form } from 'formik';

import { connect } from 'react-redux';
import { signIn } from '../../actions/AccountActions';

import Container from '../Layouts/Container';

import { FaSignInAlt } from 'react-icons/fa';
import { GiPadlock } from 'react-icons/gi';

import Button from '../../components/Button';
import { TextField } from '../../components/Input/TextField';

import { signInSchema } from '../../validations/signInSchema';

import Swal from 'sweetalert2';
import { FiAlertCircle } from 'react-icons/fi';

const SignIn = ({ signIn, account }) => {
  const history = useHistory();

  const [loading, setLoading] = useState(false);

  const handleSubmitSignIn = useCallback(async (values) => {
    signIn(values)
      .then(({ payload }) => {
        Swal.fire({
          title: 'Sucessfuly!',
          html: 'you have logged into the system, and you will be redirected!',
          icon: 'success',
          timer: 2000,
          timerProgressBar: true,
        }).then((_) => {
          history.push('/account/characters');
        });
      })
      .catch((err) => {
        const { data } = err.response;

        Swal.fire({
          title: 'Failed!',
          html: data.message,
          icon: 'error',
        });
      });
  });

  if (account) {
    return <Redirect to="/account/characters" />;
  }

  return (
    <Formik
      initialValues={{
        name: '',
        password: '',
      }}
      enableReinitialize={true}
      validationSchema={signInSchema}
      onSubmit={async (values) => {
        await handleSubmitSignIn(values);
      }}
    >
      {({ errors, isValid, values, initialValues, isSubmitting, touched }) => (
        <Container>
          <div className="row">
            <div className="col col-md-6 col-lg-7 hidden-sm-down">
              <h2 className="fs-xxl fw-500 mt-4 text-primary">
                If your HatiAAC Account is already connected to an
                authenticator, click on "Use Authenticator". A field will be
                displayed which allows you to provide your authenticator token
                along with your account data upon login. Otherwise, you will be
                asked for your authenticator token in the next stepaccmanage.
                <small className="h3 fw-300 mt-3 mb-5 text-primary opacity-60">
                  An authenticator is a security feature which helps to prevent
                  any unauthorised access to your Hati-Global account! You can
                  connect your account to an authenticator via your account
                  management page.
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
                <Form>
                  <div className="form-group">
                    <label className="form-label" htmlFor="accountname">
                      Account Name
                    </label>
                    <TextField
                      type="text"
                      name="name"
                      placeholder="Your account name"
                    />
                    {errors.name && touched.name && (
                      <div className="invalid-feedback">
                        <FiAlertCircle className="mr" size={14} />
                        {errors.name}
                      </div>
                    )}
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="password">
                      Password
                    </label>
                    <TextField
                      type="password"
                      name="password"
                      className="form-control"
                    />
                    {errors.password && touched.password && (
                      <div className="invalid-feedback">
                        <FiAlertCircle className="mr" size={14} />
                        {errors.password}
                      </div>
                    )}
                  </div>

                  <div className="row">
                    <div className="col-md-12 text-center my-2">
                      {!isSubmitting && !loading && (
                        <>
                          <Button
                            className="btn btn-info btn-block btn-lg waves-effect waves-themed mb-2"
                            type="submit"
                            disabled={
                              !isValid ||
                              JSON.stringify(values) ===
                                JSON.stringify(initialValues)
                            }
                          >
                            <FaSignInAlt size={20} className="mr-2" />
                            {loading ? 'Loading... ' : 'Sign-in'}
                          </Button>

                          <Link to="/forgot">
                            <button className="btn btn-danger btn-block btn-lg waves-effect waves-themed">
                              <GiPadlock size={20} /> Forgot Password
                            </button>
                          </Link>
                        </>
                      )}
                    </div>
                  </div>
                </Form>
              </div>
            </div>
          </div>
        </Container>
      )}
    </Formik>
  );
};

const mapStateToProps = (state) => {
  return {
    account: state.account.account,
  };
};

export default connect(mapStateToProps, { signIn })(SignIn);

import React, { useCallback } from 'react';
import { Redirect, useHistory } from 'react-router-dom';
import { connect } from 'react-redux';

import { Formik, Form } from 'formik';

import { signUp } from '../../actions/AccountActions';

import { TextField } from '../../components/Input/TextField';

import Container from '../Layouts/Container';
import Swal from 'sweetalert2';

import { FiAlertCircle } from 'react-icons/fi';

import { createAccountSchema } from '../../validations/createAccountSchema';

import SignUpBackground from '../../assets/img/backgrounds/pattern-1.svg';

const SignUp = ({ signUp, account }) => {
  const history = useHistory();

  const handleSubmitAccount = useCallback(async values => {
    signUp(values)
      .then(_ => {
        Swal.fire({
          title: 'Sucessfuly!',
          html: 'Account created!',
          icon: 'success',
          timer: 2000,
          timerProgressBar: true,
        }).then(_ => {
          history.push('/account/characters');
        });
      })
      .catch(err => {
        const { data } = err.response;

        Swal.fire({
          title: 'Failed!',
          html: data.message,
          icon: 'error',
        });
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (account) {
    return <Redirect to="/account/characters" />;
  }

  return (
    <Formik
      initialValues={{
        name: '',
        password: '',
        password_confirmation: '',
        email: '',
      }}
      enableReinitialize={true}
      validationSchema={createAccountSchema}
      onSubmit={async values => {
        await handleSubmitAccount(values);
      }}
    >
      {({ errors, isValid, isSubmitting, touched }) => (
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
                    Your registration is free for an unlimited time. Enjoy Hati
                    on your mobile, desktop or tablet.
                    <br />
                    You are ready to go wherever you go!
                  </small>
                </h2>
              </div>
              <div className="col-xl-6 ml-auto mr-auto">
                <div className="card p-4 rounded-plus bg-faded">
                  <div className="alert alert-primary text-dark" role="alert">
                    <strong>Heads Up!</strong> Our server-save takes place at
                    6am every day. Verification emails can be delayed by up to
                    10 minutes. Check your spam box.
                  </div>
                  <Form>
                    <div className="form-group row">
                      <label className="col-xl-12 form-label" htmlFor="name">
                        I never registered the same password used on other
                        servers! Avoid getting hacked.
                      </label>
                      <div className="col-6 pr-1">
                        <TextField
                          type="text"
                          name="name"
                          className="form-control"
                          placeholder="Enter your account name"
                        />

                        {errors.name && touched.name && (
                          <div className="invalid-feedback">
                            <FiAlertCircle className="mr" size={14} />
                            {errors.name}
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="form-group row">
                      <div className="col-6 pr-1">
                        <TextField
                          type="password"
                          name="password"
                          className="form-control"
                          placeholder="Enter your password"
                        />
                        {errors.password && touched.password && (
                          <div className="invalid-feedback">
                            <FiAlertCircle className="mr" size={14} />
                            {errors.password}
                          </div>
                        )}
                      </div>
                      <div className="col-6 pl-1">
                        <TextField
                          type="password"
                          name="password_confirmation"
                          className="form-control"
                          placeholder="Confirm password"
                        />

                        {errors.password_confirmation &&
                          touched.password_confirmation && (
                            <div className="invalid-feedback">
                              <FiAlertCircle className="mr" size={14} />
                              {errors.password_confirmation}
                            </div>
                          )}
                      </div>
                    </div>
                    <div className="form-group">
                      <label className="form-label" htmlFor="email">
                        Email will be needed for verification and account
                        recovery
                      </label>
                      <TextField
                        type="email"
                        name="email"
                        className="form-control"
                        placeholder="Enter your valid e-mail"
                      />
                      {errors.email && touched.email && (
                        <div className="invalid-feedback">
                          <FiAlertCircle className="mr" size={14} />
                          {errors.email}
                        </div>
                      )}
                    </div>

                    <div className="form-group demo">
                      <div className="custom-control custom-checkbox">
                        <input
                          type="checkbox"
                          className="custom-control-input"
                          name="isTerms"
                          id="isTerms"
                        />
                        <label
                          className="custom-control-label"
                          htmlFor="isTerms"
                        >
                          {' '}
                          I agree to terms &amp; conditions
                        </label>
                        <div className="invalid-feedback">
                          You must agree before proceeding
                        </div>
                      </div>
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
                  </Form>
                </div>
              </div>
            </div>
          </div>
        </Container>
      )}
    </Formik>
  );
};

const mapStateToProps = state => {
  return {
    account: state.account.account,
  };
};

export default connect(mapStateToProps, { signUp })(SignUp);

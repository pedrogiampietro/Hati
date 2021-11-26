import React from 'react';
import Container from '../../../Layouts/Container';
import { connect, useDispatch } from 'react-redux';
import { useLocation, Link, Redirect } from 'react-router-dom';
import { getFormData } from '../../../../helpers/FormData';
import { toast, ToastContainer } from 'react-toastify';
import { generateRk } from '../../../../actions/AccountActions';

const GenerateRecovery = () => {
  const dispatch = useDispatch();
  const [key, setKey] = React.useState('');
  let { state } = useLocation();

  const submitHandler = e => {
    e.preventDefault();
    const data = getFormData(e);

    dispatch(generateRk(data))
      .then(({ payload }) => {
        const newData = payload.data.data;
        setKey(newData.key);
        toast.success(
          'You have successfully generated your recovery key, write it down and dont miss it.'
        );
      })
      .catch(err => {
        const metadata = err.response.data.metadata;
        const message = err.response.data.message;
        const convertObjToArray = Object.entries(metadata).length;

        if (convertObjToArray === 0) {
          toast.error(message);
        } else {
          toast.error(metadata.error.name);
        }
      });
  };

  return (
    <Container>
      <div className="panel panel-default mx-auto">
        <div className="panel-heading">Recovery Key</div>
        <div className="panel-body">
          <div className="head">REQUEST RECOVERY KEY</div>
          <div className="box-content">
            Please enter your true <strong>personal details</strong> or you will
            not be able to request for a new recovery key if you lose it. Once
            your recovery key is lost you can request for a{' '}
            <strong>new one</strong> by sending scan of your ID Card to staff.
            Only if data from ID Card match data you enter here, the new
            recovery key could be generated.
            {key !== '' ? (
              <div className="alert alert-success mt-3" role="alert">
                your rk was successfully generated, please make a note
                <h3>{key}</h3>
              </div>
            ) : null}
            <form onSubmit={submitHandler}>
              <div className="container-fluid no-padding mt-3">
                <div className="col-xs-10">
                  <div className="record">
                    <div className="title">Real Name</div>
                    <input type="text" className="form-control" name="rlname" />
                  </div>

                  <div className="title">Address</div>
                  <input type="text" className="form-control" name="location" />

                  <div className="title">Your Password</div>
                  <input
                    type="password"
                    className="form-control"
                    name="password"
                  />
                </div>
              </div>
              <div className="container-fluid mt-3">
                <div className="col-sm-12 text-center">
                  {state === '0' ? (
                    <button type="submit" className="btn btn-primary m-2">
                      Submit
                    </button>
                  ) : null}

                  <Link to="/account/characters" className="btn btn-warning">
                    Back
                  </Link>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <ToastContainer className="toast-message" />
    </Container>
  );
};

const mapStateToProps = state => {
  return {};
};

export default connect(mapStateToProps, {})(GenerateRecovery);

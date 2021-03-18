import React from 'react';
import { connect } from 'react-redux';
import { toast, ToastContainer } from 'react-toastify';
import { Link, useHistory } from 'react-router-dom';
import { postProfileAvatar } from '../../../actions/AccountActions';
import Container from '../../Layouts/Container';

const ProfileAvatar = () => {
  const [image, setImage] = React.useState('');
  const [imagePreview, setImagePreview] = React.useState('');
  const history = useHistory();

  function handleSelectImages(event) {
    if (!event.target.files) {
      return;
    }

    const selectedImage = event.target.files[0];
    setImage(selectedImage);
    const preview = URL.createObjectURL(selectedImage);
    setImagePreview(preview);
  }

  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData();
    formData.append('avatar', image);
    postProfileAvatar(formData);
    toast.success('Your avatar has been successfully exchanged..');
    setTimeout(() => history.push('/account/characters'), 5000);
  }

  return (
    <Container>
      <div id="contentBody" className="col-sm-9">
        <div className="panel panel-default">
          <div className="panel-heading">Change Avatar</div>
          <div className="panel-body">
            <div className="row no-gutters">
              <div className="col-12 col-sm-6 col-md-8">
                <form onSubmit={handleSubmit}>
                  Here you can change your account's avatar by uploading an
                  image file.
                  <br />
                  Avatar rules:
                  <ul>
                    <li>The file size can not be bigger than 3 MB.</li>
                    <li>The image dimensions can't be bigger than 128x128.</li>
                    <li>The file format must be either PNG, GIF or JPEG.</li>
                  </ul>
                  <div className="form-group">
                    <input
                      type="file"
                      id="image"
                      accept="image/*"
                      className="btn btn-primary btn-sm"
                      onChange={handleSelectImages}
                    />
                  </div>
                  {image?.name?.length > 0 ? (
                    <button ctype="submit" className="btn btn-primary btn-sm">
                      Upload
                    </button>
                  ) : (
                    <button
                      ctype="submit"
                      className="btn btn-primary btn-sm disabled"
                      disabled
                    >
                      Upload
                    </button>
                  )}
                  <Link to="/account/characters">
                    {' '}
                    <button className="btn btn-dark btn-sm">Return</button>
                  </Link>
                </form>
              </div>
              <div className="col-6 col-md-4">
                <img
                  src={imagePreview}
                  className="img-thumbnail rounded-circle"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer className="toast-message" />
    </Container>
  );
};

const mapStateToProps = (state) => {
  return {
    account: state.account.account,
  };
};

export default connect(mapStateToProps, {})(ProfileAvatar);

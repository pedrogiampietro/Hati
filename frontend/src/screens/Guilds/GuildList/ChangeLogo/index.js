import React from 'react';

const ChangeLogo = ({
  submitLogoHandler,
  handleSelectImages,
  imagePreview,
  GuildLogoDefault,
}) => {
  return (
    <>
      <h3>Change Logo</h3>
      <div className="row no-gutters">
        <div className="col-12 col-sm-6 col-md-8">
          <form onSubmit={submitLogoHandler}>
            Here you can change your guild logo by uploading an image file.
            <br />
            Logo rules:
            <ul>
              <li>The file size can not be bigger than 3 MB.</li>
              <li>The image dimensions can't be bigger than 128x128.</li>
              <li>The file format must be either PNG, GIF or JPEG.</li>
            </ul>
            <div className="form-group">
              <input
                type="file"
                name="guild_logo"
                accept="image/*"
                className="btn btn-primary btn-sm"
                onChange={handleSelectImages}
              />
            </div>
            <button ctype="submit" className="btn btn-primary btn-sm">
              Upload
            </button>
          </form>
        </div>
        <div className="mx-auto">
          <img
            className="profile-image-lg"
            src={imagePreview || GuildLogoDefault}
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default ChangeLogo;

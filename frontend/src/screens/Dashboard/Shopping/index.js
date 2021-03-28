import React from 'react';
import { Link } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import { addNewOffer } from '../../../actions/ShopActions';

const Shopping = ({ shopList }) => {
  const [title, setTitle] = React.useState('');
  const [itemid, setItemid] = React.useState(0);
  const [amount, setAmount] = React.useState(0);
  const [type, setType] = React.useState(0);
  const [price, setPrice] = React.useState('');
  const [description, setDescription] = React.useState('');
  const [image, setImage] = React.useState('');
  const [imagePreview, setImagePreview] = React.useState('');

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
    formData.append('shop_title', title);
    formData.append('itemid', itemid);
    formData.append('shop_amount', amount);
    formData.append('shop_type', type);
    formData.append('shop_description', description);
    formData.append('shop_image', image);
    formData.append('coins', price);

    addNewOffer(formData);

    toast.success('you have successfully added one more item!');
  }

  return (
    <>
      <div className="row">
        <div className="col-xl-4">
          <div id="panel-1" className="panel">
            <div className="panel-hdr">
              <h2>Add new Item;</h2>
            </div>
            <div className="panel-container show">
              <div className="panel-content">
                <form onSubmit={handleSubmit}>
                  {imagePreview ? (
                    <img
                      className="profile-image-lg rounded-circle d-block"
                      src={imagePreview}
                      alt="Card Logo"
                    />
                  ) : null}
                  <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <div className="row">
                      <div className="col-sm-2">{itemid}</div>
                      <div className="col-sm-2">
                        {' '}
                        <span className="badge opacity-50 p-1 width-6 bg-primary border-primary text-white mb-2">
                          {price ? `${price} Coins ` : null}
                        </span>
                      </div>
                    </div>
                    <p className="card-text">{description}</p>
                  </div>
                  <div className="container">
                    <div className="row">
                      <div className="col">
                        {' '}
                        <input
                          type="text"
                          className="form-control mb-2"
                          placeholder="Title"
                          onChange={(e) => setTitle(e.target.value)}
                        />
                      </div>
                      <div className="col">
                        {' '}
                        <input
                          type="text"
                          className="form-control mb-2"
                          placeholder="ItemID"
                          onChange={(e) => setItemid(e.target.value)}
                        />
                      </div>
                      <div className="col">
                        <input
                          type="text"
                          className="form-control mb-2"
                          placeholder="Amount"
                          onChange={(e) => setAmount(e.target.value)}
                        />
                      </div>
                      <div className="w-100"></div>
                      <div className="col">
                        {' '}
                        <input
                          type="text"
                          className="form-control mb-2"
                          placeholder="Price"
                          onChange={(e) => setPrice(e.target.value)}
                        />
                      </div>
                      <div className="col">
                        {' '}
                        <input
                          type="text"
                          className="form-control mb-2"
                          placeholder="Description"
                          onChange={(e) => setDescription(e.target.value)}
                        />
                      </div>
                      <div className="col">
                        <select
                          className="form-control"
                          onChange={(e) => setType(e.target.value)}
                        >
                          <option value="1">Itens</option>
                          <option value="2">Itens VIP</option>
                          <option value="3">Premium Time</option>
                          <option value="4">Addons</option>
                          <option value="5">Mounts</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <input
                    type="file"
                    id="image"
                    accept="image/*"
                    className="btn btn-primary btn-sm"
                    onChange={handleSelectImages}
                  />

                  <div className="card-body">
                    <button
                      className="btn btn-primary btn-sm"
                      type="submit"
                      align="center"
                    >
                      Create
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-8">
          <div id="panel-2" className="panel">
            <div className="panel-hdr">
              <h2>ShopOffer List</h2>
            </div>
            <div className="panel-container show">
              <div className="panel-content">
                <div className="table-responsive">
                  <table className="table">
                    <thead>
                      <tr>
                        <th width="3%">ID</th>
                        <th width="20%">Title</th>
                        <th width="8%">Price</th>
                        <th width="8%">Description</th>
                        <th width="8%">Action</th>
                      </tr>
                      {shopList.map((offerList) => (
                        <tr key={offerList.id}>
                          <td>{offerList.id}</td>
                          <td>
                            <Link to="/shop/1">{offerList.shop_title}</Link>
                          </td>
                          <td>
                            <span className="badge opacity-50 p-1 width-6 bg-primary border-primary text-white">
                              {offerList.coins} Coins
                            </span>
                          </td>
                          <td>{offerList.shop_description}</td>
                          <td>Edit - Delete</td>
                        </tr>
                      ))}
                    </thead>
                  </table>
                </div>
                <div className="row justify-content-center pb-5">
                  <ul className="pagination my-4">
                    <li className="page-item">
                      <button
                        className="page-link disabled mr-3"
                        aria-label="Previous"
                        disabled
                      >
                        ‹
                      </button>
                    </li>
                    <li className="page-item">
                      <button className="page-link" aria-label="Next">
                        ›
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer className="toast-message" />
    </>
  );
};

export default Shopping;

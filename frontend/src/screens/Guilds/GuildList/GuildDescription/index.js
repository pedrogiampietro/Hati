import React from 'react';

const GuildDescription = ({ submitDescriptionHandler, guild }) => {
  return (
    <>
      <h3>Change Guild Description</h3>
      <div className="text-center mb-3">
        <form onSubmit={submitDescriptionHandler}>
          <div className="col-xl-12 ml-auto mr-auto">
            <div className="card p-4 rounded-plus bg-faded">
              <textarea
                className="form-control"
                name="description"
                cols="30"
                rows="10"
                data={guild}
              ></textarea>

              <div className="row justify-content-center pb-1">
                <div className="mx-auto">
                  <button className="btn btn-block btn-danger btn-lg mt-3 waves-effect waves-themed">
                    Update
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default GuildDescription;

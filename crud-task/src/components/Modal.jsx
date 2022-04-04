const Modal = () => {
  return (
    <div
      className="modal fade"
      id="exampleModal"
      tabIndex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">
              Edit Member
            </h5>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <form>
              <div className="form-group">
                <label htmlFor="name" className="col-form-label">
                  Name
                </label>
                <input
                  className="form-control"
                  type="text"
                  id="name"
                  placeholder="Enter name"
                />
              </div>
              <div className="form-group">
                <label htmlFor="age" className="col-form-label">
                  Age
                </label>
                <input
                  className="form-control"
                  type="text"
                  id="age"
                  placeholder="Enter age"
                />
              </div>
              <div className="form-group">
                <label htmlFor="secretIdentity" className="col-form-label">
                  Secret Identity
                </label>
                <input
                  className="form-control"
                  type="text"
                  id="secretIdentity"
                  placeholder="Enter secret identity"
                />
              </div>

              <div className="form-group">
                <label htmlFor="power" className="col-form-label">
                  Power
                </label>
                <input
                  className="form-control"
                  type="text"
                  id="power"
                  placeholder="Enter power"
                />
              </div>

              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Close
                </button>
                <button type="button" className="btn btn-primary">
                  Save changes
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;

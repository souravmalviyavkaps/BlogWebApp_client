const Details = () => {
  return (
    <>
      <header id="main-header" className="py-2 bg-primary text-white">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h1>Post One</h1>
            </div>
          </div>
        </div>
      </header>

      {/* Actions */}
      <section id="actions" className="py-4 mb-4 bg-light">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <a href="index.html" className="btn btn-light btn-block">
                <i className="fas fa-arrow-left" /> Back To Dashboard
              </a>
            </div>
            <div className="col-md-3">
              <a href="index.html" className="btn btn-success btn-block">
                <i className="fas fa-check" /> Save Changes
              </a>
            </div>
            <div className="col-md-3">
              <a href="index.html" className="btn btn-danger btn-block">
                <i className="fas fa-trash" /> Delete Post
              </a>
            </div>
          </div>
        </div>
      </section>
       {/* DETAILS */} 
      <section id="details">
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="card">
                <div className="card-header">
                  <h4>Edit Post</h4>
                </div>
                <div className="card-body">
                  <form>
                    <div className="form-group">
                      <label htmlFor="title">Title</label>
                      <input
                        type="text"
                        className="form-control"
                        defaultValue="Post One"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="category">Category</label>
                      <select className="form-control">
                        <option value="" selected="">
                          Web Development
                        </option>
                        <option value="">Tech Gadgets</option>
                        <option value="">Business</option>
                        <option value="">Health &amp; Wellness</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label htmlFor="image">Upload Image</label>
                      <div className="custom-file">
                        <input
                          type="file"
                          className="custom-file-input"
                          id="image"
                        />
                        <label htmlFor="image" className="custom-file-label">
                          Choose File
                        </label>
                      </div>
                      <small className="form-text text-muted">
                        Max Size 3mb
                      </small>
                    </div>
                    <div className="form-group">
                      <label htmlFor="body">Body</label>
                      <textarea
                        name="editor1"
                        className="form-control"
                        defaultValue={
                          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat culpa nam cumque voluptatum. Possimus recusandae porro architecto officiis illo dignissimos ratione aut officia reprehenderit! Iure cum numquam fugit doloremque quis ullam illo odit, odio voluptates non quisquam laboriosam consectetur quasi perspiciatis! Sapiente minus aperiam nobis molestias autem ut praesentium laudantium?'
                        }
                      />
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Details

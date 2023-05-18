import { useEffect, useState } from 'react'
import { fetchCategories, postBlog } from '../../api'
import { useNavigate } from 'react-router-dom'
import Cookies from 'js-cookie'

const AddPost = () => {
  const [categories, setCategories] = useState([])
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')
  const [img, setImg] = useState(null)
  const [category, setCategory] = useState('')
  const navigate = useNavigate()

  useEffect(() => {
    const getCategories = async () => {
      const data = await fetchCategories()
      console.log(data.data)
      setCategories(data.data)
    }
    getCategories()
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('called')
    console.log(title, category, body, img);
    const res = await postBlog({
      title, category, body, img
    });
    console.log(res);
    
  }

  return (
    <div className="modal fade" id="addPostModal">
      <div className="modal-dialog modal-lg">
        <div className="modal-content">
          <div className="modal-header bg-primary text-white">
            <h5 className="modal-title">Add Post</h5>
            <button className="close" data-dismiss="modal">
              <span>×</span>
            </button>
          </div>
          <div className="modal-body">
            <form>
            <div className="form-group">
                <label htmlFor="title">Title</label>
                <input
                  type="text"
                  className="form-control"
                  onChange={e => setTitle(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="category">Category</label>
                <select
                  className="form-control"
                  onChange={e => setCategory(e.target.value)}>
                  {categories.map(category => {
                    return (
                      <option value={category._id}>
                        {category.catName}
                      </option>
                    )
                  })}
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="image">Upload Image</label>
                <div className="custom-file">
                  <input
                    type="file"
                    className="custom-file-input"
                    id="image"
                    onChange={e => setImg(e.target.files[0])}
                  />
                  <label htmlFor="image" className="custom-file-label">
                    Choose File
                  </label>
                </div>
                <small className="form-text text-muted">Max Size 1mb</small>
              </div>
              <div className="form-group">
                <label htmlFor="body">Body</label>
                <textarea
                  name="editor1"
                  className="form-control"
                  defaultValue={''}
                  onChange={e => setBody(e.target.value)}
                />
              </div>
              <div className="modal-footer">
                <button
                  className="btn btn-primary"
                  data-dismiss="modal"
                  type="submit"
                  onClick={handleSubmit}
                >
                  Post Blog
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AddPost

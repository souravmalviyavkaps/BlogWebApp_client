import { useEffect, useState } from 'react'
import { getBlogById, fetchCategories, updateBlog, deleteBlog } from '../api'
import { Link, useNavigate, useParams } from 'react-router-dom'
import Cookies from 'js-cookie'
import { toast } from 'react-toastify'
let user

if (Cookies.get('user')) {
  user = JSON.parse(Cookies.get('user'))
}

const BlogDetails = () => {
  const { id } = useParams()

  const [blog, setBlog] = useState({})
  const [categories, setCategories] = useState([])
  const navigate = useNavigate()
  //form change
  const [title, setTitle] = useState('')
  const [category, setCategory] = useState('')
  const [img, setImg] = useState(null)
  const [body, setBody] = useState('')

  useEffect(() => {
    console.log(id)
    const fetchBlogById = async id => {
      const res = await getBlogById(id)
      setBlog(res.data.data)
      console.log(res.data)

      setTitle(res.data.data.title)
      setCategory(res.data.data.category)
      setImg(res.data.data.img)
      setBody(res.data.data.body)
    }
    fetchBlogById(id)

    const getAllCategories = async () => {
      const res = await fetchCategories()
      setCategories(res.data)
      console.log('category :  ', res.data)
    }
    getAllCategories()
  }, [blog]);

  const handleChange = async e => {
    e.preventDefault()
    // console.log(title, body, img, category)
    const id = blog._id
    const dataToUpdate = {
      title,
      body,
      img,
      category,
    }

    const res = await updateBlog(id, dataToUpdate)
    console.log('Blog update status : ', res)
  }

  const handleDelete = async e => {
    e.preventDefault()
    const id = blog._id
    const res = await deleteBlog(id)

    if (res.data.success) {
      toast.success(res.message, {
        position: toast.POSITION.TOP_RIGHT,
      })
    } else {
      toast.error(res.message, {
        position: toast.POSITION.TOP_RIGHT,
      })
    }

    if (user.role == 'admin') navigate('/admin')
    else navigate('/')
  }

  return (
    <>
      <header id="main-header" className="py-2 bg-primary text-white">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h1>{blog.title}</h1>
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
              <Link
                to="#"
                onClick={handleChange}
                className="btn btn-success btn-block">
                <i className="fas fa-check" /> Save Changes
              </Link>
            </div>
            {user && blog.user === user._id || user.role === 'admin' ? (
              <div className="col-md-3">
                <Link
                  to="#"
                  className="btn btn-danger btn-block"
                  onClick={handleDelete}>
                  <i className="fas fa-trash" /> Delete Post
                </Link>
              </div>
            ) : (
              ''
            )}
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
                        defaultValue={blog.title}
                        name="title"
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
                            <>
                              <option
                                value={category._id}
                                selected={
                                  category._id == blog.category
                                    ? 'true'
                                    : 'false'
                                }>
                                {category.catName}
                              </option>
                            </>
                          )
                        })}
                      </select>
                    </div>
                    <div className="form-group">
                      <img
                        src={'http://localhost:8002/' + blog.img}
                        width={300}
                        height={250}></img>
                      <label htmlFor="image">Change Image</label>
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
                      <small className="form-text text-muted">
                        Max Size 3mb
                      </small>
                    </div>
                    <div className="form-group">
                      <label htmlFor="body">Body</label>
                      <textarea
                        name="editor1"
                        className="form-control"
                        defaultValue={blog.body}
                        onChange={e => setBody(e.target.value)}
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

export default BlogDetails

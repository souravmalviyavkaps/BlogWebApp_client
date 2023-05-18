import Cookies from 'js-cookie'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { fetchBlogs } from '../api'

// THIS PAGE WILL BE VISIBLE TO ONLY ADMIN

const Blogs = () => {
  const navigate = useNavigate()
  const [blogs, setBlogs] = useState([])

  useEffect(() => {
    if (!Cookies.get('token')) {
      navigate('/login')
    }

    const getAllBlogs = async () => {
      const res = await fetchBlogs(10)
      setBlogs(res.data.data)
      console.log('Blogs list : ', blogs)
    }
    getAllBlogs()
  }, [])

  return (
    <div>
      <div className="card">
        <div className="card-header">
          <h4>Latest Posts</h4>
        </div>
        <table className="table table-striped">
          <thead className="thead-dark">
            <tr>
              <th>#</th>
              <th>Title</th>
              <th>Category</th>
              <th>Date</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {blogs.map((blog, index) => {
              return (
                <>
                  <tr>
                    <td>{index + 1}</td>
                    <td>{blog.title}</td>
                    <td>{blog.category.catName}</td>
                    <td>
                      {new Date(blog.createdAt).toLocaleDateString('en-US', {
                        day: 'numeric',
                        month: 'long',
                        year: 'numeric',
                      })}
                    </td>
                    <td>
                      <Link to="/details" className="btn btn-secondary">
                        <i className="fas fa-angle-double-right" /> Details
                      </Link>
                    </td>
                    <td>
                      <Link
                        to={'/blogs/view-details/'+blog._id}
                        className="btn btn-secondary">
                        <i className="fas fa-angle-double-right" /> Edit
                      </Link>
                    </td>
                  </tr>
                </>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Blogs

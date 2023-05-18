import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { AddCategory, AddPost, AddUser } from './AllModals'
import { fetchBlogs, fetchCategories, fetchUsers } from '../api'
import { useNavigate } from 'react-router-dom'
import Cookies from 'js-cookie';



import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import UsersList from './UsersList'

const AdminHome = () => {
  const [blogs, setBlogs] = useState([])
  const [categories, setCategories] = useState([])
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if(! Cookies.get('token')){
      navigate('/login');
    }

    const getAllBlogs = async () => {
      const res = await fetchBlogs(5)
      if (res.success) {
        setBlogs(res.data.data)
        console.log("Blogs list : " , blogs)
      } else {
        toast.error(res.message, {
          position: toast.POSITION.TOP_CENTER,
        })
      }
    }
    getAllBlogs()

    const getCategories = async () => {
      const data = await fetchCategories()
      console.log("Category list : ", data.data)
      setCategories(data.data)
    }
    getCategories()

    const getAllUsers = async ()=> {
      const data = await fetchUsers();
      console.log('Users list : ' ,data.data);
      setUsers(data.data)
    }
    getAllUsers();

  }, [])

  return (
    <>
      {/* HEADER */}
      <header id="main-header" className="py-2 bg-primary text-white">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h1>
                <i className="fas fa-cog" /> Dashboard
              </h1>
            </div>
          </div>
        </div>
      </header>

      

      {/*-default- ACTIONS --*/}

      <section id="actions" className="py-4 mb-4 bg-light">
  <ToastContainer />

        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <Link
                to="#"
                className="btn btn-primary btn-block"
                data-toggle="modal"
                data-target="#addPostModal">
                <i className="fas fa-plus" /> Add Blog
              </Link>
            </div>
            <div className="col-md-3">
              <Link
                to="#"
                className="btn btn-success btn-block"
                data-toggle="modal"
                data-target="#addCategoryModal">
                <i className="fas fa-plus" /> Add Category
              </Link>
            </div>
            <div className="col-md-3">
              <Link
                to="#"
                className="btn btn-warning btn-block"
                data-toggle="modal"
                data-target="#addUserModal">
                <i className="fas fa-plus" /> Add User
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* POSTS */}
      <section id="posts">
        <div className="container">
          <div className="row">
            <div className="col-md-9">
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
                            <td>{index+1}</td>
                            <td>{blog.title}</td>
                            <td>{blog.category.catName}</td>
                            <td>{new Date((blog.createdAt)).toLocaleDateString("en-US", {day: 'numeric', month: 'long', year: 'numeric'})}</td>
                            <td>
                              <Link to={`/blogs/view-details/${blog._id}`} className="btn btn-secondary">
                                <i className="fas fa-angle-double-right" />{' '}
                                Details
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
            <div className="col-md-3">
              <div className="card text-center bg-primary text-white mb-3">
                <div className="card-body">
                  <h3>Blogs</h3>
                  <h4 className="display-4">
                    <i className="fas fa-pencil-alt" /> {blogs.length}
                  </h4>
                  <Link to="/posts" className="btn btn-outline-light btn-sm">
                    View
                  </Link>
                </div>
              </div>
              <div className="card text-center bg-success text-white mb-3">
                <div className="card-body">
                  <h3>Categories</h3>
                  <h4 className="display-4">
                    <i className="fas fa-folder" /> {categories.length}
                  </h4>
                  <Link
                    to="/categories"
                    className="btn btn-outline-light btn-sm">
                    View
                  </Link>
                </div>
              </div>
              <div className="card text-center bg-warning text-white mb-3">
                <div className="card-body">
                  <h3>Users</h3>
                  <h4 className="display-4">
                    <i className="fas fa-users" /> {users.length}
                  </h4>
                  <Link
                    to="/admin/users-list"
                    className="btn btn-outline-light btn-sm">
                    View
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modals */}
      <AddCategory />
      <AddUser />
      <AddPost />

      
    </>
  )
}

export default AdminHome;

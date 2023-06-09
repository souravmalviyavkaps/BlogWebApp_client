import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import {fetchCategoryById} from '../api'
import Cookies from "js-cookie";

const CategoryDetail = ()=>{

    let user;
    if(Cookies.get('user')){
      user = JSON.parse(Cookies.get('user'));
    }

    const {categoryId} = useParams();
    console.log("Hellos", categoryId)

    const [blogs, setBlogs] = useState([])
    useEffect(()=>{
        const getCategoryById = async(id)=> {
            const res = await fetchCategoryById(id)
            console.log(res.data)
            setBlogs(res.data.blogs);
        }
        getCategoryById(categoryId);
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
                      <Link to={"/blogs/view-details/"+blog._id} className="btn btn-secondary">
                        <i className="fas fa-angle-double-right" /> Details
                      </Link>
                    </td>
                    <td>
                      
                      {
                        user.role == 'admin' || user._id == blog._id ? 
                        <Link
                          to={`/blogs/edit-details/${blog._id}`}
                          className="btn btn-secondary">
                          <i className="fas fa-angle-double-right" /> Edit
                        </Link>
                        : ""
                      }
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

export default CategoryDetail;
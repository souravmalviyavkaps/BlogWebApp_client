import { useEffect, useState } from 'react';
import {fetchCategories} from '../api';
import { Link } from 'react-router-dom';

const Categories = () => {

  const [categories, setCategories] = useState([]);

  useEffect(()=>{
    const getAllCategories = async ()=>{
      const res = await fetchCategories();
      console.log("Categories : ", res.data);
      setCategories(res.data);
    }
    getAllCategories();
  }, [])

  return (
    <>
      <header id="main-header" className="py-2 bg-success text-white">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h1>
                <i className="fas fa-folder" /> Categories
              </h1>
            </div>
          </div>
        </div>
      </header>
      <section id="search" className="py-4 mb-4 bg-light">
        <div className="container">
          <div className="row">
            <div className="col-md-6 ml-auto">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search Categories..."
                />
                <div className="input-group-append">
                  <button className="btn btn-success">Search</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="categories">
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="card">
                <div className="card-header">
                  <h4>Latest Categories</h4>
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
                    {categories.map((category, index)=>
                      {
                        return (
                          <>
                            <tr>
                              <td>{index+1}</td>
                              <td>{category.catName}</td>
                              <td>{new Date((category.createdAt)).toLocaleDateString("en-US", {day: 'numeric', month: 'long', year: 'numeric'})}</td>
                              <td>
                                <Link to={`/categories/view-details/${category._id}`} className="btn btn-secondary" >
                                  <i className="fas fa-angle-double-right" /> Details
                                </Link>
                              </td>
                            </tr>
                          </>
                        )
                      })
                    }
                    
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}


export default Categories;
import { useEffect, useState } from 'react'
import { fetchUsers } from '../api'

const UsersList = () => {
  const [users, setUsers] = useState([])
  useEffect(() => {
    const getAllUsers = async () => {
      const data = await fetchUsers()
      console.log('Users list : ', data.data)
      setUsers(data.data)
    }
    getAllUsers()
  }, [])

  return (
    <>
      <>
        {/* HEADER */}
        <header id="main-header" className="py-2 bg-warning text-white">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <h1>
                  <i className="fas fa-users" /> Users
                </h1>
              </div>
            </div>
          </div>
        </header>
        {/* SEARCH */}
        <section id="search" className="py-4 mb-4 bg-light">
          <div className="container">
            <div className="row">
              <div className="col-md-6 ml-auto">
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Search Users..."
                  />
                  <div className="input-group-append">
                    <button className="btn btn-warning">Search</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* USERS */}
        <section id="users">
          <div className="container">
            <div className="row">
              <div className="col">
                <div className="card">
                  <div className="card-header">
                    <h4>Latest Users</h4>
                  </div>
                  <table className="table table-striped">
                    <thead className="thead-dark">
                      <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th />
                      </tr>
                    </thead>
                    <tbody>
                        {users.map((user, index)=>{
                            <tr>
                            <td>{index}</td>
                            <td>{user.fname + " " + user.lname}</td>
                            <td>jdoe@gmail.com</td>
                            <td>
                              <a href="details.html" className="btn btn-secondary">
                                <i className="fas fa-angle-double-right" /> Details
                              </a>
                            </td>
                          </tr>
                        })}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    </>
  )
}

export default UsersList

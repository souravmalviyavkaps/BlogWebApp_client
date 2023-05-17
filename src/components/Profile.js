import { Link } from 'react-router-dom';
import Cookies from 'js-cookie';
import { useState } from 'react';
import {updateProfile} from '../api'

const AdminProfile = () => {

  const user = JSON.parse(Cookies.get('user'));
  console.log(user)

  const [fullname, setFullName] = useState("");
  const [bio, setBio] = useState("");
  const [email, setEmail] = useState("");
  const [avatar, setAvatar] = useState(null);

  const handleDetailsChange = async (e)=>{
    e.preventDefault();
    const body = {
      fname: fullname.split(' ')[0],
      lname: fullname.split(' ')[1],
      email: email,
      bio: bio
    }
    // console.log(body)
    const res = await updateProfile(body);
    if(res.data.success){
      console.log("Profile updated successfully : ", res.message);

    }


  }



  return (
    <>
      {/* HEADER */}
      <header id="main-header" className="py-2 bg-primary text-white">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h1>
                <i className="fas fa-user" /> Edit Profile
              </h1>
            </div>
          </div>
        </div>
      </header>
      {/* ACTIONS */}
      <section id="actions" className="py-4 mb-4 bg-light">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <a href="index.html" className="btn btn-light btn-block">
                <i className="fas fa-arrow-left" /> Back To Dashboard
              </a>
            </div>
            <div className="col-md-3">
              <Link to="#" className="btn btn-success btn-block">
                <i className="fas fa-lock" /> Change Password
              </Link>
            </div>
            <div className="col-md-3">
              <Link to="#" className="btn btn-danger btn-block">
                <i className="fas fa-trash" /> Delete Account
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* PROFILE */}
      <section id="profile">
        <div className="container">
          <div className="row">
            <div className="col-md-9">
              <div className="card">
                <div className="card-header">
                  <h4>Edit Profile</h4>
                </div>
                <div className="card-body">
                  <form onSubmit={handleDetailsChange}>
                    <div className="form-group">
                      <label htmlFor="name">Name</label>
                      <input
                        type="text"
                        className="form-control"
                        name='fullname'
                        defaultValue={user.fname + " " + user.lname}
                        onChange={(e)=> setFullName(e.target.value)}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="email">Email</label>
                      <input
                        type="email"
                        className="form-control"
                        defaultValue={user.email}
                        onChange={(e)=> setEmail(e.target.value)}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="bio">Bio</label>
                      <textarea
                        className="form-control"
                        name="bio"
                        defaultValue={
                          user.bio
                        }
                        onChange={(e)=> setBio(e.target.value)}
                      />
                    </div>

                    <input type="submit" value="Save Changes" className='btn-primary'/>
                  </form>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <h3>Your Avatar</h3>
              
              <img
                src={"http://localhost:8002/"+user.avatar}
                alt=""
                className="d-block img-fluid mb-3"
              />
              <button className="btn btn-primary btn-block">Edit Image</button>
              <button className="btn btn-danger btn-block">Delete Image</button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default AdminProfile

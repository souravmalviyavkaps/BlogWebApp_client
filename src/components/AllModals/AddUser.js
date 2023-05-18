import { useState } from "react"
import { addUser } from "../../api";

const AddUser = () => {

  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirm_password, setConfirmPassword] = useState('')

  const handleSubmit = async () => {
    const body = {
      fname: fullName.split(' ')[0],
      lname: fullName.split(' ')[1],
      email,
      password,
      confirm_password
    }

    const res = await addUser(body);
    console.log(res);
  }

  return (
    <div className="modal fade" id="addUserModal">
      <div className="modal-dialog modal-lg">
        <div className="modal-content">
          <div className="modal-header bg-warning text-white">
            <h5 className="modal-title">Add User</h5>
            <button className="close" data-dismiss="modal">
              <span>×</span>
            </button>
          </div>
          <div className="modal-body">
            <form>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" className="form-control" onChange={(e)=> setFullName(e.target.value)}/>
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" className="form-control" onChange={(e)=> setEmail(e.target.value)}/>
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input type="password" className="form-control" onChange={(e)=> setPassword(e.target.value)}/>
              </div>
              <div className="form-group">
                <label htmlFor="password2">Confirm Password</label>
                <input type="password" className="form-control" onChange={(e)=> setConfirmPassword(e.target.value)}/>
              </div>
            </form>
          </div>
          <div className="modal-footer">
            <button className="btn btn-warning" data-dismiss="modal" onClick={handleSubmit}>
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}



export default AddUser;

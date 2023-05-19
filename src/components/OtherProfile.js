import { Link, useParams } from 'react-router-dom';
import Cookies from 'js-cookie';
import { useEffect, useState } from 'react';
import {getUserById} from '../api'
import 'react-toastify/dist/ReactToastify.css'
import {updateUserById} from '../api'

const OtherProfile = () => {

    const {id} = useParams();
    const [thisUser,setThisUser] = useState({});
    const [user, setUser] = useState({});
    const[fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');

    useEffect(()=> {
        
        
        const userData = JSON.parse(Cookies.get('user'));
        console.log(userData)
        setThisUser(userData);
        
        const fetchUserById = async (id)=> {
            const res = await getUserById(id);
            console.log(res.data.data)
            setUser(res.data.data)

            setEmail(res.data.data.email);
            setFullName(res.data.data.fname + ' ' + res.data.data.lname);
        }
        fetchUserById(id);

    }, [])

    const handleChange = async (e)=>{
        e.preventDefault();
        const body = {
            fname: fullName.split(' ')[0],
            lname: fullName.split(' ')[1],
            email
        }
        const res = await updateUserById(id, body);
        console.log(res.data);
    }

  return (
    <>

    {/* this code will only work for admin */}
    {thisUser && thisUser.role == 'admin' ? 
        <form onSubmit={handleChange} style={{border: '3px solid darkgrey', padding: 5, width: '70vw', margin: 'auto'}}>
            <label htmlFor="fullname">Fullname</label>
            <input type="text" id='fullname' name='fullname' defaultValue= {fullName} onChange={(e)=> setFullName(e.target.value)}/>
            
            <label htmlFor="email">Email</label>
            <input type="email" id='email' name='email' defaultValue={email} onChange={(e)=> setEmail(e.target.value)}/>

            <input type="submit" value="Update" />
        </form>
     : ''}

      <section id="profile">
        <div>
            <p>
                {user.fname} {user.lname}
            </p>
            <p>
                {user.email}
            </p>
            <p>
                {user.bio}
            </p>
        </div>
      </section>
    </>
  )
}

export default OtherProfile

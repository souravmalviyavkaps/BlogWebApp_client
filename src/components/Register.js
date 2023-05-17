import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { register } from "../api";

const Register = () =>{
    const navigate = useNavigate();

    useEffect(()=>{
        if(localStorage.getItem('token')){
            navigate('/');
        }
    })

    const handleSubmit = async (e)=>{
        e.preventDefault();
        const userData = {
            fname,
            lname,
            email,
            phone,
            bio,
            password,
            confirm_password
        }



        const response = await register(userData);
        
        if(response.success){
            navigate('/login');
        }else{
            alert(response.message);
        }
    }
    
    const [fname, setFname] = useState('');
    const [lname, setLname] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [confirm_password, setConfirmPassword] = useState('');
    const [bio, setBio] = useState('');



    return (
        <>
            <form onSubmit={handleSubmit} style={styles.form}>
                <h1 style={{color: 'darkgrey', textAlign: 'center', fontWeight: 'bold'}}> Register  </h1>
                <input type='text' name='fname' onChange={(e)=>setFname(e.target.value)} placeholder="Enter first name" required/>
                <input type="text" name='lname' onChange={(e)=>setLname(e.target.value)} placeholder="Enter last name" required/>
                <input type="email" name='email' onChange={(e)=>setEmail(e.target.value)} placeholder="Enter email" required/>
                <input type="text" name='phone' onChange={(e)=>setPhone(e.target.value)} placeholder="Enter phone" required/>
                <input type="password" name='password' onChange={(e)=>setPassword(e.target.value)} placeholder="Enter password" required/>
                <input type="text" name='confirm_password' onChange={(e)=>setConfirmPassword(e.target.value)} placeholder="Confirm password" required/>

                <textarea name="bio" id="bio" cols="30" rows="10" required placeholder="Write you bio here ......" onChange={(e)=>{setBio(e.target.value)}}></textarea>

                <input type="submit" value="Register" style={styles.submitBtn}/>


                <h5 style={{textAlign: 'center'}}>Already Registerd? 
                    <Link to='/login'> Login here</Link>
                </h5>
            </form>
        </>
    )
}

const styles =  {
    form: {
        width: '70%',
        margin: 'auto',
        border: '3px solid purple',
        borderRadius: 20,
        padding: 10
    },
    submitBtn: {
        backgroundColor: 'darkgrey',
        color: 'white',
        fontSize: 22,
        fontWeight: 'bold'
    }
}

export default Register;
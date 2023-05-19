import { useEffect, useState } from 'react';
import { login } from '../api';
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useNavigate } from 'react-router-dom';
import jwtDecode from 'jwt-decode';
import { Link } from 'react-router-dom';
import Cookies from 'js-cookie';

const Login = ()=>{
    const navigate = useNavigate();
    const [loggingIn, setLoggingIn] = useState(false);
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    useEffect(()=>{
        if(Cookies.get('user')){
            const user = JSON.parse(Cookies.get('user'));
            if(user.role == 'admin'){
                navigate('/admin')
            }
            navigate('/')
        }
    }, [])

    const handleSubmit = async (e)=>{
        e.preventDefault();

        if(!email || !password){
            toast.error('Enter both email and password', {
                position: toast.POSITION.TOP_RIGHT,
                autoClose: 10
            })
            return;
        }
        setLoggingIn(true);

        const res = await login({email, password});
        console.log(res)
        if(res.success){
            // console.log(res);
            const token = res.data.data.token;
            const user = res.data.data.user
            console.log("user", user)
            const expires = jwtDecode(token);
            // console.log(expires)
            document.cookie = 'token='+token+';expires='+expires.exp;
            document.cookie = 'user='+JSON.stringify(user)+';expires='+expires.exp;
            if(user.role == 'admin'){
                navigate('/admin')
            }
            else{
                navigate('/');                
            } 

        }else{
            toast.error(res.message)
        }

    }

    return (
        <>
            <ToastContainer/>
            <div>
                <h1>Login Form</h1>
                <form onSubmit={handleSubmit}>
                    <input type="text" name="email" id="email" onChange={(e)=>setEmail(e.target.value)}/>
                    <input type="password" name="password" id="password" onChange={(e)=>setPassword(e.target.value)}/>
                    <button disabled={loggingIn}> {loggingIn ? 'Logging in...' : 'Login'}  </button>
                </form>

                <h4>New User? <Link to='/register'>Register</Link> </h4>
            </div>
            

        </>
    )
}




export default Login;
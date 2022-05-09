// import { Button, Inpui } from '@mui/material';
import axios from 'axios';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


function Login() {
  let navigate = useNavigate();
    const [dataLogin, setDataLogin] = React.useState({
        email: "",
        password: ""
    });
    
  //   useEffect(() => {
  //     if(localStorage.getItem('token')){
  //       navigate("/")
  //     }
  //  }, [])

    const createDataUser = async (dataLogin) => {
        try {
          const res = await axios({
            method: 'POST',
            url: 'https://reqres.in/api/login',
            data: dataLogin
          })
          console.log(res)
          if(res.status === 200){
            localStorage.setItem("token", res.data.token)
          }
          navigate("/")
        } catch (error){
          console.log(error);
        }
    }

    return (
        <div>
            <input type="email" placeholder='email' onChange={(e) => {
                setDataLogin({
                    ...dataLogin,
                    email: e.target.value
                })
            }}/>
            <br />
            <input type="password" placeholder='password' onChange={(e) => {
                setDataLogin({
                    ...dataLogin,
                    password: e.target.value
                })
            }}/>
            <br />
            <button type='submit' color='primary' variant='contained' onClick={() => {
                console.log(dataLogin)
                createDataUser(dataLogin)
                
            }}>Login</button>

            <br />
            <button color='primary' variant='contained' onClick={() => {
              navigate('/register')
            }}>Register</button>
            
        </div>
    );
}

export default Login;

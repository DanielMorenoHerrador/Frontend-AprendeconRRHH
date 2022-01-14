
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import {connect} from 'react-redux';
import { LOGIN } from '../../redux/types';
import './Login.css';


const Login = (props) => {

    const history = useNavigate();

    //Hooks
    const [msgError, setmsgError] = useState("");
    const [credentials, setCredentials] = useState({ email: '', password: '' });

    //Handler o manejador
    const manejadorInputs = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
    }

    useEffect (()=>{
        console.log(credentials)
    },[credentials])

    const logme = async () => {


        let body = {
            email: credentials.email,
            password: credentials.password
        };

        try {

            let res = await axios.post("https://aprendeconrrhh.herokuapp.com/users/signin", body);
            setmsgError(`Hola de nuevo ${res.data.user.name}`);

            //Guardar en redux
            let datos =res.data;
            props.dispatch({type:LOGIN,payload:datos})

            setTimeout(() => {
                history("/profile");
            }, 2000);


        } catch (error) {
            console.log(error);

        }

    }


    return (

        <div className="designLogin">
            {/*<pre>{JSON.stringify(credentials, null,2)}</pre>*/}
            <input type='email' name='email' title='correo' onChange={manejadorInputs} lenght='30' placeholder='Email' />
            <input type='password' name='password' title='clave' onChange={manejadorInputs} lenght='30' placeholder='Password' />
            <div className="sendButton" onClick={() => logme()}>Login</div>
            <div className="error">{msgError}</div>
        </div>
    )
};

export default connect()(Login);
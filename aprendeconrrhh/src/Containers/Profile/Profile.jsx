import { useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import './Profile.css';
import { LOGOUT, UPDATE_USER } from '../../redux/types';

const Profile = (props) => {

    const history = useNavigate();

    //Hook para los input
    const [userData, setUserData] = useState(props.credentials.user);


    //Funcion para manejar el estado de los input
    const manejaInputs = (e) => {
        setUserData({ ...userData, [e.target.name]: e.target.value });
    }

    //Funcion para hacer la actualizacion de los datos
    const update = async () => {
        props.dispatch({ type: UPDATE_USER, payload: userData });
    }
    //Funcion para que limpie los datos de perfil de redux y asi deslogearse
    const logOut = () => {
        props.dispatch({ type: LOGOUT });
        history("/");
    }


    useEffect(() => {
        setUserData(props.credentials.user);
    }, [props.credentials]);


    if (props.credentials?.token !== '') {
        return (
            console.log("Estas en perfil"),
            <div className="designProfileone">
                <div className="botoneslogoutupdate">
                    <div className="logOut" onClick={() => logOut()}>LOGOUT</div>
                    <div className="update" onClick={() => update()}>UPDATE</div>
                </div>
                <div className="user"><input value={userData?.name || false} name="name" onChange={manejaInputs} /></div>
                <div className="user"><input value={userData?.city || false} name="city" onChange={manejaInputs} /></div>
                <div className="user"><input value={userData?.email || false} name="email" onChange={manejaInputs} /></div>
                <div className="user"><input value={userData?.phone || false} name="phone" onChange={manejaInputs} /></div>
                <div className="user"><input value={userData?.adress || false} name="adress" onChange={manejaInputs} /></div>
                </div>
        )

    } else {
        return (
            <div className="designProfiletwo">
                SHHHH....ES UN SECRETO....LOGEATE....
            </div>
        )
    }

};

export default connect((state) => ({
    credentials: state.credentials
}))(Profile);
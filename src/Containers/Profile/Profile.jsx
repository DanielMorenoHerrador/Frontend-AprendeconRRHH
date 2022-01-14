import { useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import './Profile.css';
import { LOGOUT, UPDATE_USER } from '../../redux/types';
import axios from 'axios';

const Profile = (props) => {

    const history = useNavigate();

    let token = {
        headers: { Authorization: `Bearer ${props.credentials.token}` },
    };

    //Hook para los input
    const [user, setUsers] = useState(props.credentials.user);
    const [msgError, setmsgError] = useState("");
    const [order, setOrders] = useState([]);


    //Funcion para manejar el estado de los input
    const manejaInputs = (e) => {
        setUsers({ ...user, [e.target.name]: e.target.value });
    }

    const getorders = async () => {
        const body = {
            userId: user.id,
        };

        try {
            const res = await axios.get(
                "https://aprendeconrrhh.herokuapp.com/orders/getByUserId",
                body,
                token
            );
            if (res.data.length === 0) {
                setmsgError(`NO SE HA ENCONTRADO NINGÚN PEDIDO`);
            } else {
                setOrders(res.data);
                console.log(res.data);
            }
        } catch (error) {
            setmsgError("NO SE HA ENCONTRADO NINGÚN PEDIDO");
        }
    };

    //Funcion para hacer la actualizacion de los datos
    const update = async () => {
        let body = {
            name: user.name,
            city: user.city,
            email: user.email,
            phone: user.phone,
            adress: user.adress,
        };

        try {
            const res = await axios.put(
                "https://aprendeconrrhh.herokuapp.com/users/update",
                body
            );
            console.log(body);
            setmsgError(res.data.message);
            setTimeout(() => {
                props.dispatch({ type: UPDATE_USER, payload: user });
                history("/profile");
            }, 1000);
        } catch (error) {
            setmsgError("No se actualizaron los datos");
            console.log(body);
            console.log(setmsgError);
            return;
        }
    };


    //Funcion para que limpie los datos de perfil de redux y asi deslogearse
    const logOut = () => {
        props.dispatch({ type: LOGOUT });
        history("/");
    }

    

    useEffect(() => {
        setUsers(props.credentials.user);
        getorders();
    }, [props.credentials]);

    if (props.credentials?.token !== '') {
        return (
            console.log("Estas en perfil"),
            <div className="designProfileone">
                <div className="user"><input value={user?.name || false} name="name" onChange={manejaInputs} /></div>
                <div className="user"><input value={user?.city || false} name="city" onChange={manejaInputs} /></div>
                <div className="user"><input value={user?.email || false} name="email" onChange={manejaInputs} /></div>
                <div className="user"><input value={user?.phone || false} name="phone" onChange={manejaInputs} /></div>
                <div className="user"><input value={user?.adress || false} name="adress" onChange={manejaInputs} /></div>
                <div className="botoneslogoutupdate">
                    <div className="sendButton" onClick={() => logOut()}>LOGOUT</div>
                    <div className="sendButton" onClick={() => update()}>UPDATE</div>
                </div>
                <div className="containerorders">
                    <h2>SERVICIOS CONTRATADOS</h2>
                    <div className="orders">
                    {order.map((order) => {
                return (
                    <div key={order.id} className="detail">
                        <h4>Numero de order: {order.id}</h4>
                        <p>User ID: {order.userId}</p>
                        <p>Service ID: {order.serviceId}</p>
                        <p>Fecha de alquiler: {order.rentDate}</p>
                    </div>
                );}
        )
        
    }
                    </div>
                </div>
            </div>
        )

    } else {
        return (
            <div className="designProfiletwo">
                Logeate primero...
            </div>
        )
    }

};

export default connect((state) => ({
    credentials: state.credentials
}))(Profile);
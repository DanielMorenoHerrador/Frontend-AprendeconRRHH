
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { ORDER } from '../../redux/types';
import './Profileservices.css';

const Profileservices = (props) => {

    let token = {
        headers: { Authorization: `Bearer ${props.credentials.token}` },
    };

    const history = useNavigate();


    useEffect(() => {

    },);

    useEffect(() => {
    }, []);
    //Hooks

    const [service, setService] = useState(JSON.parse(localStorage.getItem("findService")));
    const [order, setOrder] = useState([]);
    const [user, setUser] = useState([props.credentials.user]);
    const [msgError, setmsgError] = useState("");


    //crear nuevo pedido    
    const ordered = async () => {
        let body = {
            userId: props.credentials.user.id,
            serviceId: service.id,
            rentDate: new Date(),
            returnDate: new Date()
        }

        //Conexion a axios y envio de datos
        try {

            let res = await axios.post("https://aprendeconrrhh.herokuapp.com/orders", body, token);
            console.log("Pedido realizado");
            props.dispatch({ type: ORDER, payload:res.data });
            ;
            
            setTimeout(() => {
                history("/profile");
            }, 2000);
            
            
            
        } catch (error) {
            console.log('No se ha creado el pedido, no estas logeado')
            console.log(error)
        }
    }



    return (
        <div className='designprofserv'>
            <div className="profileservice">
                <div className="nameservice"><h1>{service.name}</h1></div>
                <div className="descriptionservice"><p>{service.description}</p></div>
                <div className="priceservice"><h1>{service.price}€</h1></div>
                <button className="botonalqui" onClick={() => ordered()}>CONTRATAR SERVICIO</button>
            </div>
        </div>
    )

}

export default connect((state) => ({
    service: state.service,
    credentials: state.credentials,
}))(Profileservices);
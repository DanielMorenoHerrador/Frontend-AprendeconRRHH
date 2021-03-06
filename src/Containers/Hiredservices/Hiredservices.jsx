
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import loading from '../../Assets/loading.gif';
import './Hiredservices.css';



const Orders = (props) => {

    //HOOKS
    const [order, setOrders] = useState([]);
    const [msgError, setmsgError] = useState("");

    let token = {
        headers: { Authorization: `Bearer ${props.credentials?.token}` },
    };

    useEffect(() => {

        setTimeout(() => {

            bringOrders();
        }, 2000);

    }, []);

    useEffect(() => {

    });

    const bringOrders = async () => {
        try {
            let res = await axios.get("https://aprendeconrrhh.herokuapp.com/orders", token);
                setOrders(res.data);
        } catch (error) {
            setmsgError("No se ha podido traer los orders");
        }
    };

    
    if (order[1]?.userId) {
        return (
        <div className="designorder">
            {order.map((order) => {
                return (
                    <div key={order.id} className="orderscontainer">
                        <h4>Numero de order: {order.id}</h4>
                        <p>User ID: {order.userId}</p>
                        <p>Service ID: {order.serviceId}</p>
                        <p>Fecha de alquiler: {order.rentDate}</p>
                    </div>
                );}
        )
        
    } </div>
        )}  else {

        return (
            <div>
                <img alt='loading' className="loading" src={loading} />
            </div>
        )
    }}
    

export default Orders;
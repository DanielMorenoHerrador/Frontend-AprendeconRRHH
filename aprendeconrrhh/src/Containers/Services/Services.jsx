import './Services.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const Services = () => {

    let navigate = useNavigate();

    const [services, setServices] = useState([]);
    const [msgError, setmsgError] = useState("");
    const [search, setSearchs] = useState({});
    const [page, setPages] = useState([]);

    useEffect(() => {

        setTimeout(() => {

            bringServices();
        }, 2000);

    }, []);

    useEffect(() => {
        ;
    },[]);

    const bringServices = async () => {
        let res = await axios.get("https://aprendeconrrhh.herokuapp.com/services");
        setServices(res.data);
        console.log(res.data);
    };

    const findService = (findtheService) => {
        localStorage.setItem("findService", JSON.stringify(findtheService));
        navigate("/Profileservices");
    }

    if (services[1]?.name) {

        return (
                <div>{services.map((serv) => {
                            return (
                                <div className="serv" key={serv.id}>
                                    <div className="designnameservice" onClick={() => findService(serv)}>{serv.name}</div>
                                    <div className="designpriceservice">{serv.price}€</div>
                                </div>
                            );
                        })}</div>
                    )
        } else {

        return (
            <div>
                esperando a que lleguen los servicios
            </div>
        )
    }


}

export default Services;
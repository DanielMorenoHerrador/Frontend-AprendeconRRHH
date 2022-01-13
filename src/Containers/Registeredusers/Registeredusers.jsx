
import React, { useState, useEffect } from 'react';
import axios from 'axios';


const Users = (props) => {

    //HOOKS
    const [user, setUsers] = useState([]);
    const [msgError, setmsgError] = useState("");

    useEffect(() => {

        setTimeout(() => {

            bringUsers();
        }, 2000);

    }, []);

    useEffect(() => {

    });

    const bringUsers = async () => {
        try {
            let res = await axios.get("https://aprendeconrrhh.herokuapp.com/users");
                setUsers(res.data);
        } catch (error) {
            setmsgError("No se ha podido traer los Users");
        }
    };

    if (user[1]) {
        return (
        <div className="designorder">
            {user.map((user) => {
                return (
                    <div key={user.id} className="usersContainer">
                        <h4>Id de user: {user.id}</h4>
                        <p>Name: {user.name}</p>
                        <p>DNI: {user.dni}</p>
                        <p>Email: {user.email}</p>
                        <p>Adress: {user.adress}</p>
                        <p>City: {user.city}</p>
                        <p>CP: {user.cp}</p>
                        <p>Password: {user.password}</p>
                        <p>Phone: {user.phone}</p>
                    </div>
                );}
        )
        
    } </div>
        )}  else {

        return (
            <div>
                Los usuarios estan llegando
            </div>
        )
    }}
    

export default Users;
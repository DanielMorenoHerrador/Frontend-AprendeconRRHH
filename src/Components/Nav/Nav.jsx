import React, { useState } from 'react';
import { connect } from 'react-redux';
import './Nav.css';
import View from '../Views/Views';

const Nav = (props) => {

    if (props.credentials?.user?.admin) {
        return (
            <div className="designnav">
                <div className="home">
                    <View destino="HOME" url="/"  />
                </div>
                <div className="services">
                    <View destino="SERVICES" url="/services" />
                </div>
                <div className="title">APRENDECONRRHH
                </div>
                <div className="allhiredservices">
                    <View destino="HIREDSERVICES" url="/hiredservices" />
                </div>
                <div className="registeredusers">
                    <View destino="REGISTEREDUSERS" url="/registeredusers" />
                </div>
                <div className="profile">
                    <View destino="PROFILE" url="/profile" />
                </div>
            </div>

        )
    } else if (props.credentials?.user?.name) {
        return (
            <div className="designnav">
                <div className="home">
                    <View destino="HOME" url="/" />
                </div>
                <div className="services">
                    <View destino="SERVICES" url="/services" />
                </div>
                <div className="title">APRENDECONRRHH
                </div>
                <div className="profile">
                    <View destino="PROFILE" url="/profile" />
                </div>
            </div>
        )

    } else {
        return (
            <div className="designnav">
                <div className="home">
                    <View destino="HOME" url="/" />
                </div>
                <div className="services">
                    <View destino="SERVICES" url="/services" />
                </div>
                <div className="title">APRENDECONRRHH
                </div>
                <div className="register">
                    <View destino="REGISTER" url="/register" />
                </div>
                <div className="login">
                    <View destino="LOGIN" url="/login" />
                </div>
            </div>
        )
    }


};
export default connect((state) => ({
    credentials: state.credentials,
    state: state.state,
}))(Nav);
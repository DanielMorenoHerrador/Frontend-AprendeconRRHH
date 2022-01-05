import './Login.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import {connect} from 'react-redux';
import { LOGIN } from '../../redux/types';

const Login = () => {

    return (

        <div className="designLogin">
            Estas en login
        </div>
    )
};

export default connect()(Login);
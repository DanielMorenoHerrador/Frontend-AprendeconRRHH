import React, { useState } from 'react';
import { connect } from 'react-redux';
import './Footer.css';
import View from '../Views/Views';

const Footer = (props) => {

        return (
            <div className="designfooter">
                <div className="contact">
                    <View destino="CONTACT" url="/contact" />
                </div>
                <div className="cpoyright"><p>©Copyright 2022</p>
                </div>
                <div className="redessociales">
                    <div className="instagram">
                        
                    </div>
                    <div className="linkedln">
                        
                    </div>
                </div>
            </div>
        )
    }

export default Footer;
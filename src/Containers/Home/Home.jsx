import './Home.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const Home = () => {

    return (
        <div className='designhome'>
            <div className="homecontainer">
                <div className="quienessomos">
                    <h2>¿QUIÉNES SOMOS?</h2>
                </div>
                <div className="photo">
                    <link rel="stylesheet" href="" />
                </div>
                <div className="info">
                    <p className="info">!Hola! Soy Anna, me gradué este pasado 2021 en relaciones laborales y recursos humanos en la Universitat de Valencia, y actualmente estoy cursando un máster en Dirección de Personas 4.0. en la Escuela de Negocios Luis Vives (Cámara de Comercio Valencia).</p>
                    <p className="info">Mi pasión por los recursos humanos comenzó por el año 2013 cuando cursaba un grado medio de administración. Descubrí un mundo totalmente nuevo para mi, que captó mi atención por completo. Y poco a poco fui descubriendo cada especialidad dentro de RRHH, sobretodo formación, orientación laboral y responsabilidad social.</p> 
                    <p className="info">A lo largo de estos años he ido adquiriendo experiencia en diferentes ámbitos, tanto en empresas de trabajo temporal (ETT) como en consultoria de RRHH, aún que por otro lado, también he sido camarera muchos años, asi que tengo diversidad de habilidades y competencias que he ido aprendiendo y mejorando en casa puesto que he ocupado.</p>
                </div>
                <div className="lema">
                    <h2>MISIÓN, VISIÓN Y VALORES</h2>
                </div>
                <div className="info">
                    <p className="info">Mi misión es transmitiros toda la información y aprendizaje que he adquirido estos años, ayudando a las personas a mejorar su perfil profesional y las posibles dudas laborales que puedan surgir.</p>
                    <p className="info">La visión de este proyecto es poner a prueba mis propios conocimientos, intentar transmitir todo lo que sé como en su día me lo has transmitido a mí. Es un proyecto dedicado al crecimiento profesional y personal, ya que ambas van ligadas.</p>
                    <p className="info">Quién sabe si algún día monto una consultoria de RRHH! 😜</p>
                    <p className="info">Como valores principales ante pongo la ética, la transparencia de información y la responsabilidad, así como es fundamental una mente abierta a la innovación para adaptarnos a cualquier situación.</p>
                    <p className="info">Para cualquier consulta adicional no dudes en contactar conmigo en el apartado de contacto.</p>
                </div>
            </div>
        </div>
    )
}

export default Home;

import React from 'react';
import { useNavigate } from 'react-router-dom';


const View = (props) => {

    const Navegar = useNavigate();

    const cambioView = () => {
        Navegar(props.url);
    }

        return (
            <div className="designView" onClick={()=>cambioView()}>{props.destino}</div>
        )
};


export default View;
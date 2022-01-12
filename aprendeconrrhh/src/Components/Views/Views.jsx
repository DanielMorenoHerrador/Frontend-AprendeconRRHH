
import React from 'react';
import { useNavigate } from 'react-router-dom';


const View = (props) => {

    const Navegar = useNavigate();

    const cambioView = () => {
        Navegar(props.url);
    }

    console.log("props: ", props);

        return (
            <div className="designView" onClick={()=>cambioView()}>{props.destino}</div>
        )
};


export default View;
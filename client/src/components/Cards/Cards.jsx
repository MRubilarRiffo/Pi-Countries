import "./Cards.css";
import { useState } from "react";
import { Card } from "../Card/Card";
import { useSelector } from 'react-redux';
import { Paginacion } from "../Paginacion/Paginacion";

const Cards = () => {
    const countries = useSelector((state) => state.countries);

    const pagina = useSelector((state) => state.pagina);

    const [porPagina, setPorPagina] = useState(10);

    const max = Math.ceil(countries.length / porPagina);
    
    if(countries.length) {
        return (
            <>
                <div className="containerCards">
                    {countries
                        .slice((pagina - 1) * porPagina, (pagina - 1) * porPagina + porPagina)
                        ?.map((props) => <Card key={props.id} props={props} />)}
                </div>
                <Paginacion max={max} />
            </>
        );
    };
    return (
        <div className="container-oops">
            <h3>Oops! No countries to display.</h3>
        </div>
    );
};

export { Cards };
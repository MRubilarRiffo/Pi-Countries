import "./Paginacion.css"
import { useState } from "react";
import { paginacion } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";

const Paginacion = ({ max }) => {
    const dispatch = useDispatch();

    const pagina = useSelector((state) => state.pagina);
    console.log(pagina)

    const [input, setInput] = useState(1);

    const nextPage = () => {
        setInput(parseInt(input) + 1);
        dispatch(paginacion(pagina + 1));
    };

    const previousPage = () => {
        setInput(parseInt(input) - 1);
        dispatch(paginacion(pagina - 1));
    };

    const onKeyDown = (event) => {
        if(event.keyCode == 13) {
            if(
                parseInt(event.target.value) < 1 ||
                parseInt(event.target.value) > max ||
                isNaN(parseInt(event.target.value))
            ) {
                dispatch(paginacion(1));
                setInput(1);
            } else {
                dispatch(paginacion(parseInt(event.target.value)));
            };
        };
    };

    const onChange = (event) => {
        if(!isNaN(event.target.value)) {
            setInput(event.target.value);
        };
    };

    return (
        <div className="containerPaginacion">
            <button 
                disabled={pagina < 2} 
                onClick={previousPage} >
                    {"<"}
            </button>
            <input 
                onChange={(event) => onChange(event)} 
                onKeyDown={(event) => onKeyDown(event)} 
                name="page" 
                autoComplete="off" 
                value={input} 
            />
            <p> de {max}</p>
            <button 
                disabled={pagina > max - 1} 
                onClick={nextPage} >
                    {">"}
            </button>
        </div>
    );
};

export { Paginacion };
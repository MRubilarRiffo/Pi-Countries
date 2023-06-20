import axios from 'axios';
import { GET_COUNTRIES,
    DETAILS,
    ALFABETICO_A_Z,
    ALFABETICO_Z_A,
    POBLACION_MENOR_MAYOR,
    POBLACION_MAYOR_MENOR,
    FILTER_BY_CONTINENT,
    SORT_BY_DEFAULT,
    PAGINACION,
    ADD_ACTIVITIES } from './actions-type';

// export const getCountries = () => {
//     return async function(dispatch) {
//         try {
//             let response = await axios.get(`http://localhost:3001/countries`);
//             return dispatch({type: GET_COUNTRIES, payload: response.data});
//         } catch (error) {
//             console.error(error);
//         };
//     };
// };

export const getCountries = (value) => {
    return async function(dispatch) {
        try {
            let response = await axios.get(`http://localhost:3001/countries?name=${value}`);
            return dispatch({type: GET_COUNTRIES, payload: response.data});
        } catch (error) {
            console.error(error);
            return dispatch({type: GET_COUNTRIES, payload: []});
        };
    };
};

export const getDetails = (id) => {
    return async function(dispatch) {
        try {
            let response = await axios.get(`http://localhost:3001/countries/${id}`);
            return dispatch({type: DETAILS, payload: response.data});
        } catch (error) {
            console.error(error);
        };
    };
};

export const sortBy = (id) => {
    return async function(dispatch) {
        const cases = {
            "1": SORT_BY_DEFAULT,
            "2": ALFABETICO_A_Z,
            "3": ALFABETICO_Z_A,
            "4": POBLACION_MENOR_MAYOR,
            "5": POBLACION_MAYOR_MENOR,
        };
        return dispatch({type: cases[id]});
    };
};

export const filterByContinent = (value) => {
    return function(dispatch) {
        return dispatch({type: FILTER_BY_CONTINENT, payload: value});
    };
};

export const paginacion = (value) => {
    return function(dispatch) {
        return dispatch({type: PAGINACION, payload: value});
    };
};

export const addActivities = (activity) => {
    return function(dispatch) {
        return dispatch({type: ADD_ACTIVITIES, payload: activity});
    };
};
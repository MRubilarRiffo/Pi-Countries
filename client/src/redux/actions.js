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
    GET_ACTIVITIES,
    DELETE_ACTIVITIES } from './actions-type';

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

export const getActivities = () => {
    return async function(dispatch) {
        try {
            let response = await axios.get(`http://localhost:3001/activities`);
            return dispatch({type: GET_ACTIVITIES, payload: response.data});
        } catch (error) {
            return dispatch({type: GET_ACTIVITIES, payload: []});
        };
    };
};

export const createActivities = (activityData) => {
    return async function(dispatch) {
        try {
            const difficulty = {
                "Easy": 1,
                "Moderate": 2,
                "Intermediate": 3,
                "Difficult": 4,
                "Extreme": 5
            };
            activityData.difficulty = difficulty[activityData.difficulty];
            let response = await axios.post(`http://localhost:3001/activities/create`, activityData)
            console.log(response)
            return dispatch({type: GET_ACTIVITIES, payload: response.data})
        } catch (error) {
            console.log(error);
        };
    };
};

export const deleteActivities = (id) => {
    return async function(dispatch) {
        try {
            await axios.delete(`http://localhost:3001/activities/${id}`);
            return dispatch({type: DELETE_ACTIVITIES, payload: id})
        } catch (error) {
            console.log(error);
        };
    }
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
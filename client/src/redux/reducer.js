import { GET_COUNTRIES,
    DETAILS, ALFABETICO_A_Z,
    ALFABETICO_Z_A,
    POBLACION_MENOR_MAYOR,
    POBLACION_MAYOR_MENOR,
    FILTER_BY_CONTINENT,
    SORT_BY_DEFAULT,
    PAGINACION,
    ADD_ACTIVITIES } from "./actions-type";

const initialState = {
    countries: [],
    countriesCopy: [],
    details: [],
    pagina: 1,
    activities: []
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_COUNTRIES:
            return {
                ...state,
                countries: action.payload,
                countriesCopy: action.payload
            };
        case DETAILS:
            return {
                ...state,
                details: action.payload
            };
        case ALFABETICO_A_Z:
            return {
                ...state,
                countries: [...state.countries].sort((a, b) => a.name.localeCompare(b.name)),
            };
        case ALFABETICO_Z_A:
            return {
                ...state,
                countries: [...state.countries].sort((a, b) => b.name.localeCompare(a.name))
            };
        case POBLACION_MENOR_MAYOR:
            return {
                ...state,
                countries: [...state.countries].sort((a, b) => a.population - b.population)
            };
        case POBLACION_MAYOR_MENOR:
            return {
                ...state,
                countries: [...state.countries].sort((a, b) => b.population - a.population)
            };
        case SORT_BY_DEFAULT:
            return {
                ...state,
                countries: state.countriesCopy
            };
        case FILTER_BY_CONTINENT:
            return {
                ...state,
                countries: action.payload !== "Todo" ? state.countriesCopy.filter((c) => c.continent === action.payload) : state.countriesCopy
            }
        case PAGINACION:
            return {
                ...state,
                pagina: action.payload
            };
        case ADD_ACTIVITIES:
            return {
                ...state,
                activities: [...state.activities, action.payload]
            };
        default:
            return {...state};
    };
};

export { reducer };
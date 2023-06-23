export default (data) => {
    let  error = {};

    if(data.name.length < 3){
        error.n1 = "Must have a minimum of three characters";
    };
    if(!data.countries.length) {
        error.c1 = "You must select at least one country";
    };
    if(data.duration.length) {
        error.d1 = "It must be greater than 0";
    };
    if(isNaN(data.duration)) {
        error.d1 = "It must be greater than 0";
    };
    if(!data.duration.length) {
        console.log(data.duration.length)
        error.d1 = "It must be greater than 0";
    };
    return error;
};
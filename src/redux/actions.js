import * as types from "./actionType";
import axios from "axios";

const getPersons = (persons) => ({
    type : types.GET_PERSONS,
    payload : persons
});

export const loadPersons = () => {
    return function (dispatch) {
        axios.get('http://127.0.0.1:8000/person').then((res) => {
            console.log("res", res.data);  
            dispatch(getPersons(res.data.data));
        }).catch(error => console.log(error));
    };
};

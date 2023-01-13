import * as types from "./actionType";
import axios from "axios";


const getPersons = (persons) => ({
    type : types.GET_PERSONS,
    payload : persons
});

const personDeleted = (res) => ({
    type: types.DELETE_PERSON,
    payload : res
})

const personAdded = (res) => ({
    type: types.ADD_PERSON,
    payload : res
})


export const loadPersons = () => {
    return function (dispatch) {
        axios.get('https://34.176.135.207:8000/person').then((res) => {
            console.log("res", res.data);  
            dispatch(getPersons(res.data.data));
        }).catch(error => console.log(error));
    };
};

export const deletePerson = (documentType, documentNumber) => {
    return function (dispatch) {
        axios.delete(`https://34.176.135.207:8000/person?documentType=${documentType}&documentNumber=${documentNumber}`).then((res) => {
            console.log("res", res.data); 
            if(res.status===200){
                alert("Person Deleted Sucsesful")
            }else if(res.status===204){
                alert("Error: Person not Exist")
            }else{
                alert("An error has ocurred")
            } 
            dispatch(personDeleted(res.data.data));
            dispatch(loadPersons())
        }).catch(error => console.log(error));
        
    };
};


export const AddPersons = (person) => {
    return function (dispatch) {
        axios.post(`https://34.176.135.207:8000/person`, person).then((res) => {
            console.log("res", res.data);  
            console.log("res", res.status);
            if(res.status===201){
                alert("Person created")
            }else if(res.status===204){
                alert("Error: Person Exist")
            }else{
                alert("An error has ocurred")
            }
            dispatch(personAdded(res.data.data));
            dispatch(loadPersons())
            //window.location.reload()
        }).catch(error => console.log(error));
        
    };
};

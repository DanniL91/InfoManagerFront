import * as types from "./actionType";
import axios from "axios";


const getPersons = (persons) => ({
    type : types.GET_PERSONS,
    payload : persons
});

export const setRequestError = e => ({ 
    type: types.REQUEST_ERROR, 
    payload: e }
);

const headers = {
    'Content-Type': 'application/json'
};

export const saveData = (data) => {
    return {
        type: types.STORAGE_PERSON,
        payload : data
    }

}

export const setSucces = (data) => {
    return {
        type: types.REQUEST_SUCCES,
        payload : data
    }
}
export const requestOperation = (data) => {
    return {
        type: types.REQUEST_CONFIRM,
        payload : data
    }
}


export const loadPersons = () => {
    return function (dispatch) {
        axios.get('https://info-manager-api-naj7d6dr4q-tl.a.run.app/person',{headers}).then((res) => {
            if(res.status===200){
            dispatch(getPersons(res.data.data));
            }
        }).catch(error => console.log(error));
    };
};

export const deletePerson = (documentType, documentNumber) => {
    return async function (dispatch) {
         await axios.delete(`https://info-manager-api-naj7d6dr4q-tl.a.run.app/person?documentType=${documentType}&documentNumber=${documentNumber}`).then((res) => {
            if(res.status===200){
                dispatch(setSucces(res.data));
                dispatch(loadPersons())
            }
        }).catch(error => dispatch(setRequestError(error)));
        
    };
};


export const AddPersons = (person) => {
    return async function (dispatch) {
        await axios.post(`https://info-manager-api-naj7d6dr4q-tl.a.run.app/person`, person).then((res) => {
            if(res.status===201){
                dispatch(setSucces(res.data));
                dispatch(loadPersons())
            }
            
        }).catch(error => dispatch(setRequestError(error)));
        
    };
};

export const PutPerson = (person) => {
    return async function (dispatch) {
        await axios.put(`https://info-manager-api-naj7d6dr4q-tl.a.run.app/person`, person).then((res) => {
            if(res.status===200){
                dispatch(setSucces(res.data));
                dispatch(loadPersons())
            }
        }).catch(error => dispatch(setRequestError(error)));
        
    };
};


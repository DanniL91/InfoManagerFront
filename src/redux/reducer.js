import * as types from "./actionType";

const initialState = {
    persons: [],
    person: {},
    loading: true,
    updateError: null,
}

const personsReducers = (state = initialState, action) => {
    switch (action.type) {
        case types.GET_PERSONS:
            return {
                ...state,
                persons: action.payload,
                loading: false,
            };
        case types.DELETE_PERSON:
            return {
                ...state,
                res: action.payload,
                loading: false,
            };
            case types.ADD_PERSON:
                return{ 
                ...state,
                res: action.payload,
                loading: false,
                 };
            case types.STORAGE_PERSON:
               return{ 
               ...state,
               res: action.payload,
               loading: false,
                };
            case types.UPDATE_PERSON:
                return{ 
                ...state,
                res: action.payload,
                loading: false,
                 };
            case types.REQUEST_ERROR:
                return{ 
                ...state,
                error: action.payload,
                loading: false,
                 };
            case types.REQUEST_SUCCES:
               return{ 
               ...state,
               result: action.payload,
               loading: false,
                };
            case types.REQUEST_CONFIRM:
                return{ 
                ...state,
                confirm: action.payload,
                loading: false,
                 };
        default:
            return state;
    }
}

export default personsReducers;
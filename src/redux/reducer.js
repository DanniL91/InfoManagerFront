import * as types from "./actionType";

const initialState = {
    persons: [],
    person: {},
    loading: true
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
        default:
            return state;
    }
}

export default personsReducers;
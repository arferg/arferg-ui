import {
    GET_HEADER_DETAILS_REQUEST,
    GET_HEADER_DETAILS_SUCCESS,
    GET_HEADER_DETAILS_ERROR
} from "./Types";

export const initialState = {
    details: {},
    isLoading: false,
    error: null
}

export const headerReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_HEADER_DETAILS_REQUEST:
            return {
                ...state,
                isLoading: true
            }
        case GET_HEADER_DETAILS_SUCCESS:
            return {
                ...state,
                productDefinition: action.payload,
                isLoading: false
            }
        case GET_HEADER_DETAILS_ERROR:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            }
        default:
            return state
    }
}
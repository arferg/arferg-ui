import axios from 'axios'
import {
    GET_HEADER_DETAILS_ERROR,
    GET_HEADER_DETAILS_REQUEST,
    GET_HEADER_DETAILS_SUCCESS
} from "./Types"
import swapiService from "../../services/SwapiService"

export const getHeaderDetails = () => async (dispatch) => {
    try {
        dispatch({ type: GET_HEADER_DETAILS_REQUEST });

        const response = await swapiService.getStarWarsPerson("123")
        return dispatch({
            type: GET_HEADER_DETAILS_SUCCESS,
            payload: response.data
        });
    } catch (error) {
        return dispatch({
            type: GET_HEADER_DETAILS_ERROR,
            payload: error.response && error.response.data ? error.response.data : error
        })
    }
}

// export const getHeaderDetails = () => {
//     return (dispatch) => new Promise((resolve) => {
//         dispatch({type: GET_HEADER_DETAILS_REQUEST})
//
//         return axios.get(`https://swapi.dev/api/people/1`).then((response) => {
//             return resolve(dispatch({
//                 type: GET_HEADER_DETAILS_SUCCESS,
//                 payload: response.data
//             }))
//         }).catch((error) => {
//             return resolve(dispatch({
//                 type: GET_HEADER_DETAILS_ERROR,
//                 payload: error.response && error.response.data ? error.response.data : error
//             }))
//         })
//     })
// }


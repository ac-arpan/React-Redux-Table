import { FETCH_TABLE_DATA_REQUEST, FETCH_TABLE_DATA_SUCCESS, FETCH_TABLE_DATA_FAILURE } from "./tableTypes"
import axios from 'axios'

export const fetchTableDataRequest = () => {
    return {
        type: FETCH_TABLE_DATA_REQUEST
    }
}

export const fetchTableDataSuccess = data => {
    return {
        type: FETCH_TABLE_DATA_SUCCESS,
        payload: data
    }
}

export const fetchTableDataFailure = error => {
    return {
        type: FETCH_TABLE_DATA_FAILURE,
        payload: error
    }
}

export const fetchTableData = () => {
    return (dispatch) => {
        console.log('I am in');
        dispatch(fetchTableDataRequest())
        axios.get("https://restcountries.eu/rest/v2/all")
            .then(res => dispatch(fetchTableDataSuccess(res.data)))
            .catch(err => dispatch(fetchTableDataFailure(err.message)))
    }
}
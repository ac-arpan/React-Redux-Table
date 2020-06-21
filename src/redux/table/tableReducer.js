const { FETCH_TABLE_DATA_REQUEST, FETCH_TABLE_DATA_SUCCESS, FETCH_TABLE_DATA_FAILURE } = require("./tableTypes")

const initialState = {
    loading : false,
    data:[],
    erorr : ''
}

const tableReducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_TABLE_DATA_REQUEST: return {
            ...state,
            loading:true
        }
        case FETCH_TABLE_DATA_SUCCESS : return {
            ...state,
            loading:false,
            data:action.payload,
            error:''
        }
        case FETCH_TABLE_DATA_FAILURE : return {
            ...state,
            loading:false,
            data:[],
            error:action.payload
        }
        default : return state
    }
}

export default tableReducer
import { FETCH_ERROR, FETCH_SUCCESS, FETCH_USER } from "./AsyncTypes"

const initialState = {
    loading: true,
    user: [],
    error: ''
}

const reducers = (state=initialState,action) => {
    switch(action.type){
        case FETCH_USER:
            return {
                ...state,
                loading :true
            }
            case FETCH_SUCCESS:
                return{
                    ...state,
                    loading: false,
                    user: action.payload
                }
                case FETCH_ERROR:
                    return{
                        ...state,
                        loading:false,
                        error: action.payload
                    }
                    default:
                        return state
    }
}

export default reducers
import { GET_LIST_DATA, RUN_DAGS_ID, CLEAR_ALL_DATA, TEST_API } from '../actions/AirflowActions';
const initialState = [];
const AirflowReducer = function (state = initialState, action) {
    const { type, payload } = action;
    switch (action.type) {
        case GET_LIST_DATA: {
            return {
                ...state,
                dagsList: [...payload],
            }
        }
        case TEST_API:{
            return{
                ...state,
                data: [...payload]
            }
        }
        case RUN_DAGS_ID: {
            return {
                ...state,
            }
        }
        default: {
            return {
                ...state,
            }
        }
    }
}

export default AirflowReducer
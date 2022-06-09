import AirflowService from '../service/AirflowService';
export const GET_LIST_DATA = 'GET_LIST_DATA';
export const RUN_DAGS_ID = 'RUN_DAGS_ID';
export const CLEAR_ALL_DATA = 'CLEAR_ALL_DATA';
export const TEST_API = 'TEST_API';

export const getAllListDags = () => async (dispatch) => {
    try{
        const res = await AirflowService.getAll();
        dispatch({
            type: GET_LIST_DATA,
            payload: res.data
        })
    }catch(err){
        console.log(err)
    }
}

export const runDagsWithId = (id) => async (dispatch) => {
    try {
        const res = await AirflowService.runDags(id);
        dispatch({
            type: RUN_DAGS_ID,
            payload: res.data
        })
    } catch (error) {
        console.log(error)
    }
}

export const testAPI = () => async (dispatch) => {
    try {
        const res = await AirflowService.testAPI();
        console.log("resAction", res)
        dispatch({
            type: TEST_API,
            payload: res.data
        })
    } catch (error) {
        console.log(error)
    }
}
import BaseAxios from "./BaseAxios";
import config from "config";
import UserService from "./UserService";

const getLoginfo = async (DagId) => {
    let router = config.airflowapi + '/dags/' + DagId + '/dagRuns?limit=40&order_by=-start_date'
    let response
    try {
        response = await BaseAxios({
            method: 'get',
            url: router,
            auth: {
                username: 'hung',
                password: '123456a@'
            }
        });
    } catch (err) {
        console.log(err);
    }
    return response
}

//https://flowdpa.apps.xplat.fis.com.vn/api/v1/dags/chinh_transfer_card_transaction/dagRuns/manual__2022-07-04T10%3A46%3A43.318462%2B00%3A00/taskInstances?limit=100

const Logdetail = async (DagIdnDagrunId) => {
    let router = config.airflowapi + '/dags/' + DagIdnDagrunId +'/taskInstances?limit=100';
    let response
    try {
        response = await BaseAxios({
            method: 'get',
            url: router,
            auth: {
                username: 'hung',
                password: '123456a@'
            }
        });
    } catch (err) {
        console.log(err);
    }
    return response
}

export const GetProcess = async (item_type)=>{
    let response
    const router =  '/invoice/usernamentype';
    let JWTToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJDTE9PbHdEZ0pPTGpVOHVzMnoySTNyT2pzRkEzNnF6TiJ9.2hsA0NJzwy2YJOeST2JnYJoRIohiJh9SHaKvp9GhgjM';
    try {
        response = await BaseAxios({
            method: 'get',
            url: router,
            headers: {"authorization" : `Bearer ${JWTToken}`},
            params: {
                user_name: UserService.getUsername(),
                item_type: item_type
            }
        });
    } catch (err) {
        console.log(err);
    }
    return response
}

const DataIngest = {
    getLoginfo,
    Logdetail

};

export default DataIngest;
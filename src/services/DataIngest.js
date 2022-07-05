import BaseAxios from "./BaseAxios";
import config from "config";

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


const DataIngest = {
    getLoginfo,
    Logdetail

};

export default DataIngest;
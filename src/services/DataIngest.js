import BaseAxios from "./BaseAxios";
import config from "config";

const getLoginfo = async (DagId) => {
    const getairflowapi = config.rootapi + '/invoice/' + DagId;
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


const DataIngest = {
    getLoginfo

};

export default DataIngest;
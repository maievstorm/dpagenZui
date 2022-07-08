import BaseAxios from "./BaseAxios";
import config from "config";
import UserService from "./UserService";
import axios from "axios";

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
    try {
        response = await BaseAxios({
            method: 'get',
            url: router,
            headers: {"Authorization": `Bearer ${UserService.getToken()}`},
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


export const CreateInvoiceProcess = async (body)=>{
    let response
    const router =  '/invoice';
    try {
        response = await BaseAxios({
            method: 'post',
            url: router,
            headers: {"Authorization": `Bearer ${UserService.getToken()}`},
            data: body
            
        });
    } catch (err) {
        console.log(err);
    }
    return response
}

export const UpdateInvoiceProcess = async (item_name,body)=>{
    let response
    const router =  '/invoice/itemname/' +item_name;
    try {
        response = await BaseAxios({
            method: 'put',
            url: router,
            headers: {"Authorization": `Bearer ${UserService.getToken()}`},
            data: body
            
        });
    } catch (err) {
        console.log(err);
    }
    return response
}

export const GetKafkaConnectors = async ()=>{
    let response
    const router =  'https://dpaapigw.apps.xplat.fis.com.vn/dpzapipub/api/v1/kafka/connector';
    try {
        response = await axios({
            method: 'get',
            params:{
                connector:'jdbc_sink8'
            },
            url: router,
            headers: {"Authorization": `Bearer ${UserService.getToken()}`}
            
        });
    } catch (err) {
        console.log(err);
    }
    return response
}


export const GetKafkaConnector = async (connectorname)=>{
    let response
    const router =  '/kafka/connector';
    try {
        response = await BaseAxios({
            method: 'get',
            url: router,
            headers: {"Authorization": `Bearer ${UserService.getToken()}`},
            params: {
                connector:connectorname
            }
        });
    } catch (err) {
        console.log(err);
    }
    return response
}

export const pauseKafkaConnector = async (connectorname)=>{
    let response
    const router =  '/kafka/pauseconnector';
    try {
        response = await BaseAxios({
            method: 'put',
            url: router,
            headers: {"Authorization": `Bearer ${UserService.getToken()}`},
            params: {
                connector:connectorname
            }
        });
    } catch (err) {
        console.log(err);
    }
    return response
}


export const restarKafkaConnector = async (connectorname)=>{
    let response
    const router =  '/kafka/restartconnector';
    try {
        response = await BaseAxios({
            method: 'post',
            url: router,
            headers: {"Authorization": `Bearer ${UserService.getToken()}`},
            params: {
                connector:connectorname
            }
        });
    } catch (err) {
        console.log(err);
    }
    return response
}

export const createKafkaConnector = async (body)=>{
    let response
    const router =  '/kafka/createkafkaconnector';
    try {
        response = await BaseAxios({
            method: 'post',
            url: router,
            headers: {"Authorization": `Bearer ${UserService.getToken()}`},
            body:body  
        });
    } catch (err) {
        console.log(err);
    }
    return response
}






const DataIngest = {
    getLoginfo,
    Logdetail,
    CreateInvoiceProcess,
    UpdateInvoiceProcess,
    GetKafkaConnector,
    pauseKafkaConnector,
    restarKafkaConnector,
    createKafkaConnector
    

};

export default DataIngest;
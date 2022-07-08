import BaseAxios from "./BaseAxios";
import UserService from "./UserService";


export const GetKafkaConnectors = async ()=>{
    let response
    const router =  '/kafka/kafkaconnector';
    try {
        response = await BaseAxios({
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

const Kafkaconnect = {
    GetKafkaConnector,
    pauseKafkaConnector,
    restarKafkaConnector,
    createKafkaConnector

};

export default Kafkaconnect;
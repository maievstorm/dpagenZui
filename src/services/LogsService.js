import BaseAxios from "./BaseAxios";
import config from "config";
import UserService from "./UserService";



export const addLog = async (username, action, detail ) => {
    let response
    const router = '/logs/addLog' + UserService.getUsername();
    try {
        response = await BaseAxios({
            method: 'post',
            url: router,
            data:{
                username:username,
                action:action,
                detail:detail
            }            
        });
    } catch (err) {
        console.log(err);
    }
    return response
}

export const searchLog = async (username,action) => {
    let response
    const router = '/logs/search'
    try {
        response = await BaseAxios({
            method: 'get',
            url: router,
            params:{
                username:username,
                action:action
            }
            
        });
    } catch (err) {
        console.log(err);
    }
    return response
}

const LogService = {
    addLog,
    searchLog

};

export default LogService;
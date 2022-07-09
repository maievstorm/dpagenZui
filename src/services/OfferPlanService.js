import BaseAxios from "./BaseAxios";
import UserService from "./UserService";



const applyService = async (data) => {
    try {
      await BaseAxios({
        method: 'post',
        url: '/requestsub',
        data: data,
        headers: { "Authorization": `Bearer ${UserService.getToken()}` }
      });
    } catch (err) {
      console.log(err);
    }
  }
  
  const getOffer = async () => {
    let response
    try {
      response = await BaseAxios({
        method: 'get',
        url: '/prerequisite/offerandplan',
        headers: { "Authorization": `Bearer ${UserService.getToken()}` },
      });
    } catch (err) {
      console.log(err);
    }
    return response
  }

  const getUserinfo = async () => {
    let response
    try {
      response = await BaseAxios({
        method: 'get',
        url: '/useraccount/accountbyusername/'+UserService.getUsername(),
        headers: { "Authorization": `Bearer ${UserService.getToken()}` },
      });
    } catch (err) {
      console.log(err);
    }
    return response
  }


const OfferPlanService = {
    applyService,
    getOffer,
    getUserinfo
    


};

export default OfferPlanService;
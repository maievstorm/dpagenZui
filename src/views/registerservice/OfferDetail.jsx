import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router"
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Button from '@mui/material/Button';
import OfferPlanService from 'services/OfferPlanService';
import UserService from "services/UserService";



export default function OrderDetail() {

    const location = useLocation();
    const navigate = useNavigate();
    const OfferId = location?.state?.id;

    const BacktoOffer = () => {
        navigate('/registerservice')
    }

    // const [listOffer, setListOffer] = useState([])
    const [userinfo, setUserinfo] = useState([])
    const [OfferSelected, setOfferSelected] = useState([])
    useEffect(() => {
        OfferPlanService.getOffer()
            .then(res => {
                // setListOffer(res.data.pre) 
                setOfferSelected((res.data.pre).filter((offer) => offer.offer_id === OfferId)[0])
            })
            .catch(err => console.log(err))
    }, []);

    useEffect(() => {
        OfferPlanService.getUserinfo()
            .then(res => {
                setUserinfo(res.data.data)

            })
            .catch(err => console.log(err))
    }, [])

    console.log(userinfo)
    // let offerselected= listOffer.filter( (offer) => offer.offer_id===OfferId);




    console.log(OfferSelected.offer_name);

    const submit = () => {
  
        let today = new Date()
        let data = {
            user_account_id: userinfo.id,
            'user_name': userinfo.user_name,
            'fullname': userinfo.last_name + ' ' + userinfo.first_name,
            'email': userinfo.email,
            'upassword': null,
            'offer_id': OfferSelected.offer_id,
            'plan_id': OfferSelected.plan_id,
            'request_date': today,
            'request_status': 0,
            'request_type': 1
        }
        console.log(data);

        OfferPlanService.applyService(data);

    }






    return (
        <>
            <Button onClick={() => BacktoOffer()} >{<ArrowBackIcon />}</Button>
            {OfferId}
            {OfferSelected.offer_name}

            <Button name={OfferSelected.offer_id}
                variant="outlined"
                color="primary"
               onClick={() => submit()}>Lua chon chung toi</Button>

        </>

    )
}
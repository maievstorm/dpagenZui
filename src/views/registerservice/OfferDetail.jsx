import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router"
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Button from '@mui/material/Button';
import OfferPlanService from 'services/OfferPlanService';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import { addLog } from "services/LogService";



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
        addLog('request_resource',data)
        navigate('/registerservice');


    }






    return (
        <>
           
            


            <Grid item xs={12} md={4}>
                <Card variant="outlined">
                    <CardHeader title={OfferSelected.offer_name} key={OfferSelected.offer_name} ></CardHeader>
                    <CardContent>
                        <Box px={1}>

                            {OfferSelected.description}
                            {/* {OfferSelected.description.split('|').map(line => (
                                                <Typography color="textSecondary" variant="subtitle1" component="p" key={line}>
                                                    {line}
                                                </Typography>
                                            ))} */}

                            <Typography variant="h3" component="h2" gutterBottom={true}>
                                {OfferSelected.current_price}
                                <Typography variant="h6" color="textSecondary" component="span">Tr.VND/Tháng</Typography>
                            </Typography>

                        </Box>

                    </CardContent>
                </Card>
            </Grid>

            <Button onClick={() => BacktoOffer()} >{<ArrowBackIcon />}</Button>

            <Button name={OfferSelected.offer_id}
                variant="outlined"
                color="primary"
                onClick={() => submit()}>Đăng ký</Button>

        </>

    )
}
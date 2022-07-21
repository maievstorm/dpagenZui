import React from 'react';
import { makeStyles } from '@mui/styles';
import { Container } from '@mui/material';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import { useNavigate } from "react-router"
import Switch from '@mui/material/Switch';
import { useEffect, useState } from 'react';
import OfferPlanService from 'services/OfferPlanService';

const useStyles = makeStyles((theme) => ({
    section: {
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
    },
    cardHeader: {
        paddingTop: theme.spacing(3),
    },
}));

export default function ListProductPrice() {
    const classes = useStyles();
    const navigate = useNavigate()
    const [listOffer, setListOffer] = useState([])
    useEffect(() => {
        OfferPlanService.getOffer()
            .then(res => {
                setListOffer(res.data.pre)
            })
            .catch(err => console.log(err))
    }, [])

    // console.log(listOffer[0]?.description)

    // const [state, setState] = React.useState({
    //     checkbox: true,
    // });

    // const handleChange = (event) => {
    //     setState({ ...state, checkbox: event.target.checked });
    // };

    const onClickHander = (type,offerid) => {
         
         navigate(type, { state: { id: offerid } })

    }


    return (
        <section className={classes.section}>
            <Container maxWidth="lg">
                <Box py={8} textAlign="center">
                    <Box mb={3}>
                        <Container maxWidth="sm">
                            <Typography variant="overline" color="textSecondary">Danh sách sản phẩm</Typography>
                            <Typography variant="h3" component="h2" gutterBottom={true}>
                                <Typography variant="h3" component="span" color="primary">Lựa chọn gói sản phẩm phù hợp với bạn </Typography>
                                
                            </Typography>
                            <Typography variant="subtitle1" color="textSecondary" paragraph={true}>Các sản phẩm được tuỳ biến theo mục đích sử dụng</Typography>

                            <div>
                                {/* <Typography variant="subtitle1" component="span">Thang</Typography>
                                &nbsp; <Switch name="checkbox" color="primary" checked={state.checkbox} onChange={handleChange} /> &nbsp;
                                <Typography variant="subtitle1" component="span">Nam</Typography> */}
                            </div>
                        </Container>
                    </Box>

                    <Grid container spacing={3}>
                        {listOffer.map(offer => {
                            // console.log(offer?.description)
                            let x = JSON.parse(JSON.stringify(offer?.description))
                            console.log(x)

                            const string = '{"name":"paresh","age":34,"professional":"coder"}';


console.log(JSON.parse(string));



                            // for (var key of x){
                            //     console.log(key)
                            // }
                            return (
                                <Grid item xs={12} md={4}>
                                    <Card variant="outlined">
                                        <CardHeader title={offer.offer_name} key={offer.offer_name} className={classes.cardHeader}></CardHeader>
                                        <CardContent>
                                            <Box px={1}>
                                                <Typography variant="h3" component="h2" gutterBottom={true}>
                                                    {offer.current_price}
                                                    <Typography variant="h6" color="textSecondary" component="span">Tr.VND/Tháng</Typography>
                                                </Typography>
                                                
                                                {offer.description.split('|').map(line => (
                                                    <Typography color="textSecondary" variant="subtitle1" component="p" key={line}>
                                                        {line}
                                                    </Typography>
                                                ))}
    
                                            </Box>
                                            <Button name={offer.offer_id} 
                                            variant="outlined" 
                                            color="primary" 
                                            className={classes.primaryAction} onClick={()=>onClickHander('offerdetail',offer.offer_id)}>Lựa chọn</Button>
                                            <Box mt={2}>
                                                <Link href="#" color="primary">Chi tiết gói</Link>
                                            </Box>
                                        </CardContent>
                                    </Card>
                                </Grid>
                            )
                        })}
                      
                    </Grid>
                </Box>
            </Container>
        </section>
    );
}
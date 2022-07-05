import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';
import UserService from 'services/UserService';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';



export default function FormService() {
    const [offerId, setOfferId] = useState('')
    const [listOffer,setListOffer] = useState([])
    useEffect(()=>{
        UserService.getOffer()
        .then(res=>{
            setListOffer(res.data.data)
        })
        .catch(err => console.log(err))
    },[])

    const submit = ()=>{
        let today= new Date()
        let data = {
            user_account_id: null,
            'user_name': UserService.getUsername(),
            'fullname': null,
            email: null,
            upassword: null,
            'offer_id':offerId,
            'plan_id': null,
            'request_date': today,
            'request_status': 0,
            type:1
        }
        // console.log(JSON.stringify(data))
        UserService.applyService(data)

    }

    return (
        <Stack spacing={2}>
            <FormControl>
                <FormLabel id="demo-row-radio-buttons-group-label">Dịch vụ</FormLabel>
                <Select
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="row-radio-buttons-group"
                    onChange={e => setOfferId(e.target.value)}
                >
                    {
                        listOffer.map((item,index)=>{
                            return <MenuItem index={index} value={item.id}  label={item.offer_name} >{item.offer_name}</MenuItem>
                        })
                    }
                </Select>
            </FormControl>
            <Button sx={{width:200}} variant="contained" endIcon={<SendIcon />} onClick={submit}>
                Mở rộng
            </Button>
        </Stack>
    )
}
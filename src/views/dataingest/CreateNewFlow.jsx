import React, { useState } from "react";
import { Stepper, Step, StepLabel } from "@mui/material";
import StepWizard from "react-step-wizard";
import { Info } from "./stepForm/Info";
import { Query } from "./stepForm/Query";
import { Source } from "./stepForm/Source";
import { Review } from "./stepForm/Review";
import { Finish } from "./stepForm/Finish";
import config from '../../config';
import axios from 'axios';
import UserService from 'services/UserService';



const CreateNewFlow = () => {
  const steps = ['Đăng ký tiến trình', 'Đăng ký CSDL', 'Tạo truy vấn tổng hợp', 'Xác nhận thông tin', 'Hoàn thành'];

  const [stepWizard, setStepWizard] = useState(null);
  const [user, setUser] = useState({});
  const [activeStep, setActiveStep] = useState(0);
  const [daginfo, setDagInfo] = useState({})
  const [formSrcFields, setFormSrcFields] = useState()
  const [formQuery, setformQuery] = useState()
  const [conf, setConf] = useState()




  const assignStepWizard = (instance) => {
    setStepWizard(instance);
  };

  const assignDagInfo = (val) => {
    setDagInfo({ ...val })
  };
  const assignSource = (val) => {
    setFormSrcFields(val)
  };
  const assignQuery = (val) => {
    setformQuery(val)
    setConf({
      'DagId': daginfo.DagId,
      "Schedule": daginfo.Schedule,
      "owner": UserService.getUsername(),
      'tags': daginfo.tags_name,
      'source': formSrcFields,
      'query': val
    })
  };

  const handleStepChange = (e) => {
    setActiveStep(e.activeStep - 1);
  };

  const [loading, setLoading] = React.useState(true);

  // fetch data if done set loading = false

  const submit = () => {
    const body = {
      "conf": { conf },
    }
    axios({
      method: 'post',
      url: config.airflowapi + '/dags/dag_create_job_file/dagRuns',

      auth: {
        username: 'hung',
        password: '123456a@'
      },
      data: body
    });

    const invoicebody =
    {
      "item_name": conf.DagId,
      "item_type": 'airflow',
      "customer_invoice_data": JSON.stringify(body),
      "subscription_id": 1,
      "plan_history_id": 1,
      "invoice_period_start_date": new Date().toLocaleString() + '',
      "invoice_period_end_date": new Date().toLocaleString() + '',
      "invoice_description": conf.DagId,
      "invoice_amount": 100,
      "invoice_created_ts": new Date().toLocaleString() + '',
      "invoice_due_ts": new Date().toLocaleString() + '',
      "invoice_paid_ts": new Date().toLocaleString() + ''
    }

    console.log(invoicebody)
    axios({
      method: 'post',
      url: config.rootapi + '/invoice',
      data: invoicebody
    });
    setTimeout(()=>setLoading(false), 5000);

  }



  return (
    <div>
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => {
          return (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      <br></br>
      <StepWizard instance={assignStepWizard} onStepChange={handleStepChange}>
        <Info userCallback={assignDagInfo} />
        <Source userCallback={assignSource} />
        <Query userCallback={assignQuery} srcData={formSrcFields} />
        <Review userCallback={submit} conf={conf} />
        <Finish loading={loading} setLoading={setLoading} />
      </StepWizard>
    </div>
  );
};

export default CreateNewFlow;
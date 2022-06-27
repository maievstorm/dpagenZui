import React, { useState } from "react";
import { Stepper, Step, StepLabel } from "@mui/material";
import StepWizard from "react-step-wizard";
import { Button, FormGroup, Input } from "@mui/material";
import Typography from '@mui/material/Typography';
import { Info } from "./stepForm/Info";
import { Query } from "./stepForm/Query";
import { Source } from "./stepForm/Source";
import { Review } from "./stepForm/Review";
import { Finish } from "./stepForm/Finish";


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
      <StepWizard instance={assignStepWizard} onStepChange={handleStepChange}>
        <Info userCallback={assignDagInfo} />
        <Source userCallback={assignSource} />
        <Query userCallback={assignQuery} srcData={formSrcFields} />
        <Review userCallback={assignDagInfo} conf={conf}/>
        <Finish loading={loading} setLoading={setLoading} />
      </StepWizard>
    </div>
  );
};

export default CreateNewFlow;
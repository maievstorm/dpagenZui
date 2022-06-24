import React from "react";
import { useForm, useStep } from "react-hooks-helper";
import { Info } from "./stepForm/Info";
import { Query } from "./stepForm/Query";
import { Source } from "./stepForm/Source";
import { Review } from "./stepForm/Review";
import { Finish } from "./stepForm/Finish";
import { useState } from "react";
import HorizontalLinearStepper from "./Process";
import UserService from 'services/UserService';


const steps = [
  { id: "info" },
  { id: "source" },
  { id: "query" },
  { id: "review" },
  { id: "finish" },
];

export const MultiStepForm = () => {
  const [Daginfo, setDagInfo] = useState([
      {
          DagId: '',
          Schedule: '',
      //   owner: '',
          tags_name: ''
      },
  ])
  const { step, navigation } = useStep({
    steps,
    initialStep: 0,
  });


  const [formSrcFields, setFormSrcFields] = useState([
          {
              sourcetype: '',
              connectstring: '',
              databasename:'',
              srcusername:'',
              srcpassword :'',
              tablename: '',
              alias: ''
          },
      ])
  const handleFormSrcChange = (event, index) => {
      let data = [...formSrcFields];
      data[index][event.target.name] = event.target.value;
      setFormSrcFields(data);
  }
  const removeFields = (index) => {
    let data = [...formSrcFields];
    data.splice(index, 1)
    setFormSrcFields(data)
}
const addFields = () => {
  let object = {
      sourcetype: '',
      connectstring: '',
      tablename: '',
      alias: ''
  }

  setFormSrcFields([...formSrcFields, object])
}
  const [formQuery, setformQuery] = useState([
    {
        queryname: '',
        querydetail: '',
        listsourcetable: '',
        targettable: '',
        writemode: ''
    },
  ])
  const handleformQuery = (event, index) => {
    let data = [...formQuery];
    data[index][event.target.name] = event.target.value;
    setformQuery(data);
  }
  const addFieldQuery = () => {
    let object = {
        queryname: '',
        querydetail: '',
        targettype: '',
        listsourcetable: '',
        targettable: ''
    }

    setformQuery([...formQuery, object])

}
  const removeQuery = (index) => {
      let data = [...formQuery];
      data.splice(index, 1)
      setformQuery(data)
  }

  const submit = (e) => {
    e.preventDefault();
    let conf = { 
        'DagId': Daginfo.DagId,
        "Schedule": Daginfo.Schedule,
        "owner": UserService.getUsername(),
        'tags': Daginfo.tags_name,
        'source': formSrcFields,
        'query': formQuery

   
              
      }
   
    const body = {
        "conf": {conf},
      }

    //console.log (conf)
    console.log(JSON.stringify(body))
   
   
     
        // axios({
        //     method: 'post',
        //     url: 'https://flowdpa.apps.xplat.fis.com.vn/api/v1/dags/dag_create_job_file/dagRuns',
             
        //     auth: {
        //         username: 'hung',
        //         password: '123456a@'
        //       },
        //     data: body
        //   }); 

        //   const invoicebody=
        //   {
        //       "item_name":Daginfo.DagId,
        //       "customer_invoice_data":JSON.stringify(body),
        //       "subscription_id":1,
        //       "plan_history_id":1,
        //       "invoice_period_start_date": new Date().toLocaleString() + '',
        //       "invoice_period_end_date":new Date().toLocaleString() + '',
        //       "invoice_description":Daginfo.DagId,
        //       "invoice_amount":100,
        //       "invoice_created_ts":new Date().toLocaleString() + '',
        //       "invoice_due_ts":new Date().toLocaleString() + '',
        //       "invoice_paid_ts":new Date().toLocaleString() + ''
        //   }
      
        //   axios({
        //       method: 'post',
        //       url: 'https://dpzapi.apps.xplat.fis.com.vn/api/v1/invoice',           
        //       data: invoicebody
        //   });     



       

    }


  const props1 = { Daginfo, setDagInfo, navigation };
  const props2 = { formSrcFields, handleFormSrcChange, removeFields,addFields,navigation };
  const props3 = { formQuery, handleformQuery, removeQuery,addFieldQuery,formSrcFields,setformQuery,navigation };
  const props = { navigation };



  switch (step.id) {
    case "info":
      return <>
        <HorizontalLinearStepper {...props}/>
        <Info {...props1} />
      </>;
    case "source":
      return <>
        <HorizontalLinearStepper {...props}/>
        <Source {...props2} />
        </>
    case "query":
      return <>
      <HorizontalLinearStepper {...props}/>
      <Query {...props3} />
      </>
    case "review":
      let conf = { 
        'DagId': Daginfo.DagId,
        "Schedule": Daginfo.Schedule,
         "owner": UserService.getUsername(),
        'tags': Daginfo.tags_name,
        'source': formSrcFields,
        'query': formQuery
      }
      const props4 = {conf,submit, navigation };
      
      return <>
      <HorizontalLinearStepper {...props4}/>
      <Review {...props4} />
      </>
    case "finish":    
      return <>
      <HorizontalLinearStepper {...props}/>
      <Finish/>
      </>
  }

  return (
    <div>
      <h1>Multi step form</h1>
    </div>
  );
};

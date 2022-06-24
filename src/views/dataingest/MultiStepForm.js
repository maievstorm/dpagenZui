import React from "react";
import { useForm, useStep } from "react-hooks-helper";
import { Info } from "./stepForm/Info";
import { Query } from "./stepForm/Query";
import { Source } from "./stepForm/Source";
import { Submit } from "./stepForm/Submit";
import { useState } from "react";

const defaultData = {
  DagId: "",
  Schedule: "",
  tags_name: "",
  address: "",
  city: "",
  state: "",
  zip: "",
  phone: "",
  email: "",
};

const steps = [
  { id: "info" },
  { id: "source" },
  { id: "query" },
  { id: "submit" },
];

export const MultiStepForm = () => {
  const [formData, setForm] = useForm(defaultData);
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
        // "owner": UserService.getUsername(),
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

  const props4 = { submit, navigation };


  switch (step.id) {
    case "info":
      return <Info {...props1} />;
    case "source":
      return <Source {...props2} />;
    case "query":
      return <Query {...props3} />;
    case "submit":
      return <Submit {...props4} />;
  }

  return (
    <div>
      <h1>Multi step form</h1>
    </div>
  );
};

import { Button } from "@mui/material";

export default function ActionButtons(props){
    const handleBack = () => {
      props.previousStep();
    };
  
    const handleNext = () => {
      props.nextStep();
    };
  
    const handleFinish = () => {
      props.lastStep();
    };
  
    return (
      <div>
  
        {props.currentStep > 1 && (
  
          <Button onClick={handleBack}>Back</Button>
  
        )}
  
        {props.currentStep < props.totalSteps -1 && (
          <Button onClick={handleNext}>Next</Button>
        )}
        {props.currentStep === props.totalSteps - 1 && (
          <Button onClick={handleFinish}>Finish</Button>
        )}
  
  
      </div>
    );
  };
import * as React from "react";
import useRecorder from "./useRecorder";

function SongIdentifi() {
    let [audioURL, isRecording, startRecording, stopRecording] = useRecorder();
  return (
    <div >
      <audio src={audioURL} controls />
      <button onClick={startRecording} disabled={isRecording}>
        start recording
      </button>
      <button onClick={stopRecording} disabled={!isRecording}>
        stop recording
      </button> 
    </div>
  );
}

export default SongIdentifi;

 
import axios from 'axios'

const getAll = () => {
  return axios.get("/tutorials");
};
const runDags = id => {
  return axios.get(`/tutorials/${id}`);
};
const testAPI = () => {
  return axios.get("https://mocki.io/v1/1d9828aa-dea2-44f0-a5fd-c1f38a827cfb");
}
const AirflowService = {
    getAll,
    runDags,
    testAPI
}

export default AirflowService;
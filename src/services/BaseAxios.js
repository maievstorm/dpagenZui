import axios from 'axios';

export default axios.create({
  baseURL: 'https://dpzapi.apps.xplat.fis.com.vn/api/v1',
});
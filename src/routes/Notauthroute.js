import { useRoutes } from 'react-router-dom';

// routes
import Notauth from './Notauth';
import config from 'config';

// ==============================|| ROUTING RENDER ||============================== //

export default function Notauthenroute() {
    return useRoutes([ Notauth], config.basename);
}

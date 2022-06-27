import * as minio from "minio";
const mc = new minio.Client(
   
    {
            endPoint: "apilakedpa.apps.xplat.fis.com.vn",
            useSSL: true,
            port: 443,
            accessKey: "s2l92I0TXj01BOGP",
            secretKey: "Q25hRHG13VxoKPrFmgLuXMDOi3WFOLFk"
    }
);
export default mc
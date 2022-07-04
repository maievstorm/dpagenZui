import * as minio from "minio";
const DpzStorageConf = new minio.Client(
   
    {
            endPoint: "apilakedpa.apps.xplat.fis.com.vn",
            useSSL: true,
            port: 443,
            accessKey: "naQrl3yAjoue8o22",
            secretKey: "A0d6ZmTAbcVrhgTorNzCFBddtAWUjruP"
    }
);
export default DpzStorageConf
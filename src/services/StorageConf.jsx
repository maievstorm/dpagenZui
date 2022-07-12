import * as minio from "minio";
// const DpzStorageConf = new minio.Client(
   
//     {
//             endPoint: "apilakedpa.apps.xplat.fis.com.vn",
//             useSSL: true,
//             port: 443,
//             accessKey: "naQrl3yAjoue8o22",
//             secretKey: "A0d6ZmTAbcVrhgTorNzCFBddtAWUjruP"
//     }
// );
// export default DpzStorageConf

export const DpzStorageConf = async (akey, skey ) => {
    let StoreConf
    try {
        StoreConf = new minio.Client(
   
            {
                    endPoint: "apilakedpa.apps.xplat.fis.com.vn",
                    useSSL: true,
                    port: 443,
                    accessKey: akey,
                    secretKey:  skey
            }
        );
    } catch (err) {
        console.log(err);
    }
    return StoreConf
}
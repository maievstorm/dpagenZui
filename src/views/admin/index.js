import React from "react";
import RenderOnRole from "components/RenderOnRole";


// ==============================|| Bigdata Page ||============================== //

const AdminPage = () => (

    <div>
        user thuong
        <br></br>
        <RenderOnRole roles={['admin']}>
            Admin
           
        </RenderOnRole>

    </div>

);

export default AdminPage;

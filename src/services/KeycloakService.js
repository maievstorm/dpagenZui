import BaseAxios from "./BaseAxios";
import UserService from "./UserService";



export const addUser = async (username, firstName, lastName, email, password) => {
    let policy = 'readwrite'
    let response
    const router = '/keycloak/addUser'
    try {
        response = await BaseAxios({
            method: 'post',
            url: router,
            data: {
                username: username,
                firstName: firstName,
                lastName: lastName,
                email: email,
                password: password,
                policy: policy

            },
            headers: { "Authorization": `Bearer ${UserService.getToken()}` },

        });
    } catch (err) {
        console.log(err);
    }
    return response
}



const KeycloakService = {
    addUser
};

export default KeycloakService;
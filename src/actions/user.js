import axios from "axios";

export const registration = async (email, password) => {
    try {
        const responce = await axios.post('http://localhost:7777/api/auth/registration', {
            email, password
        })
        alert(responce)
    } catch (e) {
        console.log(123)
        console.log(e)
    }

}
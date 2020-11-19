import axios from 'axios';

export const axiosWithAuth = () => {
    const token = localStorage.getItem("token");

    return axios.create({
        baseURL: "https://water-my-plants-2020.herokuapp.com/",
        headers: { Authorization: token }
    });
};
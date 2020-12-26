import axios from "axios"

let baseUrl = "http://localhost:3001";

let api = {
    get: (endpoint, config) => axios.get(baseUrl + endpoint, config),
    post: (endpoint, values, config) => axios.post(baseUrl + endpoint, values, config),
    getBaseUrl: () => baseUrl
};

export default api;
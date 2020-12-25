import axios from "axios"

let base_url = "http://localhost:3001";

let api = {
    get: (endpoint, config) => axios.get(base_url + endpoint, config),
    post: (endpoint, values, config) => axios.post(base_url + endpoint, values, config)
};

export default api;
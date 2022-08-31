import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL;
const PATH_ALL_DATAS = 'api/WarehouseReps';

export const getDatas = () => {
    return axios.get(`${API_URL}${PATH_ALL_DATAS}`);
};
export const getDatasbyId = (id) => {
    return axios.get(`${API_URL}${PATH_ALL_DATAS}/${id}`);
};

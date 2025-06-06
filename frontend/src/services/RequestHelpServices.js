
// libs
import axios from 'axios';


// create requestHelp
export const postRequest = async (data, userID) =>{
    const response = await axios.post(`http://localhost:2130/request/${userID}`, data, { withCredentials: true });
    return response;
};


// update requestHelp
export const updateRequest = async (data, requestID) =>{
    const response = await axios.put(`http://localhost:2130/request/${requestID}`, data, { withCredentials: true });
    return response;
};


// delete requestHelp
export const deleteRequest = async (requestID) =>{
    const response = await axios.delete(`http://localhost:2130/request/${requestID}`, { withCredentials: true });
    return response;
};
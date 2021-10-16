import axios from 'axios';

const axiosWithAuth = ()=> {
    
  const axiosWithAuth = () => {
    const token = localStorage.getItem('token');
        return axios.create({ headers: {authorization: token}});
  };
};

// const axiosWithAuth = () => {
//   return axios.create({ headers: { authentication: token } });
// };

export default axiosWithAuth;

//Task List:
//1. Complete axiosWithAuth
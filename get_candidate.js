//Search in catsone the ID of candidate with the telephone number
const axios = require('axios');
require('dotenv').config();

const instance_catsone = axios.create({
    baseURL: 'https://api.catsone.com/v3',
    headers: {
      'authorization': 'Token '+process.env.KEY_CATSON,
      'Content-Type': 'application/json',
      'User-Agent': 'bot/EKYP'   
    },
    method: 'post',
    responseType: 'json',
    responseEncoding: 'utf8',
    //timeout: 5000      
  });

const getIdCandidate = async (tel) =>
  await instance_catsone.post('/candidates/search?query=',{field:"phones",filter:"contains",value:tel})
  .then(function (response) {
    data = response.data
    if(data.total == 1) {
      candidate = data._embedded.candidates[0];
      return candidate;
    }
  })
  .catch(function (error) {
    console.log(error);
  });

exports.getIdCandidate = getIdCandidate
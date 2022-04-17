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

  const postActivity = async (data) =>
  await instance_catsone.post('/candidates/'+ data.id +'/activities',{type:data.activity})
  .then(function (response) {
    data = response.data
    console.log(data);
    return true;
  })
  .catch(function (error) {
    console.log(error);
  });

exports.postActivity = postActivity
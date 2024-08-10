import axios from 'axios';


const options = {
    method: 'GET',
    url: 'https://instagram-scraper-api2.p.rapidapi.com/v1/likes',
    params: {
      code_or_id_or_url: 'CxYQJO8xuC6'
    },
    headers: {
      'x-rapidapi-key': 'ec224f4b3emsh509ba0f7ea9b2a3p1dd7a0jsn6d9930a3bb84',
      'x-rapidapi-host': 'instagram-scraper-api2.p.rapidapi.com'
    }
  };

  const getSlider=async ()=>{
    const result = await axios.request(options);
  return result.data.data;
 }
 export default {
  getSlider
 }


import axios from 'axios';

const baseUrl = process.env.REACT_APP_BASE_URL

export async function rutaApi (type,nameRuta){
  try {
    const response = await axios({
        url: `${baseUrl}/${nameRuta}`,
        method: type
    })
    return response;
  } catch (e) {
      console.log(e);
  }
}
import axios from 'axios';
import { ENV_VARS } from '../config/envVars.js';

const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMzRkOTcxMzgxMjI4NDhhOTE5MzgwMDhjNWMzNWYwZiIsIm5iZiI6MTcyMzkzODQ1MC45LCJzdWIiOiI2NmMxMzUzZjRmMjQwNjdlM2UwM2MzNWEiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.9SU0FvE_Rx5TjA3tV9XkOQ1RY8MsxbOCZkjemkBPLOk'
    }
  };
  
  export const fetchFromTmdb = async (url) => {
    const options = {
          headers: {
          accept: 'application/json',
          Authorization: 'Bearer ' + ENV_VARS.TMDB_API_KEY
        }
      };

      const response = await axios.get(url, options)

      if(response.status !== 200) {
        throw new Error('Failed to fetch data from TMDB'+ response.statusText);
      }
      return response.data

}
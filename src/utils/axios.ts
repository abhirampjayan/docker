import axios from 'axios';

export const axiosWSInstance = axios.create({
  baseURL: 'http://api.weatherstack.com',
  params: {
    access_key: process.env.WEATHER_STACK_API_KEY,
  },
});

import axios from 'axios';

export const axiosWSInstance = axios.create({
  baseURL: 'http://api.weatherstack.com',
  params: {
    access_key: process.env.WEATHER_STACK_API_KEY,
  },
});

export const axiosGeoInstance = axios.create({
  baseURL: 'https://api.geoapify.com/v1/',
  params: {
    apiKey: process.env.GEOAPIFY_API_KEY,
  },
});

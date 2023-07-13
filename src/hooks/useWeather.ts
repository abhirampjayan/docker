import { useCallback } from 'react';
import { axiosWSInstance } from '../utils/axios';
import { WeatherStackResponse } from '../types';
import { useWeatherContext } from './useWeatherContext';

export const useWeather = () => {
  const { setWeather } = useWeatherContext();
  const getCurrentWeather = useCallback(async (city = 'London') => {
    let response = await axiosWSInstance.get('current', {
      params: {
        query: city,
      },
    });
    if (setWeather === null) return response;
    setWeather(response.data);
  }, []);

  return { getCurrentWeather };
};

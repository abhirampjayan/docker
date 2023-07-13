import { useCallback } from 'react';
import { axiosWSInstance } from '../utils/axios';
import { WeatherStackResponse } from '../types';

export const useWeather = () => {
  const getCurrentWeather = useCallback(async (city = 'London') => {
    let response = await axiosWSInstance.get('current', {
      params: {
        query: city,
      },
    });
    return response;
  }, []);

  return { getCurrentWeather };
};

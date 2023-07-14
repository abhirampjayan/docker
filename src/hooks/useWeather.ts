import { useCallback } from 'react';
import { axiosWSInstance } from '../utils/axios';
import { useWeatherContext } from './useWeatherContext';

export const useWeather = () => {
  const { setWeather } = useWeatherContext();
  const { setError } = useWeatherContext();

  const getCurrentWeather = useCallback(async (city = 'London') => {
    let response = await axiosWSInstance.get('current', {
      params: {
        query: city,
      },
    });

    if (setWeather === null) return response;
    console.log(response.data);
    if (response.data.current) setWeather(response.data);
    else {
      console.log('asdf : ', setError);
      setError &&
        setError(
          `We coudln\'t find a city named ${city}. Retry with valid entry.`
        );
    }
  }, []);

  return { getCurrentWeather };
};

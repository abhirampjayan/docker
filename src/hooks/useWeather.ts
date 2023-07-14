import { useCallback } from 'react';
import { axiosWSInstance } from '../utils/axios';
import { useWeatherContext } from './useWeatherContext';

export const useWeather = () => {
  const { setWeather, setIsLoading } = useWeatherContext();
  const { setError } = useWeatherContext();

  const getCurrentWeather = useCallback(async (city = 'London') => {
    setIsLoading && setIsLoading(true);
    let response = await axiosWSInstance.get('current', {
      params: {
        query: city,
      },
    });

    if (setWeather === null) {
      setIsLoading && setIsLoading(false);
      return response;
    }
    if (response.data.current) {
      setWeather(response.data);
      setIsLoading && setIsLoading(false);
    } else {
      setIsLoading && setIsLoading(false);
      setError &&
        setError(
          `We coudln\'t find a city named ${city}. Retry with valid entry.`
        );
    }
  }, []);

  return { getCurrentWeather };
};

import { useContext } from 'react';
import { WeatherContext } from '../context/WeatherContext';

export const useWeatherContext = () => {
  const context = useContext(WeatherContext);
  if (!context) {
    throw new Error(
      'WeatherContext must be used within a WeatherContextProvider'
    );
  }
  return context;
};

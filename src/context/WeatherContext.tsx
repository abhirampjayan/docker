import {
  FC,
  PropsWithChildren,
  createContext,
  useEffect,
  useState,
} from 'react';
import { WeatherStackResponse } from '../types';
import { useWeather } from '../hooks/useWeather';
import { axiosGeoInstance } from '../utils/axios';

interface IWeatherContext {
  isLoading: boolean;
  weather: WeatherStackResponse | null;
  setWeather: React.Dispatch<
    React.SetStateAction<WeatherStackResponse | null>
  > | null;
  setError?: React.Dispatch<React.SetStateAction<string>>;
  setIsLoading?: React.Dispatch<React.SetStateAction<boolean>>;
  error: string;
}

const init: IWeatherContext = {
  isLoading: true,
  weather: null,
  setWeather: null,
  error: '',
};

export const WeatherContext = createContext<IWeatherContext | null>(init);

const WeatherContextProvider: FC<PropsWithChildren> = ({ children }) => {
  const abortController = new AbortController();
  const [isLoading, setIsLoading] = useState(true);
  const [weather, setWeather] = useState<WeatherStackResponse | null>(null);
  const { getCurrentWeather } = useWeather();
  const [error, setError] = useState('');

  useEffect(() => {
    setIsLoading(true);
    navigator.geolocation.getCurrentPosition(async (position) => {
      const { latitude, longitude } = position.coords;
      try {
        const response = await axiosGeoInstance.get('geocode/reverse', {
          params: {
            lat: latitude,
            lon: longitude,
          },
        });
        const data = response.data;
        const country = data.features[0].properties.country;
        getCurrentWeather(country).then((response) => {
          setWeather(response?.data);
          setIsLoading(false);
        });
        console.log('data', data);
      } catch (error) {
        setIsLoading(false);
        console.log('Error fetching country details:', error);
      }
    });

    return () => {
      abortController.abort();
    };
  }, []);

  const state = {
    weather,
    setWeather,
    error,
    setError,
    isLoading,
    setIsLoading,
  };

  return (
    <WeatherContext.Provider value={state}>{children}</WeatherContext.Provider>
  );
};

export default WeatherContextProvider;

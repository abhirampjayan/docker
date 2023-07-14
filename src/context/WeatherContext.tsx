import {
  FC,
  PropsWithChildren,
  createContext,
  useEffect,
  useState,
} from 'react';
import { WeatherStackResponse } from '../types';
import { useWeather } from '../hooks/useWeather';

interface IWeatherContext {
  // isLoading: boolean;
  weather: WeatherStackResponse | null;
  setWeather: React.Dispatch<
    React.SetStateAction<WeatherStackResponse | null>
  > | null;
}

const init: IWeatherContext = {
  // isLoading: false,
  weather: null,
  setWeather: null,
};

export const WeatherContext = createContext<IWeatherContext | null>(init);

const WeatherContextProvider: FC<PropsWithChildren> = ({ children }) => {
  const abortController = new AbortController();
  // const [isLoading, setIsLoading] = useState(false);
  const [weather, setWeather] = useState<WeatherStackResponse | null>(null);
  const { getCurrentWeather } = useWeather();

  useEffect(() => {
    // setIsLoading(true);
    getCurrentWeather().then(response=>setWeather(response?.data));
    // setIsLoading(false);
    return () => {
      abortController.abort();
    };
  }, []);

  const state = { weather, setWeather };

  return (
    <WeatherContext.Provider value={state}>{children}</WeatherContext.Provider>
  );
};

export default WeatherContextProvider;

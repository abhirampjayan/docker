import {
  FC,
  PropsWithChildren,
  createContext,
  useEffect,
  useState,
} from 'react';
import { WeatherStackResponse } from '../types';

interface WeatherContext {
  isLoading: boolean;
  weather: WeatherStackResponse | null;
}

const init: WeatherContext = {
  isLoading: false,
  weather: null,
};

const WeatherContext = createContext<WeatherContext>(init);

const WeatherContextProvider: FC<PropsWithChildren> = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [weather, setWeather] = useState<WeatherStackResponse | null>(null);

  useEffect(() => {
    setIsLoading(true);
    return () => {
      setIsLoading(false);
    };
  }, []);

  const state = { isLoading, weather };

  return (
    <WeatherContext.Provider value={state}>{children}</WeatherContext.Provider>
  );
};

export default WeatherContextProvider;

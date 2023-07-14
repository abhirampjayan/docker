import { FC, PropsWithChildren, createContext, useState } from 'react';
import { useWeather } from '../hooks/useWeather';
import { useWeatherContext } from '../hooks/useWeatherContext';

interface IPlaceSearchContext {
  cityText: string;
  onSubmit?: (event: React.FormEvent<HTMLFormElement>) => void;
  setCityText?: React.Dispatch<React.SetStateAction<string>>;
}

export const PlaceSearchContext = createContext<IPlaceSearchContext>({
  cityText: '',
});

const PlaceSearchContextProvider: FC<PropsWithChildren> = ({ children }) => {
  const [cityText, setCityText] = useState('');
  const { getCurrentWeather } = useWeather();
  const { error, setError } = useWeatherContext();

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError && setError('');
    if (!cityText) return;
    await getCurrentWeather(cityText);
    setCityText('');
  };

  const value = {
    cityText,
    error,
    onSubmit,
    setCityText,
  };

  return (
    <PlaceSearchContext.Provider value={value}>
      {children}
    </PlaceSearchContext.Provider>
  );
};

export default PlaceSearchContextProvider;

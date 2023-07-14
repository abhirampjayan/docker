import { Children, FC, PropsWithChildren, createContext, useState } from 'react';
import { useWeather } from '../hooks/useWeather';

interface IPlaceSearchContext {
  cityText: string;
  error: string;
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  setCityText: React.Dispatch<React.SetStateAction<string>>;
}

export const PlaceSearchContext = createContext<IPlaceSearchContext>({
  cityText: '',
  error: '',
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => {},
  setCityText: () => {},
});

const PlaceSearchContextProvider: FC<PropsWithChildren> = ({children}) => {
  const [cityText, setCityText] = useState('');
  const [error, setError] = useState('');
  const { getCurrentWeather } = useWeather();

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (cityText) {
    }
    getCurrentWeather(cityText);
    setCityText('');
  };
  const value = {
    cityText,
    error,
    onSubmit,
    setCityText,
  };

  return (
    <PlaceSearchContext.Provider value={value}>{children}</PlaceSearchContext.Provider>
  );
};

export default PlaceSearchContextProvider;

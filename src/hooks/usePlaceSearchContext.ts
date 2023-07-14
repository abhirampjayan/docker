import { useContext } from 'react';
import { PlaceSearchContext } from '../context/PlaceSearchContext';

export const usePlaceSearchContext = () => {
  const context = useContext(PlaceSearchContext);
  if (!context) {
    throw new Error(
      'PlaceSearchContext must be used within a PlaceSearchContextProvider'
    );
  }
  return context;
};

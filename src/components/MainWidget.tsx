import { FC, PropsWithChildren } from 'react';
import { useWeatherContext } from '../hooks/useWeatherContext';
import { IoLocationOutline, IoTimeOutline } from 'react-icons/io5';
import WeatherIcon from './WeatherIcon';
import Loader from './Loader';

const MainWidget: FC<PropsWithChildren> = () => {
  const { weather, isLoading } = useWeatherContext();
  return (
    <div className="glass col-span-12 xl:col-span-6 flex flex-col h-full min-h-[300px] p-8">
      {isLoading ? (
        <div className="flex h-full justify-center items-center">
          <Loader />
        </div>
      ) : (
        <div className="flex items-center h-full justify-around flex-wrap">
          <div className="flex flex-col">
            <div className="flex justify-center font-medium text-2xl capitalize mb-6">
              <h2 className="flex items-center gap-2">
                {weather?.current?.weather_descriptions || 'NA'}
              </h2>
            </div>
            <div className="h-48">
              <WeatherIcon
                weatherCode={weather?.current?.weather_code || 113}
                isDay={weather?.current?.is_day || true}
              />
            </div>
          </div>
          <div className="flex flex-col gap-5 items-center">
            <span className="heading flex text-7xl items-end">
              {weather?.current?.temperature || 'NA'}&deg;
            </span>
            <div className="flex flex-col justify-around">
              <span className="flex items-center gap-2">
                <IoTimeOutline />
                {weather?.current?.observation_time || 'NA'} |{' '}
                {weather?.location?.timezone_id || 'NA'}
              </span>
              <span className="flex items-center gap-2">
                <IoLocationOutline />
                {weather?.location?.name || 'NA'},
                {weather?.location?.country || 'NA'}
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MainWidget;

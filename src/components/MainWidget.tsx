import { FC, PropsWithChildren } from 'react';
import weatherimg from '../assets/svgs/SVG/partially_cloudy.svg';
import { useWeatherContext } from '../hooks/useWeatherContext';
import {
  IoLocation,
  IoLocationOutline,
  IoThermometer,
  IoThermometerOutline,
  IoTimeOutline,
} from 'react-icons/io5';

const MainWidget: FC<PropsWithChildren> = () => {
  const { weather } = useWeatherContext();
  return (
    <div className="glass col-span-6 flex flex-col h-min">
      <>
        <div className="flex items-center justify-around">
          <img src={weatherimg} className="h-52" />
          <div className="flex flex-col gap-5 items-center">
            <span className="heading flex text-7xl items-end">
              {weather?.current?.temperature || 'NA'}&deg;
            </span>
            <div className="flex flex-col justify-around">
              <span className="flex items-center gap-2">
                <IoTimeOutline />
                {weather?.current?.observation_time || 'NA'}
              </span>
              <span className="flex items-center gap-2">
                <IoLocationOutline />
                {weather?.location?.name || 'NA'},
                {weather?.location?.country || 'NA'}
              </span>
            </div>
          </div>
        </div>
      </>
    </div>
  );
};

export default MainWidget;

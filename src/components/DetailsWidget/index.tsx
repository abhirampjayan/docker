import { FC } from 'react';
import { useWeatherContext } from '../../hooks/useWeatherContext';
import {
  IoBalloon,
  IoBuild,
  IoCloud,
  IoFlag,
  IoLocate,
  IoNavigate,
  IoPush,
  IoSpeedometer,
  IoSunny,
  IoThermometer,
  IoWater,
} from 'react-icons/io5';
import DetailsItem from './DetailsItem';
import Loader from '../Loader';

type Props = {};

const DetailsWidget: FC<Props> = (props) => {
  const { weather, isLoading } = useWeatherContext();

  const details = [
    {
      icon: <IoCloud />,
      label: 'Cloud Cover',
      value: weather?.current?.cloudcover || '',
    },
    {
      icon: <IoWater />,
      label: 'Humidity',
      value: weather?.current?.humidity || '',
    },
    {
      icon: <IoPush />,
      label: 'Pressure',
      value: weather?.current?.pressure || '',
    },
    {
      icon: <IoThermometer />,
      label: 'Temparature',
      value: weather?.current?.temperature || '',
    },
    {
      icon: <IoSunny />,
      label: 'UV Index',
      value: weather?.current?.uv_index || '',
    },
    {
      icon: <IoBalloon />,
      label: 'Wind Degree',
      value: weather?.current?.wind_degree || '',
    },
    {
      icon: <IoSpeedometer />,
      label: 'Wind Speed',
      value: weather?.current?.wind_speed || '',
    },
    {
      icon: <IoNavigate />,
      label: 'Wind Diection',
      value: weather?.current?.wind_dir || '',
    },
    {
      icon: <IoLocate />,
      label: 'Location',
      value: weather?.location?.lat || '' + ' ' + weather?.location.lon || '',
    },
    {
      icon: <IoFlag />,
      label: 'Country',
      value: weather?.location?.country || '',
    },
    {
      icon: <IoBuild />,
      label: 'City',
      value: weather?.location?.region || '',
    },
  ];

  const Details = details.map(({ icon, label, value }) => (
    <DetailsItem icon={icon} key={label} label={label} value={value} />
  ));

  return (
    <div className="glass h-full col-span-12 xl:col-span-6 flex flex-col min-h-[300px] p-8">
      {isLoading ? (
        <div className="flex h-full justify-center items-center">
          <Loader />
        </div>
      ) : (
        <div className="flex flex-col">
          <h2 className="heading mb-5 text-xl">Details</h2>
          <div className="grid grid-cols-12 gap-2 place-content-center">
            {Details}
          </div>
        </div>
      )}
    </div>
  );
};

export default DetailsWidget;

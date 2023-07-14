import { FC } from 'react';
import { useWeatherContext } from '../hooks/useWeatherContext';
import {
  IoBalloon,
  IoBuild,
  IoCloud,
  IoFlag,
  IoLocate,
  IoPush,
  IoSpeedometer,
  IoSunny,
  IoThermometer,
  IoWater,
} from 'react-icons/io5';

type Props = {};

const DetailsWidget: FC<Props> = (props) => {
  const { weather } = useWeatherContext();
  return (
    <div className="glass h-max col-span-6 flex flex-col p-8">
      <div className="flex flex-col">
        <h2 className="heading mb-5 text-xl">Details</h2>
        <div className="grid grid-cols-4 gap-2 place-content-center">
          <span className="flex items-center gap-3">
            <IoCloud /> Cloud Cover :
          </span>
          <span>{weather?.current?.cloudcover}</span>
          <span className="flex items-center gap-2">
            <IoWater /> Humidity :
          </span>
          <span>{weather?.current?.humidity}</span>
          <span className="flex items-center gap-2">
            <IoPush /> Pressure :
          </span>
          <span>{weather?.current?.pressure}</span>
          <span className="flex items-center gap-2">
            <IoThermometer /> Temparature :
          </span>
          <span>{weather?.current?.temperature}</span>
          <span className="flex items-center gap-2">
            <IoSunny /> UV Index :
          </span>
          <span>{weather?.current?.uv_index}</span>
          <span className="flex items-center gap-2">
            <IoBalloon /> Wind Degree :
          </span>
          <span>{weather?.current?.wind_degree}</span>
          <span className="flex items-center gap-2">
            <IoSpeedometer /> Wind Speed :
          </span>
          <span>{weather?.current?.wind_speed}</span>
          <span className="flex items-center gap-2">
            <IoBalloon /> Wind Direction :
          </span>
          <span>{weather?.current?.wind_dir}</span>
          <span className="flex items-center gap-2">
            <IoLocate /> Location :
          </span>
          <span>
            {weather?.location?.lat} {weather?.location?.lon}
          </span>{' '}
          <span className="flex items-center gap-2">
            <IoFlag /> Country :
          </span>
          <span>{weather?.location?.country}</span>
          <span className="flex items-center gap-2 col-span-1">
            <IoBuild /> City :
          </span>
          <span className=' col-span-3'>{weather?.location?.region}</span>
        </div>
      </div>
    </div>
  );
};

export default DetailsWidget;

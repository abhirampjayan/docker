import { IoWarning } from 'react-icons/io5';
import { useWeatherContext } from '../hooks/useWeatherContext';

const ErrorDisplay = () => {
  const { error } = useWeatherContext();
  return error ? (
    <div className="glass container mx-auto flex justify-center items-center">
      <span className="text-wred font-semibold flex gap-2 items-center">
        <IoWarning size={20}/> {error ? error : null}
      </span>
    </div>
  ) : null;
};

export default ErrorDisplay;

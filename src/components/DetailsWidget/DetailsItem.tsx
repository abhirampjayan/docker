import { ReactElement } from 'react';

type Props = {
  icon: ReactElement;
  label: string;
  value: string | number;
};

const DetailsItem = ({ icon, value, label }: Props) => {
  return (
    <div className="col-span-12 md:col-span-6 lg:col-span-4 xl:col-span-6 flex gap-3 md:grid-cols-2">
      <span className="flex items-center gap-3">
        {icon} {label}:
      </span>
      <span>{value}</span>
    </div>
  );
};

export default DetailsItem;

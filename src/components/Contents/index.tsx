import React from 'react';
import MainWidget from '../MainWidget';
import DetailsWidget from '../DetailsWidget';

type Props = {};

const Contents = (props: Props) => {
  return (
    <div className="flex flex-grow container mx-auto overflow-y-auto">
      <div className="grid grid-cols-12 w-full h-min gap-4">
        <MainWidget />
        <DetailsWidget />
      </div>
    </div>
  );
};

export default Contents;

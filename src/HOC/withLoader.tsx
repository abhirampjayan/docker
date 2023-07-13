import React, { PropsWithChildren } from 'react';
import { useWeatherContext } from '../hooks/useWeatherContext';

type Props = {};

export const withLoader = <P extends object>(
  WrappedComponent: React.ComponentType<P>
) => {
  const WithLoader: React.FC<P> = () => {
    return (
      <section className="sec-loading">
        <div className="one"></div>
      </section>
    );
  };

  WithLoader.displayName = `WithLoader(${
    WrappedComponent.displayName || WrappedComponent.name
  })`;

  return WithLoader;
};

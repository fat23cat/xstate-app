import React, { FC } from 'react';
import { useMachineContext } from './context';
import { Home, Cartridge, Experiment, Washing } from './pages';

export const Router: FC = () => {
  const { machine } = useMachineContext();

  switch (machine) {
    case 'home':
      return <Home />;
    case 'cartridge':
      return <Cartridge />;
    case 'experiment':
      return <Experiment />;
    case 'wash':
      return <Washing />;
    default:
      return <></>;
  }
};

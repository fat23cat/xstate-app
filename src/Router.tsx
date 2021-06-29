import React, { FC } from 'react';
import { Home, Cartridge, Experiment, Washing } from './pages';

interface RouterProps {
  machine: string;
  machineState: string;
  sendCommand: (command: string) => void;
}

export const Router: FC<RouterProps> = ({
  machine,
  machineState,
  sendCommand
}) => {
  switch (machine) {
    case 'home':
      return <Home machineState={machineState} sendCommand={sendCommand} />;
    case 'cartridge':
      return (
        <Cartridge machineState={machineState} sendCommand={sendCommand} />
      );
    case 'experiment':
      return (
        <Experiment machineState={machineState} sendCommand={sendCommand} />
      );
    case 'wash':
      return <Washing machineState={machineState} sendCommand={sendCommand} />;
    default:
      return <></>;
  }
};

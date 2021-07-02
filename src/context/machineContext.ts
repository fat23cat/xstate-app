import { createContext } from 'react';

interface Context {
  machine: string;
  machineState: string;
  send: (command: string) => void;
}

export const MachineContext = createContext({} as Context);

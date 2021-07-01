import React from 'react';
import './App.css';
import { rootMachine } from './machines';
import { useMachine } from '@xstate/react';
import { Router } from './Router';

const washService = () => {
  return new Promise<void>((resolve) => {
    setTimeout(() => {
      resolve();
    }, 1000);
  });
};

function App() {
  const [state, send] = useMachine(rootMachine, {
    services: {
      washService
    }
  });
  const machine = Object.keys(state.value)[0] as string;
  const machineState = Object.values(state.value)[0] as string;

  console.log('machine', machine);
  console.log('machineState', machineState);

  const sendCommand = (command: string) => {
    send(command);
  };

  return (
    <div
      style={{
        display: 'flex',
        width: '100%',
        height: '100%',
        margin: '0 20px 20px 20px'
      }}>
      <Router
        machine={machine}
        machineState={machineState}
        sendCommand={sendCommand}
      />
    </div>
  );
}

export default App;

import React, { useEffect } from 'react';
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

const persistedState =
  JSON.parse(localStorage.getItem('rootMachine') as string) ||
  rootMachine.initialState;

function App() {
  const [state, send] = useMachine(rootMachine, {
    state: persistedState,
    services: {
      washService
    }
  });
  const machine = Object.keys(state.value)[0] as string;
  const machineState = Object.values(state.value)[0] as string;

  useEffect(() => {
    const jsonState = JSON.stringify(state);
    localStorage.setItem('rootMachine', jsonState);
  }, [state]);

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

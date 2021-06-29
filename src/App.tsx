import React from 'react';
import './App.css';
import { rootMachine } from './machines';
import { useMachine } from '@xstate/react';
import { Router } from './Router';

function App() {
  const [state, send] = useMachine(rootMachine);
  const machine = Object.keys(state.value)[0] as string;
  const machineState = Object.values(state.value)[0] as string;

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

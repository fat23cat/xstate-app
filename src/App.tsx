import React, { useEffect } from 'react';
import './App.css';
import { interpretedMachine } from './machine';
import { useActor } from '@xstate/react';
import { Router } from './Router';
import { MachineContext } from './context';





function App() {
  const [state, send] = useActor(interpretedMachine);
  const machine = Object.keys(state.value)[0] as string;
  const machineState = Object.values(state.value)[0] as string;

  useEffect(() => {
    const jsonState = JSON.stringify(state);
    localStorage.setItem('rootMachine', jsonState);
  }, [state]);

  return (
    <MachineContext.Provider
      value={{
        state,
        machine,
        machineState,
        send
      }}>
      <div
        style={{
          display: 'flex',
          width: '100%',
          height: '100%',
          margin: '0 20px 20px 20px'
        }}>
        <Router />
      </div>
    </MachineContext.Provider>
  );
}

export default App;

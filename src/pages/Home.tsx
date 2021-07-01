import React, { FC } from 'react';
import { useMachineContext } from '../context';

export const Home: FC = () => {
  const { send } = useMachineContext();

  return (
    <div>
      <h1>Home</h1>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <button
          onClick={() => {
            send('START_EXPERIMENT');
          }}>
          Start experiment
        </button>
      </div>
      <button
        style={{ marginTop: '10px' }}
        onClick={() => {
          send('WASH_INSTRUMENT');
        }}>
        Wash the instrument
      </button>
    </div>
  );
};

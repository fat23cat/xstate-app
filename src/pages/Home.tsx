import React, { FC } from 'react';
import { StepProps } from './models';

export const Home: FC<StepProps> = ({ machineState, sendCommand }) => {
  return (
    <div>
      <h1>Home</h1>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <button
          onClick={() => {
            sendCommand('START_EXPERIMENT');
          }}>
          Start experiment
        </button>
      </div>
      <button
        style={{ marginTop: '10px' }}
        onClick={() => {
          sendCommand('WASH_INSTRUMENT');
        }}>
        Wash the instrument
      </button>
    </div>
  );
};

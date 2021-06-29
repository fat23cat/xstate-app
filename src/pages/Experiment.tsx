import React, { FC } from 'react';
import { StepProps } from './models';

export const Experiment: FC<StepProps> = ({ machineState, sendCommand }) => {
  return (
    <div>
      <h1>Experiment</h1>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <button
          disabled={machineState === 'finish'}
          onClick={() => {
            sendCommand('RUN_EXPERIMENT');
          }}>
          Run experiment
        </button>
        <button
          disabled={machineState === 'finish'}
          style={{ marginTop: '10px' }}
          onClick={() => {
            sendCommand('PREV');
          }}>
          Prev
        </button>
      </div>
      {machineState === 'finish' && (
        <div>
          <p style={{ marginTop: '10px' }}>Experiment finished</p>
          <button
            onClick={() => {
              sendCommand('COMPLETE');
            }}>
            Back home
          </button>
        </div>
      )}
    </div>
  );
};

import React, { FC } from 'react';
import { useMachineContext } from '../context';

export const Experiment: FC = () => {
  const { send, machineState } = useMachineContext();

  return (
    <div>
      <h1>Experiment</h1>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <button
          disabled={machineState === 'finish'}
          onClick={() => {
            send('RUN_EXPERIMENT');
          }}>
          Run experiment
        </button>
        <button
          disabled={machineState === 'finish'}
          style={{ marginTop: '10px' }}
          onClick={() => {
            send('PREV');
          }}>
          Prev
        </button>
      </div>
      {machineState === 'finish' && (
        <div>
          <p style={{ marginTop: '10px' }}>Experiment finished</p>
          <button
            onClick={() => {
              send('COMPLETE');
            }}>
            Back home
          </button>
        </div>
      )}
    </div>
  );
};

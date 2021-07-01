import React, { FC } from 'react';
import { useMachineContext } from '../context';

export const Washing: FC = () => {
  const { send, machineState } = useMachineContext();

  return (
    <div>
      <h1>Washing the instrument</h1>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <button
          disabled={machineState !== 'idle'}
          onClick={() => {
            send('START_WASHING');
          }}>
          Wash
        </button>
        {machineState === 'idle' && (
          <button
            style={{ marginTop: '10px' }}
            onClick={() => {
              send('CANCEL');
            }}>
            Cancel
          </button>
        )}
        {machineState === 'washed' && (
          <>
            <p>Washing completed</p>
            <button
              onClick={() => {
                send('FINISH');
              }}>
              Back home
            </button>
          </>
        )}
      </div>
    </div>
  );
};

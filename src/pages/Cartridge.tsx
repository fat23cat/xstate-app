import React, { FC } from 'react';
import { useMachineContext } from '../context';

export const Cartridge: FC = () => {
  const { send, machineState } = useMachineContext();

  return (
    <div>
      <h1>Insert cartridge</h1>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <button
          onClick={() => {
            send('INSERT_CARTRIDGE');
          }}>
          Insert cartridge
        </button>
        <div style={{ display: 'flex', marginTop: '10px' }}>
          <button
            onClick={() => {
              send('PREV');
            }}>
            Cancel
          </button>
          <button
            style={{ marginLeft: '10px' }}
            disabled={machineState !== 'finish'}
            onClick={() => {
              send('NEXT');
            }}>
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

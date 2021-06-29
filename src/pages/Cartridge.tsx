import React, { FC } from 'react';
import { StepProps } from './models';

export const Cartridge: FC<StepProps> = ({ machineState, sendCommand }) => {
  return (
    <div>
      <h1>Insert cartridge</h1>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <button
          onClick={() => {
            sendCommand('INSERT_CARTRIDGE');
          }}>
          Insert cartridge
        </button>
        <div style={{ display: 'flex', marginTop: '10px' }}>
          <button
            onClick={() => {
              sendCommand('PREV');
            }}>
            Cancel
          </button>
          <button
            style={{ marginLeft: '10px' }}
            disabled={machineState !== 'finish'}
            onClick={() => {
              sendCommand('NEXT');
            }}>
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

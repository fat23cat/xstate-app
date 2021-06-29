import React, { FC } from 'react';
import { StepProps } from './models';

export const Washing: FC<StepProps> = ({ machineState, sendCommand }) => {
  return (
    <div>
      <h1>Washing the instrument</h1>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <button
          disabled={machineState !== 'idle'}
          onClick={() => {
            sendCommand('START_WASHING');
          }}>
          Wash
        </button>
        {machineState === 'idle' && (
          <button
            style={{ marginTop: '10px' }}
            onClick={() => {
              sendCommand('CANCEL');
            }}>
            Cancel
          </button>
        )}
        {machineState === 'finish' && (
          <>
            <p>Washing completed</p>
            <button
              onClick={() => {
                sendCommand('FINISH');
              }}>
              Back home
            </button>
          </>
        )}
      </div>
    </div>
  );
};

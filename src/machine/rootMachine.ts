import { interpret } from 'xstate';
import { Machine } from 'xstate';
const washService = () => {
  return new Promise<void>((resolve) => {
    setTimeout(() => {
      resolve();
    }, 1000);
  });
};
export const rootMachine = Machine({
  id: 'root',
  initial: 'home',
  states: {
    home: {
      id: 'home',
      initial: 'idle',
      states: {
        idle: {
          on: {
            START_EXPERIMENT: { target: '#cartridge' },
            WASH_INSTRUMENT: { target: '#wash' }
          }
        }
      }
    },
    wash: {
      id: 'wash',
      initial: 'idle',
      states: {
        idle: {
          on: {
            START_WASHING: {
              target: 'washing'
            },
            CANCEL: {
              target: '#home'
            }
          }
        },
        washing: {
          invoke: {
            src: 'washService',
            onDone: 'washed'
          }
        },
        washed: {
          on: {
            FINISH: {
              target: '#home'
            }
          }
        }
      }
    },
    cartridge: {
      id: 'cartridge',
      initial: 'idle',
      states: {
        idle: {
          on: {
            INSERT_CARTRIDGE: { target: 'finish' },
            PREV: {
              target: '#home'
            }
          }
        },
        finish: {
          on: {
            NEXT: {
              target: '#experiment'
            }
          }
        }
      }
    },
    experiment: {
      id: 'experiment',
      initial: 'idle',
      states: {
        idle: {
          on: {
            RUN_EXPERIMENT: { target: 'finish' },
            PREV: {
              target: '#cartridge'
            }
          }
        },
        finish: {
          on: {
            COMPLETE: { target: '#home' }
          }
        }
      }
    }
  }
},
{
  services: {
    washService
  }
});

const persistedState =
  JSON.parse(localStorage.getItem('rootMachine') as string) ||
  rootMachine.initialState;

export const interpretedMachine = interpret(rootMachine).start(persistedState);
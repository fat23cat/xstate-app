import { Machine } from 'xstate';

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
              target: 'finish'
            },
            CANCEL: {
              target: '#home'
            }
          }
        },
        finish: {
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
});

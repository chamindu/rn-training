import React from 'react';

const Timer = ({ start, stop, reset, time, status }) => (
  <div>
    <p>
      { time } ({ status })
    </p>
    <button
      disabled={status === 'Running'}
      onClick={() => reset()}>
      Reset
    </button>
    <button
      disabled={status === 'Running'}
      onClick={() => start()}>
      Start
    </button>
    <button
      disabled={status === 'Stopped'}
      onClick={stop}>
      Stop
    </button>
  </div>
);

export default Timer;
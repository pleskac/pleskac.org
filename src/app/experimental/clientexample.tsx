'use client';
import * as React from 'react';

import {css} from '../../../styled-system/css';

export function ClientExample() {
  const [value, setValue] = React.useState(0);
  const update = React.useCallback(() => setValue(value + 1), [value, setValue]);

  console.log('This message is on the client');

  return (
    <>
      <span
        className={css({
          fontWeight: '700',
        })}
      >
        I am on the client!
      </span>
      <button
        className={css({
          backgroundColor: 'background.raised',
          color: 'text',
          padding: '4px 8px',
          borderColor: 'border',
          borderWidth: '1px',
          borderStyle: 'solid',
          minWidth: '160px',
        })}
        onClick={update}
      >
        Client Counter: {value}
      </button>
    </>
  );
}

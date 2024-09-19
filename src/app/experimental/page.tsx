import * as React from 'react';
import {css} from '../../../styled-system/css';
import {NavBar} from '../components/nav';
import {ClientExample} from './clientexample';

export default function Blog() {
  console.log('This message is on the server only');

  return (
    <>
      <NavBar selected={'blog'} />
      <div
        className={css({
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '50px',
        })}
      >
        <span>Blog. I am on the server!</span>
        <ClientExample />
      </div>
    </>
  );
}

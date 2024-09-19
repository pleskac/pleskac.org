import * as React from 'react';
import {css} from '../../../styled-system/css';
import {NavBar} from '../components/nav';
import {IntroSummary} from '../components/intro-summary';

export default function Home() {
  return (
    <>
      <NavBar selected={'home'} />
      <main
        className={css({
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        })}
      >
        <IntroSummary />
      </main>
    </>
  );
}

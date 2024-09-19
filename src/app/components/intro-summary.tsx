import * as React from 'react';
import Link from 'next/link';
import {css} from '../../../styled-system/css';
import {GitHubIcon, InstagramIcon, LinkedInIcon} from './icons';

export function IntroSummary() {
  return (
    <div
      className={css({
        display: 'flex',
        flexDir: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '4em',
        textAlign: 'center',
      })}
    >
      <h1 className={css({fontWeight: '200', fontSize: '5em'})}>Mark Pleskač</h1>
      <span>Software Engineer</span>
      <div
        className={css({
          display: 'flex',
          gap: '2em',
          color: 'text.raised',
          paddingTop: '2em',
        })}
      >
        <Link href="https://www.github.com/pleskac/" aria-label="GitHub" passHref>
          <GitHubIcon />
        </Link>
        <Link href="https://www.linkedin.com/in/markpleskac/" aria-label="LinkedIn" passHref>
          <LinkedInIcon />
        </Link>
        <Link href="https://www.instagram.com/pleskac/" aria-label="Instagram" passHref>
          <InstagramIcon />
        </Link>
      </div>
    </div>
  );
}

import React from 'react';
import Link from 'next/link';

function Home() {
  return (
    <>
      <p>
        This repository consists of two exercises:
      </p>
      <ol>
        <li>
          <Link href="/exercises/01-screensaver">
            Screen Saver
          </Link>
        </li>
        <li>
          <Link href="/exercises/02-flash-messages">
            Flash Messages
          </Link>
        </li>
      </ol>
    </>
  );
}

export default Home;

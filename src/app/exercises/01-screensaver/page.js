import React from 'react';
import Link from 'next/link';

function ScreenSaverIndexPage() {
  return (
    <main>
      <p>Choose your color:</p>
      <ul>
        <li>
          <Link href="/exercises/01-screensaver/lavender">
            lavender
          </Link>
        </li>
        <li>
          <Link href="/exercises/01-screensaver/peachpuff">
            peachpuff
          </Link>
        </li>
        <li>
          <Link href="/exercises/01-screensaver/hotpink">
            hotpink
          </Link>
        </li>
        <li>
          <Link href="/exercises/01-screensaver/white">
            white
          </Link>
        </li>
      </ul>
    </main>
  );
}

export default ScreenSaverIndexPage;

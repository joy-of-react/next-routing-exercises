import React from 'react';

import './styles.css';

function ScreenSaverLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

export default ScreenSaverLayout;

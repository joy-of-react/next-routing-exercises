import React from 'react';

import './styles.css';

function HomeLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

export default HomeLayout;

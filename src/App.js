import React from 'react';

import Navigation from './layout/navigation/navigation';
import Main from './layout/main/main';

const App = ({ children }) => [
  <Navigation key="navigation" />,
  <Main key="main">
    {children}
  </Main>,
];

export default App;

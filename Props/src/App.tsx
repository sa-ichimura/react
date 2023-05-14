import React, { FC } from 'react';

// CharacterListで定義された型
import Props from './Props'
import StateApp from './StateApp';

import './App.css';

const App: FC = () => {
  return (
    <div className="container">
      <h1>8章</h1>
      <hr />
      <h2>Props</h2>
      <Props />
      <hr />
      <h2>State</h2>
      <StateApp />
    </div>
  );
};

export default App;

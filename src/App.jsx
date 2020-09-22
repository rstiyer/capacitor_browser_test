const capacitor = require('@capacitor/core');
import React from 'react';

const App = () => {
  const onClick = () => {
    return capacitor.Plugins.Browser.open({ url: 'https://www.google.com' });
  }
  return <button onClick={onClick}>Click me!</button>;
}

export default App;
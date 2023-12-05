
import React from 'react';
import Greeting from './Greeting';

const App = () => {
  return (
    <div>
      <h1>Welcome to My App</h1>
      {/* Greeting component with name prop */}
      <Greeting name="John" />

      {/* Greeting component with children prop */}
      <Greeting>Hello from the other side!</Greeting>
    </div>
  );
};

export default App;

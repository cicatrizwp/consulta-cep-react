import React from 'react';
import logo from './logo.svg';
import './App.css';

import Button from './components/Button/Button';
import InputField from './components/InputField/InputField';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Button />
        <InputField />
      </header>
    </div>
  );
}

export default App;

import React from 'react';
import './App.css';
import SearchForm from './components/SearchForm/SearchForm';


const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <SearchForm />
      </header>
    </div>
  );
}

export default App;

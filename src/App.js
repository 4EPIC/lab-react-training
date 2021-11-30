import React from 'react';
import logo from './logo.svg';
import './App.css';
import IdCard from './components/IdCard';
import IdCardList from './components/IdCardList';
import Greeting from './components/Greeting';
import GreetingsList from './components/GreetingsList';
import Random from './components/Random';

function App() {
  return (
    <div className="cards">
      <header>
        <IdCardList />
        <GreetingsList title="Greetings to:">
          <Greeting lang="de" name="Ludwig" />
          <Greeting lang="fr" name="François" />
        </GreetingsList>
        <Random min={1} max={6} />
        <Random min={1} max={100} />
      </header>
    </div>
  );
}

export default App;

import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Header, Footer } from '../Components';
import { TitleScreen, HomeScreen, Game } from '../Containers';
import './index.scss';

const App = () => {
  return (
    <div className="app" data-testid="App">
      <header className="app__header">
        <Header />
      </header>
      <main className="app__main">
        <Switch>
          <Route path="/game" component={Game} />
          <Route path="/home" component={HomeScreen} />
          <Route path="/" component={TitleScreen} />
        </Switch>

      </main>
      <footer className="app__footer">
        <Footer/>
      </footer>
    </div>
  );
}

export default App;

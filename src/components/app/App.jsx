import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CharactersPage from '../../Containers/CharactersPages';
import CharacterById from '../../Containers/CharacterById';
import Header from '../Header/Header';
import ThemeProvider from '../../state/ThemeContext';



export default function App() {
  


  return (
    <>
      <Router>
        <ThemeProvider>
          <Header />
          <Switch>
            <Route exact path="/" component={CharactersPage} />
            <Route path="/characters/:id" component={CharacterById} />
          </Switch>
        </ThemeProvider>
      </Router>
    </>
  );
}

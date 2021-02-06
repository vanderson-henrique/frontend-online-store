import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Kart, ProductDetail, PayProductList } from './components';
import InitialScreen from './components/InitialScreen';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ InitialScreen } />
          <Route exact path="/kart" component={ Kart } />
          <Route exact path="/detail/:id" component={ ProductDetail } />
          <Route exact path="/pay" component={ PayProductList } />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;

import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Burger from './components/Burger';
import { ServerProvider } from './context';

const App = () => (
  <ServerProvider>
    <BrowserRouter>
      <Burger/>
      <Layout>
        <Switch>
          <Route exact path='/' component={Home}/>
          {/* <Route component={PageNotFound}/> */}
        </Switch>
      </Layout>
    </BrowserRouter>
  </ServerProvider>
);

export default App;


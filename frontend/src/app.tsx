import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { AlertProvider } from './Context/alert';
import { useAuth } from './Context/auth';

import Login from './Pages/Login';
import Cadastro from './Pages/Cadastro';
import Quadro from './Pages/Quadro';

export default function App() {
  const { signed, loading } = useAuth();

  console.log({ logado: signed, loading });
  return (
    <BrowserRouter>
      <AlertProvider>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/cadastro" component={Cadastro} />
          <Route exact path="/quadro" component={Quadro} />
        </Switch>
      </AlertProvider>
    </BrowserRouter>
  );
}

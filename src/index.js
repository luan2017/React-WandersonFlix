import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import RegisterVideo from './pages/register/Video';
import NotFound from './pages/NotFound';
import Home from './pages/Home'
import RegisterCategory from './pages/register/Category';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/cadastro/video"  component={RegisterVideo} />
      <Route path="/cadastro/categoria"  component={RegisterCategory} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);

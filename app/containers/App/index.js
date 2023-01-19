/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import HomePage from 'containers/HomePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import Header from 'components/Header';
import Nav from 'components/Nav';

import GlobalStyle from '../../global-styles';

const AppWrapper = styled.div`
  height: 100vh;

  display: flex;
  flex-direction: column;
`;

export default function App() {
  return (
    <AppWrapper>
      <Helmet title="가격예측 솔루션" />
      <BrowserRouter>
        <Header />
        <Nav />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="" component={NotFoundPage} />
        </Switch>
        <GlobalStyle />
      </BrowserRouter>
    </AppWrapper>
  );
}

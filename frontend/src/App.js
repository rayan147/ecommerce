

import {Container} from 'react-bootstrap'
import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Footer from './layout/Footer';
import Header from './layout/Header';


const Home = lazy(()=> import('./pages/Home'));
const Product = lazy(()=> import('./pages/Product'));
const Cart = lazy(()=> import('./pages/Cart'));
const  App =()=> {
  return (
    <Router>
    <Header/>
    <main className="py-3">
      <Container>
        <Suspense fallback={<div className="d-flex align-items-center justify-content-center mt-10"><h4 className="text-center">Loading...</h4></div>}>
        <Switch>
        <Route path='/' component={Home} exact />
        <Route path='/product/:id' component={Product} exact />
        <Route path='/cart/:id' component={Cart} exact />
        </Switch>
        </Suspense>
      </Container>
     </main>
     <Footer/>
    </Router>
  );
}

export default App;

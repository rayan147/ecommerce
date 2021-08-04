

import {Container} from 'react-bootstrap'
import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Footer from './layout/Footer';
import Header from './layout/Header';

// CODE SPLIT
// ONLY LOADS WHEN REQUESTED
const Home = lazy(()=> import('./pages/Home'));
const Product = lazy(()=> import('./pages/Product'));
const Cart = lazy(()=> import('./pages/Cart'));

const Fallback = () => (
<div className="d-flex align-items-center justify-content-center mt-10">
  <h2 className="text-center">Loading...</h2>
  </div>

)

const  App =()=> {
  return (
    <Router>
    <Header/>
    <main className="py-3">
      <Container>
        <Suspense fallback={<Fallback/>}>
        <Switch>
        <Route path='/' component={Home} exact />
        <Route path='/product/:id' component={Product}  />
        <Route path='/cart/:id?' component={Cart}  />
        </Switch>
        </Suspense>
      </Container>
     </main>
     <Footer/>
    </Router>
  );
}

export default App;

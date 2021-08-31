
import { Suspense, lazy } from 'react';


import {Container} from 'react-bootstrap'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';



import Footer from './layout/Footer';
import Header from './layout/Header';

// CODE SPLIT
// ONLY LOADS WHEN REQUESTED
const Home = lazy(()=> import('./pages/Home'));
const Product = lazy(()=> import('./pages/Product'));
const Cart = lazy(()=> import('./pages/Cart'));
const Login = lazy(()=> import('./pages/Login'));
const Register = lazy(()=> import('./pages/Register'));
const Profile = lazy(()=> import('./pages/Profile'));
const Shipping = lazy(()=> import('./pages/Shipping'));
const Payment = lazy(()=> import('./pages/Payment'));
const PlaceOrder = lazy(()=> import('./pages/PlaceOrder'));
const Order = lazy(()=> import('./pages/Order'));
const AdminGetUsersList = lazy(()=> import('./pages/AdminGetUsersList'));
const AdminEditUser = lazy(()=>import('./pages/AdminEditUser'));
const ProductList = lazy(()=>import('./pages/ProductList'));


const Fallback = () => (
<div className="d-flex align-items-center justify-content-center mt-10">
  <h2 className="text-center">Loading...</h2>
  </div>

)



const  App =()=> {

  return (
  
    <Router>
    <Header/>
    <main className="py-3" >
      <Container>
        <Suspense fallback={<Fallback/>}>
        <Switch>
        <Route path='/' component={Home} exact />
        <Route path='/admin/userlist' component={AdminGetUsersList} />
        <Route path='/admin/productlist' component={ProductList} />
        <Route path='/admin/user/:id/edit' component={AdminEditUser} />
        <Route path='/order/:id' component={Order}  />
        <Route path='/shipping' component={Shipping}  />
        <Route path='/payment' component={Payment}  />
        <Route path='/placeorder' component={PlaceOrder}  />
        <Route path='/register' component={Register}  />
         <Route path='/login' component={Login}  /> 
        <Route path='/profile' component={Profile}  />
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

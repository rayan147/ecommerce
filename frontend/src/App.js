
import { Suspense, lazy } from 'react';


import {Container} from 'react-bootstrap'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CircularProgress from '@material-ui/core/CircularProgress';


import Footer from './layout/Footer';
import SearchAppBar from './layout/AppBar';

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
const ProductEdit = lazy(()=>import('./pages/ProductEdit'));
const OrderList = lazy(()=>import('./pages/OrderList'));



const Fallback = () => (
<div style={{display:'flex',justifyContent:'center',alignItems:'center',marginTop:'2rem'}}>
<CircularProgress size='7rem' thickness={4}
/>
  </div>

)



const  App =()=> {

  return (
  
    <Router>
    <SearchAppBar/>
    
    <main  >
      <Container>
        <Suspense fallback={<Fallback/>}>
        <Switch>
        <Route path='/' component={Home} exact />
        
        
        
        <Route path='/admin/userlist' component={AdminGetUsersList} />
        <Route path='/admin/productlist' component={ProductList} exact />
        <Route path='/admin/productlist/:pageNumber' component={ProductList} exact/>
        <Route path='/admin/user/:id/edit' component={AdminEditUser} />
        <Route path='/order/:id' component={Order}  />
        <Route path='/shipping' component={Shipping}  />
        <Route path='/payment' component={Payment}  />
        <Route path='/placeorder' component={PlaceOrder}  />
        <Route path='/register' component={Register}  />
         <Route path='/login' component={Login}  /> 
        <Route path='/profile' component={Profile}  />
        <Route path='/product/:id' component={Product}  />
        <Route path='/admin/product/:id/edit' component={ProductEdit} />
        <Route path='/admin/orderlist' component={OrderList} />
        <Route path='/search/:keyword' component={Home} exact/>
        <Route path='/page/:pageNumber' component={Home} exact />
        <Route path='/search/:keyword/page/:pageNumber' component={Home} exact/>
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

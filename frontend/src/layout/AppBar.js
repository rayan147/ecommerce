import React,{useCallback,useState} from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MoreIcon from '@material-ui/icons/MoreVert';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';

import { Route } from 'react-router-dom'
import {useDispatch,useSelector} from 'react-redux'
import logout from  '../actions/user/logout'
import ListItemLink from './ListItemLink'
import Search from '../components/view/Search'
import useStyles from './useStyles';



 const  SearchAppBar =()=> {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] =useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] =useState(null);
  const [adminAnchorEl,setAdminAnchorEl] = useState(null)

  const dispatch = useDispatch()
  const {userInfo}  = useSelector(state => state.userLogin)
  const cart = useSelector(state => state.cart)
    const {cartItems} = cart
  const subTotalItem =useCallback(()=>cartItems.reduce((acc,item)=> acc + item.quantity ,0),[cartItems]) 


  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
  const isAdminMenu = Boolean(adminAnchorEl)



  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleAdminMenuClose = (event) => {
    setAdminAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
    handleAdminMenuClose()
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const handleAdminMenuOpen = (event) => {
    setAdminAnchorEl(event.currentTarget);
  };

  
  const logOutHandler =useCallback (() => {
    dispatch(logout())
  },[dispatch])

  const menuAdminId = 'primary-search-admin-account-menu';
  const renderAdminMenu = (
    <Menu
      anchorEl={adminAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuAdminId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isAdminMenu}
      onClose={handleAdminMenuClose}
    >
    <MenuItem onClick={handleMenuClose}>
      <ListItemLink to="/admin/userlist" primary="Users" />
          </MenuItem>
    <MenuItem onClick={handleMenuClose}>
      <ListItemLink to="/admin/productlist" primary="Products" />
          </MenuItem>
    <MenuItem onClick={handleMenuClose}>
      <ListItemLink to="/admin/orderlist" primary="Orders" />
          </MenuItem>
    </Menu>
  );
  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>
      <ListItemLink to="/profile" primary="Profile" />
          </MenuItem>
  
      <MenuItem onClick={logOutHandler}>
      <ListItemLink to="/login" primary="LogOut" />
          </MenuItem>
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
         <ListItemLink to="/cart">
             <IconButton aria-label="new notifications" color="inherit" >
              <Badge badgeContent={subTotalItem()} color={ subTotalItem < 0 ? "inherit":"secondary"}>
              <ShoppingCartIcon /> 
              </Badge>
            </IconButton>
            </ListItemLink>
            </MenuItem>
            {userInfo ?(
          <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <span>Profile</span>
      </MenuItem>
            ):(
              <>
               
                <ListItemLink to="/login" >
               <Button color="inherit"  variant="outlined" style={{marginTop:'.5rem',marginLeft:'.5rem'}} >Login</Button>
                </ListItemLink>
                
                <ListItemLink to="/register" >
                   <Button color="inherit" variant="outlined" style={{marginTop:'.5rem',marginLeft:'.5rem'}}>Register</Button>
                </ListItemLink>
                    </> 
            )}
         {userInfo && userInfo.isAdmin && (
           <MenuItem onClick={handleAdminMenuOpen}   
          aria-label="account of admin user"
          aria-controls={menuAdminId}
          aria-haspopup="true"
          color="inherit">
        <IconButton aria-label="show 4 new mails" color="inherit">
        
          <SupervisorAccountIcon/>
          
        </IconButton>
        <span>Admin</span>
      </MenuItem>
         )}
    
    </Menu>
  );
  
  return (
    <div className={classes.grow}>
      <AppBar position="static">
        <Toolbar>
          {/* <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
          >
            <MenuIcon />
          </IconButton> */}
          <Typography className={classes.title} variant="h6" noWrap>
          <ListItemLink to="/" primary="ProduceX" />
          </Typography>
         
          <Route render={({ history }) => <Search history={history} />} />
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <ListItemLink to="/cart">
             <IconButton aria-label="new notifications" color="inherit" >
              <Badge badgeContent={subTotalItem()} color={ subTotalItem < 0 ? "inherit":"secondary"}>
              <ShoppingCartIcon /> 
              </Badge>
            </IconButton>
            </ListItemLink>
            {userInfo ? (
                <>
              
            <IconButton
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircle />
             
            </IconButton>
                </>
            ):(
                <>
               
                <ListItemLink to="/login" >
               <Button color="inherit"  variant="outlined" style={{marginTop:'.5rem',marginLeft:'.5rem'}} >Login</Button>
                </ListItemLink>
                
                <ListItemLink to="/register" >
                   <Button color="inherit" variant="outlined" style={{marginTop:'.5rem',marginLeft:'.5rem'}}>Register</Button>
                </ListItemLink>
                    </> 
            )}
          
              {userInfo && userInfo.isAdmin && (
                  <>
            <IconButton
              edge="end"
              aria-label="account of current user"
              aria-controls={menuAdminId}
              aria-haspopup="true"
              onClick={handleAdminMenuOpen}
              color="inherit"
            >
              <SupervisorAccountIcon/>
            </IconButton>
                  </>
              )}
            
          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
      {renderAdminMenu}
    </div>
  );
}
export default SearchAppBar
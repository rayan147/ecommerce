import{ useEffect } from 'react'


import {Link} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'


import Typography from '@material-ui/core/Typography';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import ClearIcon from '@material-ui/icons/Clear';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { Alert, AlertTitle } from '@material-ui/lab';




import listOrders from '../actions/order/listOrders'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(4),
  },
  subTotalItem: {
      boxShadow: 'rgba(0, 0, 0, 0.25) 0px 25px 50px -12px',
      marginTop: '3.3rem',
      
  },
  table: {
    minWidth: 650,
  },
}));

const OrderList = ({ history }) => {
  const classes = useStyles();

  const dispatch = useDispatch()

  const orderList = useSelector((state) => state.orderList)
  const { loading, error, orders } = orderList

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin


  useEffect(() => {
    if (userInfo && userInfo.isAdmin) {
      dispatch(listOrders())
    } else {
      history.push('/login')
    }
  }, [dispatch, history, userInfo])

  return (
    <>
          <Typography 
          component="div" 
          variant="h5" 
          className={classes.title}
          
          color="textSecondary">Users' Orders</Typography>
  
      {loading ? (
        <Typography>Loading..</Typography>
      ) : error ? (
        <Alert severity='error'>
        <AlertTitle>Error</AlertTitle>
          {error}
          </Alert>
      ) : (
        <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="order's list">
        <TableHead>
             <TableRow>
              <TableCell  >ID</TableCell>
              <TableCell align="right">USER</TableCell>
              <TableCell align="right">DATE</TableCell>
              <TableCell align="right">TOTAL</TableCell>
              <TableCell align="right">PAID</TableCell>
              <TableCell align="right">DELIVERED</TableCell>
              <TableCell align="right"></TableCell>
              </TableRow>
                 </TableHead>
                 <TableBody>
            {orders.map((order) => (
              <TableRow key={order._id}>
                <TableCell >{order._id}</TableCell>
                <TableCell align="right">{order.user && order.user.name}</TableCell>
                <TableCell align="right">{order.createdAt.substring(0, 10)}</TableCell>
                <TableCell align="right">${order.totalPrice}</TableCell>
                <TableCell align="right">
                  {order.isPaid ? (
                    order.paidAt.substring(0, 10)
                  ) : (
                    <ClearIcon color="secondary"></ClearIcon>
                  )}
                </TableCell>
                <TableCell align="right">
                  {order.isDelivered ? (
                    order.deliveredAt.substring(0, 10)
                  ) : (
                    <ClearIcon color="secondary"></ClearIcon>
                  )}
                </TableCell>
                <TableCell align="right">
                  <Link to={`/order/${order._id}`}>
                    <Button variant="inherit">
                      Details
                    </Button>
                  </Link>
                </TableCell>
              </TableRow>
            ))}
           </TableBody>
        </Table>
        </TableContainer>
      )}
    </>
  )
}

export default OrderList
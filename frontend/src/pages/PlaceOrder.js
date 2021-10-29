import { useEffect ,useCallback} from "react";

import Grid from "@material-ui/core/Grid";
import { useDispatch, useSelector } from "react-redux";

import { makeStyles } from "@material-ui/core/styles";

import CheckoutSteps from "../components/view/CheckoutSteps";
import createOrder from "../actions/order/createOrder";
import roundDecimalToTwo from "../helpers/roundDecimalToTwo";
import PlaceOrderIn from "../components/view/PlaceOrderIn.js";
import OrderSummary from "../components/view/OrderSummary";

import ORDER_STATUS from "../constants/orderConstants";
import { USER_CONSTANTS } from "../constants/userConstants";

const { ORDER_CREATE_RESET } = ORDER_STATUS;
const { USER_DETAILS_RESET } = USER_CONSTANTS;

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));

const PlaceOrder = ({ history }) => {
  const dispatch = useDispatch();
  const classes = useStyles();

  const cart = useSelector((state) => state.cart);
  const user = useSelector((state) => state.userLogin);
  const { userInfo } = user;

  const orderCreate = useSelector((state) => state.orderCreate);
  const { order, isFetchingRequestSuccess, error } = orderCreate;

  cart.itemsPrice = roundDecimalToTwo(
    cart.cartItems.reduce((sum, item) => {
      return sum + item.price * item.quantity;
    }, 0)
  );
  cart.shippingPrice = cart.itemsPrice > 35 ? 0 : 5;
  cart.taxPrice = roundDecimalToTwo(
    cart.itemsPrice > 1 ? (cart.itemsPrice - 1).toFixed(2) * 0.1 : 0
  );
  cart.totalPrice = roundDecimalToTwo(
    cart.itemsPrice + cart.shippingPrice + cart.taxPrice
  );

  useEffect(() => {
    if (isFetchingRequestSuccess) {
      history.push(`/order/${order._id}`);
      dispatch({ type: USER_DETAILS_RESET });
      dispatch({ type: ORDER_CREATE_RESET });
    }
    // eslint-disable-next-line
  }, [history, isFetchingRequestSuccess]);

  const placeOrderHandler =useCallback(()=> () => {
    dispatch(
      createOrder({
        orderItems: cart.cartItems,
        shippingAddress: cart.shippingAddress,
        // paymentMethod: 'Paypal',
        itemsPrice: cart.itemsPrice,
        shippingPrice: cart.shippingPrice,
        taxPrice: cart.taxPrice,
        totalPrice: cart.totalPrice,
      })
    );
  },[cart.cartItems,cart.shippingAddress,cart.itemsPrice,cart.shippingPrice,cart.taxPrice,cart.totalPrice])]);
  return (
    <div className={classes.root}>
      <Grid container>
        <CheckoutSteps step1 step2 step3 step4 />
        <Grid item xs={12} sm={8}>
          <PlaceOrderIn
            shippingAddress={cart.shippingAddress}
            title='SHIPPING'
            userInfo={userInfo}
          />
          <PlaceOrderIn
            shippingAddress={cart.shippingAddress}
            title='BILLING'
            
            userInfo={userInfo}
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <OrderSummary
            cart={cart}
            placeOrderHandler={placeOrderHandler}
            error={error}
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default PlaceOrder;

import { useReducer, useCallback } from "react";

import { useDispatch, useSelector } from "react-redux";

import CheckoutSteps from "../components/view/CheckoutSteps";
import INTERNAL_STATE from "../constants/internalState";
import shippingReducer from "../reducers/internal/shippingReducer";
import saveShippingAddress from "../actions/shipping/shipping";

import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const { ADDRESS, CITY, STATE, ZIP_CODE, COUNTRY } = INTERNAL_STATE;
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    width: "100%",
    height: "100%",
    maxWidth: 350,
    margin: "0 auto",
  },
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));
const Shipping = ({ history }) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart);
  const { shippingAddress } = cart;

  const initialState = {
    address: shippingAddress.address ?? "",
    country: shippingAddress.country ?? "",
    city: shippingAddress.city ?? "",
    zipCode: shippingAddress.zipCode ?? "",
    _state: shippingAddress._state ?? "",
  };

  const [state, dispatchUseReducer] = useReducer(shippingReducer, initialState);
  const { address, country, city, zipCode, _state } = state;

  //HANDLERS
  const submitHandler = useCallback(
    (event) => {
      event.preventDefault();
      dispatch(saveShippingAddress(state));
      history.push("/placeOrder");
    },
    [state, history, dispatch]
  );

  return (
    <>
      <CheckoutSteps step1 step2 />
      <div className={classes.root}>
        <div className={classes.paper}>
          <Typography component='span' variant='h4' gutterBottom>
            SHIPPING
          </Typography>
          <form onSubmit={submitHandler} className={classes.form} noValidate>
            <TextField
              label='Address'
              type='text'
              fullWidth
              id='address'
              name='address'
              autoComplete='address'
              autoFocus
              placeholder={shippingAddress?.address ?? "Enter address"}
              value={address}
              required
              onChange={(e) =>
                dispatchUseReducer({ type: ADDRESS, payload: e.target.value })
              }
            />
            <TextField
              label='City'
              type='text'
              fullWidth
              id='city'
              name='city'
              autoComplete='city'
              autoFocus
              placeholder={shippingAddress?.city ?? "Enter City"}
              value={city}
              required
              onChange={(e) =>
                dispatchUseReducer({ type: CITY, payload: e.target.value })
              }
            />
            <TextField
              label='State'
              type='text'
              fullWidth
              id='state'
              name='state'
              autoComplete='state'
              autoFocus
              placeholder={shippingAddress?._state ?? "Enter state"}
              value={_state}
              required
              onChange={(e) =>
                dispatchUseReducer({ type: STATE, payload: e.target.value })
              }
            />
            <TextField
              label='Zip code'
              type='text'
              fullWidth
              id='zipCode'
              name='zipCode'
              autoComplete='zipCode'
              autoFocus
              placeholder={shippingAddress?.zipCode ?? "Enter Zip code"}
              value={zipCode}
              required
              onChange={(e) =>
                dispatchUseReducer({ type: ZIP_CODE, payload: e.target.value })
              }
            />

            <TextField
              label='Country'
              type='text'
              fullWidth
              id='country'
              name='country'
              autoComplete='country'
              autoFocus
              placeholder={shippingAddress?.country ?? "Enter country"}
              value={country}
              required
              onChange={(e) =>
                dispatchUseReducer({ type: COUNTRY, payload: e.target.value })
              }
            />

            <Button
              type='submit'
              variant='contained'
              color='primary'
              className={classes.submit}
            >
              Continue
            </Button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Shipping;

import { useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import Button from "@material-ui/core/Button";

import CheckoutSteps from "../components/view/CheckoutSteps";

import savePaymentMethod from "../actions/payment/payment.js";


import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Typography from "@material-ui/core/Typography";


const Payment = ({ history }) => {
  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart);
  const { shippingAddress } = cart;
  const [state, setState] = useState({
    PayPal: true,
  });
  const [paymentMethod, setPaymentMethod] = useState("");
  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
    setPaymentMethod(event.target.name);
    console.log(event.target.name);
  };
  console.log("paymentMethod", paymentMethod);

  if (!shippingAddress.address) {
    history.push("/shipping");
  }

  const submitHandler = (event) => {
    event.preventDefault();
    dispatch(savePaymentMethod(paymentMethod));
    history.push("/placeorder");
  };

  return (
    <>
      <CheckoutSteps step1 step2 step3 />
      <Typography variant='h5' gutterBottom>
        Payment
      </Typography>
      <form onSubmit={submitHandler}>
        <FormGroup column>
          <FormControlLabel
            control={
              <Checkbox
                checked={state.PayPal}
                onChange={handleChange}
                name='PayPal'
              />
            }
            label='PayPal,venmon and credit/debit cards'
          />
        </FormGroup>

        <Button type='submit' variant='contained' color='primary'>
          Continue
        </Button>
      </form>
    </>
  );
};

export default Payment;

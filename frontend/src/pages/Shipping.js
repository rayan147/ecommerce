import {useReducer,useCallback} from 'react'



import {useDispatch,useSelector} from 'react-redux'
import {Button, Form} from 'react-bootstrap'



import CheckoutSteps from '../components/view/CheckoutSteps'
import INTERNAL_STATE from '../constants/internalState'
import shippingReducer from '../reducers/internal/shippingReducer'
import saveShippingAddress from '../actions/shipping/shipping'


const {ADDRESS,CITY,STATE,ZIP_CODE,COUNTRY} =INTERNAL_STATE
const Shipping = ({history}) => {
  const dispatch = useDispatch()

  const shippingAddress = useSelector((state) => state.shippingAddress)
 

  
  const initialState = {
      address:shippingAddress?.data?.address ?? '',
      country:shippingAddress?.data?.country ?? '', 
      city:shippingAddress?.data?.city ?? '',
      zipCode:shippingAddress?.data?.zipCode ?? '',
      _state:shippingAddress?.data?._state ?? ''
}
  
 const [state, dispatchUseReducer] = useReducer(shippingReducer,initialState)
 const {address,country,city,zipCode,_state} = state

 //HANDLERS
const submitHandler = useCallback( (event) => {
        event.preventDefault()
       dispatch(saveShippingAddress(state))
       history.push('/payment')
    },[state,history,dispatch])


    return (
      <> 
      <CheckoutSteps step1 step2 />
     
     
      <h1>Shipping</h1>
      <Form onSubmit={submitHandler}>
        <Form.Group controlId='address'>
          <Form.Label>Address</Form.Label>
          <Form.Control
            type='text'
            placeholder={shippingAddress?.data?.address ?? 'Enter address'}
            value={address}
            required
            onChange={(e) => dispatchUseReducer({type:ADDRESS,payload:e.target.value})}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId='city'>
          <Form.Label>City</Form.Label>
          <Form.Control
            type='text'
            placeholder={shippingAddress?.data?.city ??'Enter city'}
            value={city}
            required
            onChange={(e) => dispatchUseReducer({type:CITY,payload:e.target.value})}
          ></Form.Control>
        </Form.Group>
        <Form.Group controlId='_state'>
          <Form.Label>State</Form.Label>
          <Form.Control
            type='text'
            placeholder={shippingAddress?.data?._state ??'Enter State'}
            value={_state}
            required
            onChange={(e) => dispatchUseReducer({type:STATE,payload:e.target.value})}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId='zipCode'>
          <Form.Label>Zip Code</Form.Label>
          <Form.Control
            type='text'
            placeholder={shippingAddress?.data?.zipCode ??'Enter Zip Code'}
            value={zipCode}
            required
            onChange={(e) => dispatchUseReducer({type:ZIP_CODE,payload:e.target.value})}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId='country'>
          <Form.Label>Country</Form.Label>
          <Form.Control
            type='text'
            placeholder={shippingAddress?.data?.country ??'Enter country'}
            value={country}
            required
            onChange={(e) => dispatchUseReducer({type:COUNTRY,payload:e.target.value})}
          ></Form.Control>
        </Form.Group>
        
        <Button type='submit' variant='primary' className="w-50 my-2 rounded ">
          Continue
        </Button>
      </Form>
    
    </>
    )
}

export default Shipping

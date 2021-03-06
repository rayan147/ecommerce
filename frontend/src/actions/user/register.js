import axios from "axios"
import { USER_CONSTANTS } from "../../constants/userConstants"

const  {
    USER_REGISTER_REQUEST,
    USER_REGISTER_FAILURE,
    USER_REGISTER_SUCCESS,
    USER_LOGIN_SUCCESS
    
    } = USER_CONSTANTS
    const register = (name, email, password) => async (dispatch,_,api) => {
        try {
          dispatch({
            type: USER_REGISTER_REQUEST,
          })
      
          const config = {
            headers: {
              'Content-Type': 'application/json',
            },
          }
      
          const { data } = await api.post(
            '/api/users/register',
            { name, email, password },
            config
          )
      
       dispatch({
            type: USER_REGISTER_SUCCESS,
            payload: data,
          })
      
          dispatch({
            type: USER_LOGIN_SUCCESS,
            payload: data,
          })
      
          localStorage.setItem('userInfo', JSON.stringify(data))
        } catch (error) {
          dispatch({
            type: USER_REGISTER_FAILURE,
            payload:error?.response?.data?.message ?? error.message
          })
        }
      }

export default register
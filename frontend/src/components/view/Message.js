import {Alert} from 'react-bootstrap'
import {memo,useRef} from 'react'

import PropTypes from 'prop-types'


const Message = ({variant ='info',children}) => {
    const renders = useRef(0)
    console.log('Message renders:',renders.current++)
    return (
        <Alert variant={`${variant} rounded my-2 text-center fs-5` }>
            {children}
        </Alert>
    )
}

Message.propTypes = {
    variant:PropTypes.string
}
export default memo(Message)

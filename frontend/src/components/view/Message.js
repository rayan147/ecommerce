import {Alert} from 'react-bootstrap'
import {memo,useRef} from 'react'

import PropTypes from 'prop-types'


const Message = ({variant ='info',children}) => {
    const renders = useRef(0)
    console.log('Message renders:',renders.current++)
    return (
        <Alert variant={variant}>
            {children}
        </Alert>
    )
}

Message.propTypes = {
    variant:PropTypes.string,
    children:PropTypes.element
}
export default memo(Message)

import {Spinner} from 'react-bootstrap'

const Loader = () => {
    return (
        <>
        <Spinner 
        animation="border" 
        role='status'
        style={{
            width: '100px',
            height: '100px',
            margin: 'auto',
            display: 'block',
        }}
        >
            
        </Spinner>
        <h3 className="d-flex align-items-center justify-content-center">Almost there...</h3>
        </>
    )
}

export default Loader

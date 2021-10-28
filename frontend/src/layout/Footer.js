import React from 'react'
import Box from '@material-ui/core/Box'
import Container from '@material-ui/core/Container'
import  Typography  from '@material-ui/core/Typography'
const Footer = () => {
    return (
        <footer>
            <Container>
                <Box display="flex" justifyContent="center" alignItems="center" p={2}>
                    <Typography variant="body2" color="textSecondary" align="center">
                 Copyright © 2021. All Rights Reserved.
                    </Typography> 
                </Box>
              
            </Container>
          
        </footer>
    )
}

export default Footer

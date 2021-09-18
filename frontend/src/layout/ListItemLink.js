import {useMemo,forwardRef} from 'react';
import ListItemText from '@material-ui/core/ListItemText';
import { Link as RouterLink } from 'react-router-dom';
import  ListItemIcon  from '@material-ui/core/ListItemIcon';
import  Box  from '@material-ui/core/Box';





const ListItemLink=({icon,primary, to,children}) =>{
 
  
  const renderLink = useMemo(
    () => forwardRef((itemProps, ref) => <RouterLink to={to} ref={ref} {...itemProps} />),
    [to],
  );

  return (
    <>
    <Box  component={renderLink} style={{textDecoration:'none',color:'inherit'}}>
      {icon ? <ListItemIcon>{icon}</ListItemIcon> : null}
    
      <Box color="inherit" >{primary}</Box>
      <ListItemText>{children}</ListItemText>
    </Box>
  </>
  );
}
export default ListItemLink
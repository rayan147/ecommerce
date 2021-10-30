
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

import PropTypes from "prop-types";

import Rating from "./Rating";

const useStyles = makeStyles({
  root: {
    marginTop: '4rem',
    maxWidth: 275,
    minWidth: 275,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 18,
  },
  pos: {
    marginBottom: 12,
  },
});
const CustomerReviews = ({ product }) => {

  console.log({ product });
  const classes = useStyles();
  
  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title} color='textPrimary' gutterBottom>
          Customer Reviews
        </Typography>
        <Rating
          value={product.rating}
          text={product.rating}
          numReviews={product.numReviews}
        />
        
      </CardContent>
    </Card>
  );
};
CustomerReviews.propTypes = {
  product: PropTypes.object.isRequired,
};
export default CustomerReviews;

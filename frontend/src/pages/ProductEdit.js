import React, { useState, useEffect,useCallback } from "react";

import axios from "axios";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import { Alert, AlertTitle } from "@material-ui/lab";
import listProductDetails from "../actions/product/listProductDetails";
import updateProduct from "../actions/product/updateProduct";
import PRODUCT_CONSTANTS from "../constants/productConstants";

const { PRODUCT_UPDATE_RESET } = PRODUCT_CONSTANTS;

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  input: {
    display: "none",
  },
}));

const ProductEdit = ({ match, history }) => {
  const productId = match.params.id;

  const classes = useStyles();

  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [image, setImage] = useState("");
  const [brand, setBrand] = useState("");
  const [category, setCategory] = useState("");
  const [countInStock, setCountInStock] = useState(0);
  const [description, setDescription] = useState("");
  const [uploading, setUploading] = useState(false);

  const dispatch = useDispatch();

  const productDetails = useSelector((state) => state.productDetails);
  const { loading, error, product } = productDetails;

  const productUpdate = useSelector((state) => state.productUpdate);
  const {
    loading: loadingUpdate,
    error: errorUpdate,
    success: successUpdate,
  } = productUpdate;

  useEffect(() => {
    if (successUpdate) {
      dispatch({ type: PRODUCT_UPDATE_RESET });
      history.push("/admin/productlist");
    } else {
      if (!product.name || product._id !== productId) {
        dispatch(listProductDetails(productId));
      } else {
        setName(product.name);
        setPrice(product.price);
        setImage(product.image);
        setBrand(product.brand);
        setCategory(product.category);
        setCountInStock(product.countInStock);
        setDescription(product.description);
      }
    }
  }, [dispatch, history, productId, product, successUpdate]);

  const uploadFileHandler =  useCallback( async (e) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append("image", file);
    setUploading(true);

    try {
      const config = {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      };

      const { data } = await axios.post("/images/", formData, config);

      setImage(data.imagePath);
      setUploading(false);
    } catch (error) {
      console.error(error);
      setUploading(false);
    }
  }, [ setUploading, setImage ]);

  const submitHandler =useCallback( (e) => {
    e.preventDefault();
    dispatch(
      updateProduct({
        _id: productId,
        name,
        price,
        image,
        brand,
        category,
        description,
        countInStock,
      })
    );
  },[ dispatch, productId, name, price, image, brand, category, description, countInStock ]);

  return (
    <>
      <Link to='/admin/productlist' className='btn btn-light my-3'>
        Go Back
      </Link>
      <Grid
        container
        direction='column'
        justifyContent='center'
        alignItems='center'
      >
        <Typography component='div' gutterBottom variant='h5'>
          Edit Product{" "}
        </Typography>
        {loadingUpdate && <h2>Loading..</h2>}
        {errorUpdate && (
          <Alert severity='error'>
            <AlertTitle>Error</AlertTitle>
            {errorUpdate}
          </Alert>
        )}
        {loading ? (
          <h2>Loading..</h2>
        ) : error ? (
          <Alert severity='error'>
            <AlertTitle>Error</AlertTitle>
            {error}
          </Alert>
        ) : (
          <Grid item>
            <form onSubmit={submitHandler}>
              <TextField
                variant='outlined'
                margin='normal'
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                fullWidth
                id='name'
                label='Name'
                name='name'
                autoComplete='name'
                autoFocus
              />

              <TextField
                variant='outlined'
                margin='normal'
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                required
                fullWidth
                id='price'
                label='Price'
                name='price'
                type='number'
                autoComplete='price'
                autoFocus
              />
              <TextField
                variant='outlined'
                margin='normal'
                value={image}
                onChange={(e) => setImage(e.target.value)}
                required
                fullWidth
                id='image'
                label='Image'
                name='image'
                autoComplete='image'
                autoFocus
              />
              {uploading && <h2>Loading..</h2>}
              <>
                <input
                  color='primary'
                  accept='image/*'
                  type='file'
                  onChange={uploadFileHandler}
                  id='icon-button-file'
                  style={{ display: "none" }}
                />
                <label htmlFor='icon-button-file'>
                  <Button
                    startIcon={<CloudUploadIcon />}
                    variant='contained'
                    component='span'
                    className={classes.button}
                    size='large'
                    color='primary'
                  >
                    Upload
                  </Button>
                </label>
              </>
              <TextField
                variant='outlined'
                margin='normal'
                value={brand}
                onChange={(e) => setBrand(e.target.value)}
                required
                fullWidth
                id='brand'
                label='brand'
                name='brand'
                autoComplete='brand'
                autoFocus
              />
              <TextField
                variant='outlined'
                margin='normal'
                value={countInStock}
                onChange={(e) => setCountInStock(e.target.value)}
                required
                fullWidth
                id='countInStock'
                label='Count In Stock'
                name='countInStock'
                autoComplete='countInStock'
                autoFocus
              />
              <TextField
                variant='outlined'
                margin='normal'
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                required
                fullWidth
                id='category'
                label='Category'
                name='category'
                autoComplete='category'
                autoFocus
              />
              <TextField
                variant='outlined'
                margin='normal'
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
                fullWidth
                id='description'
                label='Description'
                name='description'
                autoComplete='description'
                autoFocus
              />

              <Button
                type='submit'
                variant='contained'
                color='primary'
                fullWidth
              >
                Update
              </Button>
            </form>
          </Grid>
        )}
      </Grid>
    </>
  );
};

export default ProductEdit;

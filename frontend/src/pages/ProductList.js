import React, { useEffect,useCallback } from "react";

import { Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { AiOutlinePlus, AiFillEdit } from "react-icons/ai";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import DeleteIcon from "@material-ui/icons/Delete";
import Avatar from "@material-ui/core/Avatar";

import { Alert, AlertTitle } from "@material-ui/lab";
import Pagination from "@material-ui/lab/Pagination";
import PaginationItem from "@material-ui/lab/PaginationItem";
import { Link } from "react-router-dom";

import listProducts from "../actions/product/listProducts";
import deleteProduct from "../actions/product/deleteProduct";
import createProduct from "../actions/product/createProduct";

import PRODUCT_CONSTANTS from "../constants/productConstants";

const { PRODUCT_CREATE_RESET } = PRODUCT_CONSTANTS;

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(4),
  },
  subTotalItem: {
    boxShadow: "rgba(0, 0, 0, 0.25) 0px 25px 50px -12px",
    marginTop: "3.3rem",
  },
  table: {
    minWidth: 650,
  },
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
}));

const ProductList = ({ history, match }) => {
  const classes = useStyles();
  const pageNumber = match.params.pageNumber || 1;

  const dispatch = useDispatch();

  const productList = useSelector((state) => state.productList);
  const { loading, error, products, page, pages } = productList;

  const productDelete = useSelector((state) => state.productDelete);
  const {
    loading: loadingDelete,
    error: errorDelete,
    success: successDelete,
  } = productDelete;

  const productCreate = useSelector((state) => state.productCreate);
  const {
    loading: loadingCreate,
    error: errorCreate,
    success: successCreate,
    product: createdProduct,
  } = productCreate;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  useEffect(() => {
    dispatch({ type: PRODUCT_CREATE_RESET });

    if (!userInfo || !userInfo.isAdmin) {
      history.push("/login");
    }

    if (successCreate) {
      history.push(`/admin/product/${createdProduct._id}/edit`);
    } else {
      dispatch(listProducts("", pageNumber));
    }
  }, [
    dispatch,
    history,
    userInfo,
    successDelete,
    successCreate,
    createdProduct,
    pageNumber,
  ]);

  const deleteHandler = useCallback((id) => {
    if (window.confirm("Are you sure")) {
      dispatch(deleteProduct(id));
    }
  }, [dispatch]);

  const createProductHandler =useCallback( () => {
    dispatch(createProduct());
    dispatch(listProducts("", pageNumber));
  }, [dispatch, pageNumber]);

  return (
    <>
      <Row className='align-items-center'>
        <Col>
          <h1>Products</h1>
        </Col>
        <Col className='text-right'>
          <Button className='my-3' onClick={createProductHandler}>
            <AiOutlinePlus /> Create Product
          </Button>
        </Col>
      </Row>
      {loadingDelete && <h2>Loading..</h2>}
      {errorDelete && (
        <Alert severity='error'>
          <AlertTitle>Error</AlertTitle>
          {errorDelete}
        </Alert>
      )}
      {loadingCreate && <h2>Loading..</h2>}
      {errorCreate && (
        <Alert severity='error'>
          <AlertTitle>Error</AlertTitle>
          {errorCreate}
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
        <>
          <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="products' list">
              <TableHead>
                <TableRow>
                  <TableCell>ID</TableCell>
                  <TableCell align='right'>IMAGE</TableCell>
                  <TableCell align='right'>NAME</TableCell>
                  <TableCell align='right'>PRICE</TableCell>
                  <TableCell align='right'>CATEGORY</TableCell>
                  <TableCell align='right'>BRAND</TableCell>
                  <TableCell align='right'></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {products.map((product) => (
                  <TableRow key={product._id}>
                    <TableCell>{product._id}</TableCell>
                    {console.log(product.image)}
                    <TableCell align='right'>
                      <Avatar
                        src={product.image}
                        alt={product.description}
                        className={classes.large}
                      ></Avatar>
                    </TableCell>
                    <TableCell align='right'>{product.name}</TableCell>
                    <TableCell align='right'>${product.price}</TableCell>
                    <TableCell align='right'>{product.category}</TableCell>
                    <TableCell align='right'>{product.brand}</TableCell>
                    <TableCell align='right'>
                      <Link to={`/admin/product/${product._id}/edit`}>
                        <Button variant='light' className='btn-sm'>
                          <AiFillEdit />
                        </Button>
                      </Link>
                      <Button
                        endIcon={<DeleteIcon color='secondary' />}
                        onClick={() => deleteHandler(product._id)}
                      ></Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <Pagination
            page={page}
            count={pages}
            renderItem={(item) => (
              <PaginationItem
                component={Link}
                to={`/admin/productlist/${item.page}`}
                {...item}
              />
            )}
          />
        </>
      )}
    </>
  );
};

export default ProductList;

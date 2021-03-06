import React, { useState, useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import Container from "@material-ui/core/Container";
import { Alert, AlertTitle } from "@material-ui/lab";


import FormSubmintReview from "../components/view/FormSubmintReview";
import listProductDetails from "../actions/product/listProductDetails";
import createProductReview from "../actions/product/createProductReview";

import PRODUCT_CONSTANTS from "../constants/productConstants";
import ProductReview from "../components/view/ProductReview";
import ProductCard from "../components/view/ProductCard";
import CustomerReviews from "../components/view/CustomerReviews";

const { PRODUCT_CREATE_REVIEW_RESET } = PRODUCT_CONSTANTS;

const Product = ({ history, match }) => {
  const [qty, setQty] = useState(1);
  const dispatch = useDispatch();
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const productDetails = useSelector((state) => state.productDetails);

  const { error, isLoading, product } = productDetails;
  const productReviewCreate = useSelector((state) => state.productReviewCreate);
  const {
    success: successProductReview,
    loading: loadingProductReview,
    error: errorProductReview,
  } = productReviewCreate;

  useEffect(() => {
    if (successProductReview) {
      setRating(0);
      setComment("");
    }
    if (!product._id || product._id !== match.params.id) {
      dispatch(listProductDetails(match.params.id));
      dispatch({ type: PRODUCT_CREATE_REVIEW_RESET });
    }
  }, [dispatch, match, successProductReview, product._id]);

  // Handlers
  const addToCartHandler = () => {
    history.push(`/cart/${match.params.id}?qty=${qty}`);
  };
  const handleChangeValue = (e) => {
    e.preventDefault();
    setRating(e.target.value);
  };
  const handleChangeComment = (e) => {
    e.preventDefault();
    setComment(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      createProductReview(match.params.id, {
        rating,
        comment,
      })
    );
  };
  const formSubmintReviewProps = {
    rating,
    comment,
    handleChangeValue,
    handleChangeComment,
    submitHandler,
    loadingProductReview,
    errorProductReview,
  };
  return (
    <Container>
      <Link to='/'>
        <ArrowBackIcon
          fontSize='large'
          color='primary'
          style={{
            marginTop: "1.7rem",
          }}
        />
      </Link>

      {isLoading ? (
        <h1>Almost There ...</h1>
      ) : error ? (
        <Alert severity='error'>{error}</Alert>
      ) : (
        <>
          <ProductCard
            product={product}
            qty={qty}
            setQty={setQty}
            addToCartHandler={addToCartHandler}
          />{product.reviews.length !== 0 && (
            <>
            <CustomerReviews product={product} />
           <ProductReview product={product} />
           </>
          )}
         
          <>
            <h2>Write a Customer Review</h2>
            {product.reviews.length === 0 && (
              <Alert
                style={{
                  width: "40%",
                }}
                severity='warning'
              >
                No Reviews
              </Alert>
            )}
            {successProductReview && (
              <>
                <Alert
                  severity='success'
                  style={{
                    width: "40%",
                  }}
                >
                  <AlertTitle>Review submitted successfully</AlertTitle>
                </Alert>
              </>
            )}
            {loadingProductReview && <h4>Loading...</h4>}
            {errorProductReview && (
              <>
                <Alert severity='error'>
                  <AlertTitle
                    style={{
                      width: "40%",
                    }}
                  >
                    {errorProductReview}
                  </AlertTitle>
                </Alert>
              </>
            )}
            {userInfo ? (
              <FormSubmintReview {...formSubmintReviewProps} />
            ) : (
              <>
                <Alert
                  severity='info'
                  style={{
                    width: "40%",
                  }}
                >
                  <AlertTitle>
                    Please <Link to='/login'>sign in</Link> to write a review{" "}
                  </AlertTitle>
                </Alert>
              </>
            )}
          </>
        </>
      )}
    </Container>
  );
};

export default Product;

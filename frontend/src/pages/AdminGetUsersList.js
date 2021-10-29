import React, { useEffect,useCallback } from "react";

import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Typography from "@material-ui/core/Typography";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import ClearIcon from "@material-ui/icons/Clear";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import DeleteIcon from "@material-ui/icons/Delete";
import CheckIcon from "@material-ui/icons/Check";
import EditIcon from "@material-ui/icons/Edit";
import { Alert, AlertTitle } from "@material-ui/lab";

import listUsers from "../actions/admin/listUsers";
import deleteUser from "../actions/admin/deleteUser";

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
}));

const AdminGetUsersList = ({ history }) => {
  const classes = useStyles();

  const dispatch = useDispatch();

  const adminGetUsersList = useSelector((state) => state.adminGetUsersList);
  const { isLoading, error, users } = adminGetUsersList;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const adminDeleteUser = useSelector((state) => state.adminDeleteUser);
  const { success: successDelete } = adminDeleteUser;

  useEffect(() => {
    if (userInfo && userInfo.isAdmin) {
      dispatch(listUsers());
    } else {
      history.push("/login");
    }
  }, [dispatch, history, successDelete, userInfo]);

  const deleteHandler =useCallback( (id) => {
    if (window.confirm("Are you sure")) {
      console.log(id);
      dispatch(deleteUser(id));
    }
  },[dispatch]);

  return (
    <>
      <Typography
        component='div'
        variant='h5'
        className={classes.title}
        color='textSecondary'
      >
        Users' Profile
      </Typography>
      {isLoading ? (
        <h2>Loading...</h2>
      ) : error ? (
        <Alert severity='error'>
          <AlertTitle>Error</AlertTitle>
          {error}
        </Alert>
      ) : (
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="user's list">
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell align='right'>NAME</TableCell>
                <TableCell align='right'>EMAIL</TableCell>
                <TableCell align='right'>ADMIN</TableCell>
                <TableCell align='right'>EDIT/DELETE</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {users.map((user) => (
                <TableRow key={user._id}>
                  <TableCell>{user._id}</TableCell>
                  <TableCell align='right'>{user.name}</TableCell>
                  <TableCell align='right'>
                    <a href={`mailto:${user.email}`}>{user.email}</a>
                  </TableCell>
                  <TableCell align='right'>
                    {user.isAdmin ? (
                      <CheckIcon style={{ color: "green" }}></CheckIcon>
                    ) : (
                      <ClearIcon color='secondary'></ClearIcon>
                    )}
                  </TableCell>
                  <TableCell align='right'>
                    <Link to={`/admin/user/${user._id}/edit`}>
                      <Button
                        variant='secondary'
                        startIcon={<EditIcon />}
                      ></Button>
                    </Link>
                    <Button
                      endIcon={<DeleteIcon color='secondary' />}
                      variant='light'
                      onClick={() => deleteHandler(user._id)}
                    ></Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </>
  );
};

export default AdminGetUsersList;

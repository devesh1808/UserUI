import React from "react";
import { Grid, Fab, makeStyles } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import UserItem from "./UserItem";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const useStyles = makeStyles((theme) => ({   //hook - useStyles
  fab: {
    position: "fixed",
    right: "5%",
    bottom: "5%",
    // top: "5%",
    // left: "5%",
  },
}));

const Users = () => {
  const classes = useStyles();
  const users = useSelector((state) => state.user.users);

  return (
    <>
      <div>
        <Grid spacing={2} container>
          {users.map((user) => (
            <UserItem key={user.id} user={user} />
          ))}
        </Grid>
      </div>
      <Fab
        component={Link}
        to="/users/create"
        color="primary"
        className={classes.fab}
      >
        <AddIcon />
      </Fab>
    </>
  );
};

export default Users;

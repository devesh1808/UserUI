import { useEffect } from "react";
import {
  Box,
  Button,
  Grid,
  Paper,
  Typography,
  IconButton,
} from "@material-ui/core";
import { getUser, clearUser } from "../../redux/features/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
const User = () => {
  const params = useParams();
  const dispatch = useDispatch();

  const user = useSelector((state) => state.user.user);
  useEffect(() => {
    dispatch(getUser(params.id));
    return () => {
      dispatch(clearUser());
    };
  }, []);

  return (
      <Paper style={{marginLeft: "200px"}}>
        <Typography variant="h2" gutterBottom>
          {user.firstName} {user.lastName}
        </Typography>
        <Typography variant="h5" gutterBottom>
          {user.email}
        </Typography>

        <Typography variant="h5" gutterBottom>
          {user.role}
        </Typography>
      </Paper>
  );
};

export default User;

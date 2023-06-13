import React, { useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import { TextField, Paper, Button } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import {
  getUser,
  clearUser,
  updateUser,
} from "../../redux/features/userSlice";

const EditUser = () => {
  const { handleSubmit, control, reset } = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      role: "",
    },
  });

  const params = useParams();
  let history = useHistory();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);
  useEffect(() => {
    dispatch(getUser(params.id));
    return () => {
      dispatch(clearUser());
    };
  }, []);

  useEffect(() => {
    reset(user);
  }, [user]);

  const onSubmit = (data) => {
    dispatch(updateUser(data));
    history.push("/");
  };
  return (
    <div>
      <Paper style={{ display: "flex",  marginLeft: "100px"}}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Controller
            control={control}
            name="firstName"
            render={({ field }) => (
              <TextField
                id="first-name"
                label="First Name"
                variant="outlined"
                placeholder="Enter Your First Name"
                fullWidth
                margin="normal"
                {...field}
              />
            )}
          />

          <Controller
            control={control}
            name="lastName"
            render={({ field }) => (
              <TextField
                id="last-name"
                label="Last Name"
                variant="outlined"
                placeholder="Enter Your Last Name"
                fullWidth
                margin="normal"
                {...field}
              />
            )}
          />
          <Controller
            control={control}
            name="email"
            render={({ field }) => (
              <TextField
                id="email"
                label="E-mail"
                variant="outlined"
                placeholder="Enter Your E-mail Address"
                fullWidth
                margin="normal"
                type="email"
                {...field}
              />
            )}
          />
          

          <Controller
            control={control}
            name="role"
            render={({ field }) => (
              <TextField
                id="role"
                label="Role"
                variant="outlined"
                placeholder="Enter Your Role"
                fullWidth
                margin="normal"
                {...field}
              />
            )}
          />
          <Button type="submit">Update User</Button>
        </form>
      </Paper>
    </div>
  );
};

export default EditUser;

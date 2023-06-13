import React from "react";
import { useForm, Controller } from "react-hook-form";
import { TextField, Paper, Button } from "@material-ui/core";
import { v4 as uuidv4 } from "uuid";
import { useDispatch } from "react-redux";
import { addUser } from "../../redux/features/userSlice";
import { useHistory } from "react-router-dom";

const AddUser = () => {
  const dispatch = useDispatch();
  let history = useHistory();
  const { handleSubmit, control, reset, register } = useForm({
    defaultValues: {
      id: uuidv4(),
      firstName: "",
      lastName: "",
      email: "",
      role: "",
    },
  });
  const onSubmit = (data) => {
    dispatch(addUser(data));
    reset({
      firstName: "",
      lastName: "",
      email: "",
      role: "",
    });
    history.push("/");
  };
  return (
    <div>
      <Paper style={{ display: "flex",  marginLeft: "100px"}}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <TextField
            inputProps={{ type: "hidden" }}
            margin="normal"
            {...register("id")}
          />

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
          <Button type="submit">Create New User</Button>
        </form>
      </Paper>
    </div>
  );
};

export default AddUser;

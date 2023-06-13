import EditIcon from "@material-ui/icons/Edit";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import VisibilityIcon from "@material-ui/icons/Visibility";
import {
  Box,
  Button,
  Grid,
  Paper,
  Typography,
  IconButton,
  Container,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import { deleteUser } from "../../redux/features/userSlice";
import { useDispatch } from "react-redux";

const UserItem = ({ user }) => {
  const { id, firstName, lastName, email, role } = user;
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(deleteUser(id));
  };

  //style={{marginLeft: "200px", marginTop: "100px"}}
  return (
    // <Grid container spacing={2} justify="center">
    < Grid container sm={3} style={{ display: "flex",  marginLeft: "100px", marginTop: "20px"}}>
      <Grid  item>
        <Paper>
          <Box display="flex" justifyContent="space-between" alignItems="center">
            <Typography variant="subtitle2" gutterBottom>
              {firstName} {lastName}
            </Typography>
            <IconButton component={Link} to={`/users/${id}`}>
              <VisibilityIcon />
            </IconButton>
          </Box>
          {/* <Typography variant="caption">{phone}</Typography> */}
          <Typography variant="caption">Email: {email}</Typography>
          <Typography variant="caption">Role: {role}</Typography>
          <Button
            component={Link}
            to={`/users/${id}/edit`}
            variant="outlined"
            startIcon={<EditIcon />}
            color="primary"
          >
            edit
          </Button>
          <Button startIcon={<DeleteOutlineIcon />} onClick={handleDelete} variant="outlined">
            delete
          </Button>
        </Paper>
      </Grid>
    </Grid>
    // </Grid>
  );
};

export default UserItem;

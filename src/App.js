import { Container, CssBaseline } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/core/styles";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import theme from "./theme";

import Users from "./components/users/Users";
import User from "./components/users/User";
import AddUser from "./components/users/AddUser";
import EditUser from "./components/users/EditUser";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <>
    <Sidebar />
    <Navbar />
    <Router>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Container>
          <div className="pt-10 p-8 sm:p-12 lg:pt-10 lg:p-2 xl:pt-14 xl:p-2"> 
          <Switch>
            <Route exact path="/" component={Users} />
            <Route exact path="/users/create" component={AddUser} />
            <Route exact path="/users/:id" component={User} />
            <Route exact path="/users/:id/edit" component={EditUser} />
          </Switch>
          </div>
        </Container>
      </ThemeProvider>
    </Router>
    </>
  );
}

export default App;

import React, { Component } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { useHistory } from "react-router-dom";
import UserService from "../services/UserService";
const userService = new UserService();

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://www.cliptecnologia.com/">
        Clip Tecnologia
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}
const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: "#16a085"
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
}));

export default class Signin extends Component {
  state = {
    userName: "",
    password: "",
    access: ""
  };

  onChangeName = e => {
    this.setState({
      userName: e.target.value
    });
  }; //.

  onChangePasswd = e => {
    this.setState({
      password: e.target.value
    });
  }; //.

  onChangeArea = e => {
    this.setState({
      access: e.target.value
    });
  };

  onSubmit = async e => {
    e.preventDefault();
  }; //.

  componentDidMount() {
    this.setState({
      Area: document.getElementById("txtArea").value
    });
  }

  render() {
    return <this.customSignin />;
  }

  customSignin() {
    let history = useHistory();
    const classes = useStyles();
    return (
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Inicio de Sesión
          </Typography>
          <form  className={classes.form}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="userName"
              label="Usuario"
              name="userName"
              autoComplete="text"
              autoFocus
              required
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Contraseña"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <Button
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={async () => {
                let userData = await userService.Signin(
                  this.state.userName,
                  this.state.password
                );
                this.props.rescueData(userData.user.userName, userData.token);
                history.push("/wiki" + this.state.Area);
              }}
            >
              Entrar
            </Button>
          </form>
        </div>
        <Box mt={8}>
          <Copyright />
        </Box>
      </Container>
    );
  }
}

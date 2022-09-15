import React, { useState } from "react";
// import axios from "../../api/axios";
import {
  Grid,
  Divider,
  Paper,
  Button,
  TextField,
  Typography,
  CircularProgress,
  Avatar,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Alert } from "@material-ui/lab";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
// import { useNavigate, useLocation } from "react-router";

const useStyles = makeStyles((theme) => ({
  logo: {
    marginLeft: "10%",
    width: "80%",
    marginBottom: 10,
  },
  avatar: {
    margin: "auto",
    backgroundColor: theme.palette.primary.main,
  },
  header: {
    marginTop: 10,
    marginBottom: 20,
    textAlign: "center",
  },
  footer: {
    fontSize: 14,
    [theme.breakpoints.down("sx")]: {
      fontSize: 13,
    },
  },
}));

const Login = () => {
  const classes = useStyles();
  // const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  // const location = useLocation();
  // const from = location.state.from.pathname || "/";

  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {};

  return (
    <Grid
      container
      spacing={0}
      alignItems="center"
      justifyContent="center"
      style={{ minHeight: "80vh" }}
    >
      <Grid item sm={6} md={4} lg={3}>
        <Paper
          style={{
            padding: 10,
          }}
        >
          <img
            src={`${process.env.PUBLIC_URL}/images/logo.png`}
            className={classes.logo}
            alt="Logo"
          />
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h2" variant="h4" className={classes.header}>
            SIGN IN
          </Typography>
          <form onSubmit={handleSubmit}>
            <Grid container spacing={1}>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  variant="outlined"
                  required
                  label="Employee ID"
                  value={userId}
                  name="userId"
                  onChange={(e) => setUserId(e.target.value)}
                ></TextField>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  type="password"
                  variant="outlined"
                  required
                  label="Password"
                  value={password}
                  name="password"
                  onChange={(e) => setPassword(e.target.value)}
                ></TextField>
              </Grid>
              <Grid item xs={12}>
                {error.length > 0 && (
                  <Alert
                    style={{ marginTop: 5, marginBottom: 5 }}
                    severity="error"
                  >
                    {error}
                  </Alert>
                )}
              </Grid>
            </Grid>
            <Divider style={{ marginTop: 10, marginBottom: 10 }} />
            <Grid container spacing={1}>
              <Grid item xs={12}>
                {isLoading ? (
                  <CircularProgress />
                ) : (
                  <Button
                    fullWidth
                    type="submit"
                    variant="contained"
                    color="secondary"
                  >
                    Sign In
                  </Button>
                )}
              </Grid>
            </Grid>
          </form>
          <Grid container justifyContent="center" style={{ marginTop: 20 }}>
            <Typography className={classes.footer}>
              Copyright &copy; Action Composites Hightech Industries
            </Typography>
            <Typography className={classes.footer}>
              Developed by VAC IT Department
            </Typography>
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Login;

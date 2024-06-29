import React, { useState, useContext } from "react";
import { Link as RouterLink } from "react-router-dom";

import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid"; 
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

import { i18n } from "../../translate/i18n";

import { AuthContext } from "../../context/Auth/AuthContext";
import logo from "../../assets/logo.png"; // Importe sua imagem de logo aqui

const useStyles = makeStyles(theme => ({
    root: {
        width: "100vw",
        height: "100vh",
        backgroundImage: "url('https://enterup.com.br/wp-content/uploads/2024/06/zap-flow-banner-1920-x-1000-px.png')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover", // Cobrir todo o espaÃ§o disponÃ­vel
        backgroundPosition: "center", // Centralizar a imagem
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
    },
    paper: {
        backgroundColor: theme.palette.login, // Cor de fundo do papel
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "55px 30px",
        borderRadius: "12.5px",
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: "100%", // Corrigir problema no IE 11.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
    powered: {
        color: "white"
    }
}));

const Login = () => {
    const classes = useStyles();

    const [user, setUser] = useState({ email: "", password: "" });

    const { handleLogin } = useContext(AuthContext);

    const handleChangeInput = e => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    const handlSubmit = e => {
        e.preventDefault();
        handleLogin(user);
    };

    return (
        <div className={classes.root}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <div className={classes.paper}>
                    <div>
                        <center><img style={{ margin: "0 auto", width: "70%" }} src={logo} alt="Logologin" /></center>
                    </div>
                    <form className={classes.form} noValidate onSubmit={handlSubmit}>
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label={i18n.t("login.form.email")}
                            name="email"
                            value={user.email}
                            onChange={handleChangeInput}
                            autoComplete="email"
                            autoFocus
                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label={i18n.t("login.form.password")}
                            type="password"
                            id="password"
                            value={user.password}
                            onChange={handleChangeInput}
                            autoComplete="current-password"
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                        >
                            {i18n.t("login.buttons.submit")}
                        </Button>
                        <Grid container>
                            <Grid item>
                                <Link
                                    href="#"
                                    variant="body2"
                                    component={RouterLink}
                                    to="/signup"
                                >
                                    {i18n.t("login.buttons.register")}
                                </Link>
                            </Grid>
                        </Grid>
                    </form>
                </div>
            </Container>
        </div>
    );
};

export default Login;

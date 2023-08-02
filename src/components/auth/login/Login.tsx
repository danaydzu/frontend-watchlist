import React, {Fragment} from 'react';
import {Button, TextField, Typography} from "@mui/material";
import classes from '../authRootComponent.module.css'
import {IPropsLogin} from "../../../common/types/auth";

const Login: React.FC<IPropsLogin> = (props: IPropsLogin) : JSX.Element => {
    const {setPassword, setEmail, navigate} = props;


    return (

        <>
            <Typography variant="h2" fontFamily='Poppins' textAlign='center'>
                Авторизация
            </Typography>
            <Typography variant="h6" marginBottom={2} fontFamily='Poppins' textAlign='center'>
                Введите ваш логи и пароль
            </Typography>
            <TextField margin='normal' fullWidth={true} placeholder="Введите ваш email" label="Email"
                       variant="outlined" onChange={(e) => setEmail(e.target.value)}/>
            <TextField type='password' margin='normal' fullWidth={true} placeholder="Введите ваш пароль"
                       label="Password"
                       variant="outlined" onChange={(e) => setPassword(e.target.value)}/>
            <Button type='submit' sx={{fontFamily: 'Poppins', marginTop: 2, marginBottom: 2, width: '40%'}}
                    variant="contained">Войти</Button>
            <Typography variant="body1"
                        sx={{fontFamily: 'Poppins', display: 'flex', flexDirection: 'column', textAlign: 'center'}}>
                У вас нет аккаунта?
                <span onClick={()=> navigate('/registration')} className={classes.text}>Регистрация</span>
            </Typography>

        </>
    );
};

export default Login;
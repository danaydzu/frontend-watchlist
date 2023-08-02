import React from 'react';
import {Button, TextField, Typography} from "@mui/material";
import classes from "../authRootComponent.module.css";

import {IPropsRegistration} from "../../../common/types/auth";

const RegistrationPage: React.FC<IPropsRegistration> = ({
                                                            setEmail,
                                                            setPassword,
                                                            setUserName,
                                                            setFirstName,
                                                            setRepeatPassword,
                                                            navigate
                                                        }: IPropsRegistration): JSX.Element => {

    return (
        <>
            <Typography variant="h3" fontFamily='Poppins' textAlign='center'>
                Регистрация
            </Typography>
            <Typography variant="h6" marginBottom={2} fontFamily='Poppins' textAlign='center'>
                Введите данные для регистрации
            </Typography>
            <TextField margin='normal' fullWidth={true} placeholder="Введите ваш username" label="username"
                       variant="outlined" onChange={(e) => setUserName(e.target.value)}/>
            <TextField margin='normal' fullWidth={true} placeholder="Введите вашe имя" label="First name"
                       variant="outlined" onChange={(e) => setFirstName(e.target.value)}/>
            <TextField margin='normal' fullWidth={true} placeholder="Введите ваш email"
                       label="Email"
                       variant="outlined" onChange={(e) => setEmail(e.target.value)}/>
            <TextField type='password' margin='normal' fullWidth={true} placeholder="Введите ваш пароль"
                       label="Password"
                       variant="outlined" onChange={(e) => setPassword(e.target.value)}/>
            <TextField type='password' margin='normal' fullWidth={true} placeholder="Введите повторно ваш пароль"
                       label="Password"
                       variant="outlined" onChange={(e) => setRepeatPassword(e.target.value)}/>
            <Button type='submit' sx={{fontFamily: 'Poppins', marginTop: 2, marginBottom: 2, width: '40%'}}
                    variant="contained">РЕГИСТРАЦИЯ</Button>
            <Typography variant="body1"
                        sx={{fontFamily: 'Poppins', display: 'flex', flexDirection: 'column', textAlign: 'center'}}>
                У вас есть аккаунт?
                <span onClick={() => navigate('/login')} className={classes.text}>Авторизация</span>
            </Typography>
        </>
    );
};

export default RegistrationPage;
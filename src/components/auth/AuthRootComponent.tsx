import React, {useState} from 'react';
import {useLocation, useNavigate} from "react-router-dom";
import Login from "./login/Login";
import classes from './authRootComponent.module.css'
import RegistrationPage from "./register/RegistrationPage";
import {Box} from "@mui/material";

import {instance} from "../../utils/axios";
import {checkErrorsData} from "../../utils/function";

import {useAppDispatch} from "../../utils/hook";
import {login} from "../../store/slice/auth";


const AuthRootComponent: React.FC = (): JSX.Element => {
    const location = useLocation();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [repeatPassword, setRepeatPassword] = useState('')
    const [firstName, setFirstName] = useState('')
    const [userName, setUserName] = useState('')
    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const handleSubmit = async (e: { preventDefault: () => void }) => {


        e.preventDefault()

        const userData = {
            email,
            password
        }

        if (location.pathname === '/login') {
            try {
                const user = await instance.post('auth/login', userData)
                console.log(user.data)
                await dispatch(login(user.data))
                navigate('/')
            } catch (e: any) {
                return e
            }

        } else if (location.pathname === '/registration') {
            try {
                const newUserData = {
                    ...userData,
                    repeatPassword,
                    firstName,
                    username: userName
                }
                console.log(newUserData)

                checkErrorsData(newUserData)
                // Исключаю repeatPassword из нового юзера для отправки на бэк
                const newUser = await instance.post('auth/registration', (
                    ({repeatPassword, ...newUserData}) => newUserData)(newUserData)
                )
                await dispatch(login(newUser.data))
                navigate('/')
                console.log(newUser.data)
            } catch (e) {
                return e
            }

        }

        console.log('нига')
    }

    return (
        <div className={classes.root}>
            <form onSubmit={handleSubmit} className={classes.form}>
                <Box
                    display='flex'
                    justifyContent='center'
                    alignItems='center'
                    flexDirection='column'
                    maxWidth='500px'
                    margin='auto'
                    padding={5}
                    borderRadius={5}
                    boxShadow={'5px 5px 10px #ccc'}


                >
                    {location.pathname === '/login' ?
                        <Login
                            setEmail={setEmail}
                            setPassword={setPassword}
                            navigate={navigate}
                        /> :
                        location.pathname === '/registration' ?
                            <RegistrationPage
                                setEmail={setEmail}
                                setPassword={setPassword}
                                setUserName={setUserName}
                                setFirstName={setFirstName}
                                setRepeatPassword={setRepeatPassword}
                                navigate={navigate}
                            /> : null
                    }
                </Box>

            </form>
        </div>
    )

};

export default AuthRootComponent;
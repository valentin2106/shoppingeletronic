import React from 'react'
import { Container, StyleLogin } from './style'


const Login = () =>{
    return(
        <Container>
            <StyleLogin>
                <h1>Login</h1>
                <input type="text" />
                <input type="text" />
                <button>Entrar</button>
                <span>Cadastre-se</span>
            </ StyleLogin >
        </ Container>
    )
}
export default Login
import React, { useState } from 'react'
import logoImg from '../../assets/images/logo.svg'
import eyes from '../../assets/images/eyes.svg'
import eyesBlock from '../../assets/images/eyesBlock.svg'
import purpleHeartIcon from '../../assets/images/icons/purple-heart.svg'
import { useAuth } from '../../contexts/auth'
import { Link } from 'react-router-dom'

import './styles.css'

function Login() {
    const { SignIn, signed } = useAuth()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [showPass, setShowPas] = useState(false)
    const [targetValue, setTargetValue] = useState(false)

    function changeBox() {
        setTargetValue(!targetValue)
    }



    function changeEyes() {
        setShowPas(!showPass)
    }

    console.log(signed)
    function Logon(){
        SignIn(email, password)
    }

    function ButtonEnter() {
        if (email.length < 10 || password.length < 8) {
            return (
                <div className="button-enter-desable">
                    Entrar
                </div>
            )
        } else {
            return (
                <button className="button-enter" onClick={Logon} type="submit">
                    Entrar
                </button>
            )
        }
    }

    return (
        <div id="page-login">
            <div id="page-login-content">
                <div id="logo-container">
                    <img src={logoImg} alt="Proffy" />
                    <h2>Sua plataforma de estudos online</h2>
                </div>

                <div className="form-container">
                    <h2>Fazer login</h2>
                    <form className="form-content">
                        <input
                            type="email"
                            name="mail"
                            id="mail"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                        />
                        <input
                            type={showPass ? 'text' : "password"}
                            name="password"
                            id="password"
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                        />

                        <button onClick={changeEyes} type="button" id="showPass">
                            <img src={showPass ? eyes : eyesBlock} alt="" />
                        </button>

                        <div className="box-content">
                            <input
                                id="check-box"
                                name="isGoing"
                                type="checkbox"
                                checked={targetValue}
                                onChange={changeBox}
                            />
                            <label>lembrar-me</label>

                            <Link to="/" className="forget-password">
                                <label>Esqueci minha senha</label>
                            </Link>
                        </div>

                    </form>
                    <ButtonEnter />

                    <footer className="footer-container">
                        <div className="footer-register">
                            <label>Não tem conta?</label>
                            <Link to="/">
                                cadastre-se
                            </Link>
                        </div>

                        <p>
                            É de graça
                            <img src={purpleHeartIcon} alt="coração roxo"/>
                        </p>
                    </footer>
                </div>
            </div>
        </div>
    )
}

export default Login
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/login.css';

import { Link, useNavigate  } from 'react-router-dom';
import { useState } from 'react';

const API_URL = "http://localhost:8080/usuarios";

function Login(){

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const usuario = {
            email: e.target.email.value,
            senha: e.target.senha.value
        };

        try {
            const response = await fetch(`${API_URL}/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(usuario)
            });

            if (response.ok) {
                const data = await response.json();

                sessionStorage.setItem('user_id', data.id);
                navigate("/home");
                
            } else {
                alert("Erro ao fazer login");
            }
        } catch (error) {
            console.error(error);
            alert("Erro de conexão com o servidor");
        }
    };

    return (
        <div className='bg-light'>
            <div className="container d-flex justify-content-center align-items-center vh-100">
        
                <div className="card p-4 shadow login-card" >
                
                    <h3 className="text-center mb-4">Login</h3>

                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label className="form-label">Email</label>
                            <input id = "email" type="email" className="form-control" placeholder="Digite seu email" required />
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Senha</label>
                            <input id = "senha" type="password" className="form-control" placeholder="Digite sua senha" required />
                        </div>

                        <button type="submit" className="btn btn-warning text-white fw-semibold w-100">
                            Entrar
                        </button>
                    </form>

                    <div className="text-center mt-3">
                        <small>
                        Não tem conta? <Link to="/registerUser" className="nav-link">Criar Conta</Link>
                        </small>
                    </div>

                </div>

            </div>
        </div>
    );
}

export default Login;
import 'bootstrap/dist/css/bootstrap.min.css';

import { Link } from 'react-router-dom';
import { useState } from 'react';


function RegisterUser() {

    const handleSubmit = async(e) => {
        e.preventDefault();

        // NOMES E CAMPOS DEVEM SER IGUAIS AOS DO BACKEND 
        const usuario = {
            nome: e.target.nome.value,
            email: e.target.email.value,
            senha: e.target.senha.value
        };

        try{
            const response = await fetch('http://localhost:8080/usuarios/save',{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(usuario)
                
            });


            if (response.ok) {
                alert("Usuário registrado com sucesso!");
            } else {
                alert("Erro ao registrar usuáriooo");
            }

        }catch(error){
            console.error(error);
            alert("Erro de conexão com o servidor");
        };
    }

    return (
        <div className="bg-light">
        <div className="container d-flex justify-content-center align-items-center vh-100">

            <div className="card p-4 shadow login-card">
            
            <h3 className="text-center mb-4">Criar Conta</h3>

            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                <label className="form-label">Nome</label>
                <input 
                    id = "nome"

                    type="text" 
                    className="form-control" 
                    placeholder="Digite seu nome" 
                    required 
                />
                </div>

                <div className="mb-3">
                <label className="form-label">Email</label>
                <input 
                    id = "email"

                    type="email" 
                    className="form-control" 
                    placeholder="Digite seu email" 
                    required 
                />
                </div>

                <div className="mb-3">
                <label className="form-label">Senha</label>
                <input 
                    id = "senha"

                    type="password" 
                    className="form-control" 
                    placeholder="Digite sua senha" 
                    required 
                />
                </div>

                <button type="submit" className="btn btn-warning text-white fw-semibold w-100">
                Registrar
                </button>
            </form>

            <div className="text-center mt-3">
                <small>
                Já tem conta? <Link to="/">Fazer login</Link>
                </small>
            </div>

            </div>

        </div>
        </div>
    );
}

export default RegisterUser;
import 'bootstrap/dist/css/bootstrap.min.css';

import { Link } from 'react-router-dom';
import { useState } from 'react';

function RegisterUser() {
    
    // states para armazenar os valores dos campos do formulário
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const handleSubmit = async(e) => {
        e.preventDefault();

        // NOMES E CAMPOS DEVEM SER IGUAIS AOS DO BACKEND
        const usuario = {
            nome: nome,
            email: email,
            senha: senha
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
                    value = {nome} 
                    onChange={(e) => setNome(e.target.value)}

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
                    value = {email} 
                    onChange={(e) => setEmail(e.target.value)}

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
                    value = {senha} 
                    onChange={(e) => setSenha(e.target.value)}

                    type="password" 
                    className="form-control" 
                    placeholder="Digite sua senha" 
                    required 
                />
                </div>

                <button type="submit" className="btn btn-success w-100">
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
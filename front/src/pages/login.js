import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/login.css';

import { Link,  } from 'react-router-dom';

function Login(){
    return (
        <div className='bg-light'>
            <div className="container d-flex justify-content-center align-items-center vh-100">
        
                <div className="card p-4 shadow login-card" >
                
                    <h3 className="text-center mb-4">Login</h3>

                    <form>
                        <div className="mb-3">
                            <label className="form-label">Email</label>
                            <input type="email" className="form-control" placeholder="Digite seu email" required />
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Senha</label>
                            <input type="password" className="form-control" placeholder="Digite sua senha" required />
                        </div>

                        <button type="submit" className="btn btn-primary w-100">
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
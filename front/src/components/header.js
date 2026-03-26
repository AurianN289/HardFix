import 'bootstrap/dist/css/bootstrap.min.css';

import logo from '../assets/circuit-board.png'
import {Bell} from 'lucide-react'
import '../styles/header.css'

function Header() {
    return (
        <div className='sticky-top border-bottom'> 
            <div className='container d-flex justify-content-between align-items-center header ' >
                <div className='d-flex align-items-center col-2'> 
                    <img src={logo} alt="Logo" /> 
                    <p className='fw-bold name-logo'>HardFix</p>
                </div>

                <div className='d-flex col-7' > 
                    <input className='form-control' type="text" placeholder="Pesquisar sobre hardware" /> 
                </div>

                <div className='d-flex justify-content-end align-items-center col-3 gap-3'> 
                    <Bell size={24} />

                    <button className='btn btn-warning fw-bold'> Fazer Pergunta </button>

                    <button className='btn btn-info text-white fw-bold'>U</button>
                </div>
            </div>
        </div>
    );
}

export default Header;
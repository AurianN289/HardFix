import 'bootstrap/dist/css/bootstrap.min.css';

import logo from '../assets/circuit-board.png'
import {Bell} from 'lucide-react'
import '../styles/header.css'

import { Link  } from 'react-router-dom';

function Header() {
    return (
        <header className='sticky-top border-bottom bg-white shadow-sm'> 
            <div className='container d-flex justify-content-between align-items-center header ' >
                <div className='d-flex align-items-center col-2'> 
                    <img src={logo} alt="Logo" /> 
                    <p className='fw-semibold name-logo'>HardFix</p>
                </div>

                <div className='d-flex col-7' > 
                    <input className='form-control' type="text" placeholder="Pesquisar sobre hardware" /> 
                </div>

                <div className='d-flex justify-content-end align-items-center col-3 gap-3'> 
                    <Bell size={24} />

                    <Link to="/registerQuestion" className="btn btn-warning fw-semibold">Fazer pergunta</Link>

                    <button className='btn btn-info text-white fw-bold'>U</button>
                </div>
            </div>
        </header>
    );
}

export default Header;
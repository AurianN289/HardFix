import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/question-detail-card.css'
import { ChevronUp , ChevronDown} from 'lucide-react';


import img from '../assets/Broken.jpg'
import TagBadge from './tagBadge';
import CardAuthor from './cardAuthor';



function QuestionDetailCard(){
    return(
        <article className='d-flex p-5 border rounded shadow-sm bg-white'>   
            <div className='col-1 d-flex flex-column align-items-center gap-2 me-3'>
                <button className='btn btn-light border rounded-circle  votes'><ChevronUp /></button>
                <span>23</span>
                <button className='btn btn-light border rounded-circle votes'><ChevronDown /></button>
            </div>

            <div className='col d-flex flex-column gap-4'>
                <h1>GPU RTX 4070 com artefatos visuais após atualização de driver</h1>
                <div>
                    <p>Olá pessoal, estou com um problema sério na minha RTX 4070 da Gigabyte. Ontem o GeForce Experience sugeriu uma atualização de driver (versão 551.23) e eu instalei normalmente usando a opção Expressa.

                    Logo após reiniciar o PC, comecei a notar pequenos quadrados coloridos (artefatos) piscando na tela, principalmente quando abro navegadores baseados em Chromium (Chrome, Edge) ou quando inicio qualquer jogo. No desktop puro, às vezes acontece, mas é mais raro.

                    Já tentei usar o DDU (Display Driver Uninstaller) em modo de segurança para remover completamente o driver e instalar a versão anterior que estava funcionando perfeitamente, mas surpreendentemente os artefatos continuam! As temperaturas estão normais (GPU em 45°C idle, 65°C em carga).

                    Será que a atualização do driver pode ter causado algum dano físico na VRAM? Ou existe alguma configuração no painel da NVIDIA que eu deveria verificar? A placa tem apenas 3 meses de uso.</p>
                
                </div>

                <div className='col-8'>
                    <img className='w-100 rounded' src={img} />
                </div>

                <div className='mb-3 d-flex gap-2 '>
                    <TagBadge tag="Driver" />  
                    <TagBadge tag="Driver" />  
                    <TagBadge tag="Driver" />
                </div>

                <div className='d-flex justify-content-between'>
                    <CardAuthor nome="Carlos" data={22} />
                    <div>
                        <button className='btn bg-success-subtle px-2 border border-success rounded'>Marcar como Resolvido</button>
                    </div>
                </div>

            </div>
        </article>
    );
}


export default QuestionDetailCard

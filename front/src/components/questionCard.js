import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/question-card.css'

import { ChevronUp } from 'lucide-react';

function QuestionCard({id, votos, respostas, views, titulo, descricao, tags, autor, data}) {
    return(
        <article className='d-flex p-3 border rounded shadow-sm question-card bg-white'>
            <div className='d-flex flex-column align-items-center justify-content-evenly col-1 left text-center gap-2'>
                <div> 
                    <ChevronUp color='#0dcaf0'/> <div className='text-info'>{votos}</div> <p className='text-muted text-uppercase'>Votos</p> 
                </div>
                <div className='bg-success-subtle px-2 border border-success rounded'> <span>{respostas}</span> <p className='text-muted text-uppercase'>Resp</p> </div>
                <div> <span>{views}</span> <p className='text-muted text-uppercase'>Views</p> </div>
            </div>

            <div className='d-flex flex-column col-11 ps-4 right'>
                <h3 className='fs-6 mb-1'>{titulo}</h3>
                <p className='mb-3 text-muted'>{descricao}</p>
                <div className='d-flex gap-2 mb-3'>
                    <p> Performance </p>
                    <p> Performance </p>
                    <p> Performance </p>
                </div>
                <div className='d-flex align-items-center gap-2 author' >
                    <span className='bg-warning rounded-circle text-white d-flex align-items-center justify-content-center fw-bold'>C</span>
                    <span className='fw-bold'>{autor}</span> 
                    <span>.</span> 
                    <time>ha {data} dias</time>
                </div>
            </div>
        </article>
    );
}

export default QuestionCard
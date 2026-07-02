
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/card-author.css'

function CardAuthor({nome, data}){
    return(
        <div className='d-flex align-items-center gap-2 author' >
            <span className='bg-info rounded-circle text-white d-flex align-items-center justify-content-center fw-bold first-letter'>{nome.charAt(0)}</span>
            <span className='fw-bold'>{nome}</span> 
            <span>.</span> 
            <time>ha {data} dias</time>
        </div>
    );
}


export default CardAuthor


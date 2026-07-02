import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/question-detail.css'

import Header from '../components/header';
import QuestionDetailCard from '../components/questionDetailCard';


function QuestionDetail(){
    return(
        <div className='body '>
            <Header />
            
            <div className='container d-flex flex-column gap-3 mt-4'>
                <p>Voltar para as perguntas</p>

                <QuestionDetailCard />
            </div>
        </div>
    );
}

export default QuestionDetail;

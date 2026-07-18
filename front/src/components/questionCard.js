import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/question-card.css'
import { ChevronUp } from 'lucide-react';

import TagBadge from './tagBadge';
import CardAuthor from './cardAuthor';

import { useNavigate } from "react-router-dom";


function QuestionCard({
    titulo,
    descricao,
    tags = [],
    usuario,
    dataCriacao,
    respostas = []
}) {

    const navigate = useNavigate();

    return (
        <article className="d-flex p-3 border rounded shadow-sm question-card bg-white"
        onClick={() => navigate(`/questionDetail`)} style={{ cursor: "pointer" }}>

            <div className="d-flex flex-column align-items-center justify-content-evenly col-1 text-center gap-2">

                <div>
                    <ChevronUp color="#0dcaf0"/>
                    <div className="text-info">0</div>
                    <p className="text-muted text-uppercase">Votos</p>
                </div>

                <div className="bg-success-subtle px-2 border border-success rounded">
                    <span>{respostas.length}</span>
                    <p className="text-muted text-uppercase">Resp</p>
                </div>

                <div>
                    <span>0</span>
                    <p className="text-muted text-uppercase">Views</p>
                </div>

            </div>

            <div className="d-flex flex-column col-11 ps-4">

                <h3 className="fs-6 mb-1">{titulo}</h3>

                <p className="mb-3 text-muted">{descricao}</p>

                <div className="d-flex gap-2 mb-3">

                    {tags.map((tag) => (
                        <TagBadge
                            key={tag.id}
                            tag={tag.nome}
                        />
                    ))}

                </div>

                <CardAuthor
                    nome={usuario?.nome}
                    data={dataCriacao}
                />

            </div>

        </article>
    );
}
export default QuestionCard
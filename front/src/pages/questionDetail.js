import { useNavigate, useParams } from "react-router-dom";

import QuestionDetailCard from "../components/questionDetailCard";
import AnswerCard from "../components/answerCard";
import AnswerForm from "../components/answerForm";

import usePergunta from "../hooks/usePergunta";
import useRespostas from "../hooks/useRespostas";

import "../styles/question-detail.css";

function QuestionDetail() {

  const { id } = useParams();
  const navigate = useNavigate();

  const {
    question: questionData,
    loading,
    error,
  } = usePergunta(id);

  const {
  answers,
  loadingAnswers,
  answersError,
  adicionarResposta,
} = useRespostas(id);

  function handleAddAnswer(newAnswer) {
    adicionarResposta(newAnswer);
  }

  function handleBack() {
    navigate(-1);
  }

  if (loading) {
    return (
      <main className="container py-4">
        <p>Carregando pergunta...</p>
      </main>
    );
  }

  if (error) {
    return (
      <main className="container py-4">
        <div className="alert alert-danger">
          {error}
        </div>

        <button
          type="button"
          className="btn btn-outline-secondary"
          onClick={handleBack}
        >
          Voltar
        </button>
      </main>
    );
  }

  if (!questionData) {
    return (
      <main className="container py-4">
        <p>Pergunta não encontrada.</p>
      </main>
    );
  }

  const question = {
    id: questionData.id,
    title: questionData.titulo,
    description: questionData.descricao
      ? [questionData.descricao]
      : [],
    image: questionData.image ?? null,
    votes: questionData.votos ?? 0,
    author:
      questionData.autor?.nome ??
      questionData.usuario?.nome ??
      "Usuário desconhecido",
    createdAt:
      questionData.dataCriacao ??
      questionData.data ??
      "",
    resolved: questionData.resolvida ?? false,
    tags: questionData.tags ?? [],
  };

  return (
    <div className="question-detail-page">
      <main className="container question-detail-container py-4">
        <button
          type="button"
          className="btn btn-link text-secondary text-decoration-none p-0 mb-3"
          onClick={handleBack}
        >
          ← Voltar para todas as perguntas
        </button>

        <QuestionDetailCard question={question} />

        <section className="answers-section mt-4">
          <h2 className="fs-5 fw-bold mb-4">
            {answers.length}{" "}
            {answers.length === 1 ? "Resposta" : "Respostas"}
          </h2>

          {loadingAnswers && (
            <p className="text-muted">
              Carregando respostas...
            </p>
          )}

          {answersError && (
            <div className="alert alert-danger">
              {answersError}
            </div>
          )}

          {!loadingAnswers &&
            !answersError &&
            answers.length === 0 && (
              <p className="text-muted">
                Esta pergunta ainda não possui respostas.
              </p>
            )}

          {!loadingAnswers && !answersError && (
            <div className="d-flex flex-column gap-3">
              {answers.map((answer) => (
                <AnswerCard
                  key={answer.id}
                  answer={answer}
                />
              ))}
            </div>
          )}
        </section>

        <AnswerForm 
          questionId={id}
          onAddAnswer={handleAddAnswer} 
        />
      </main>
    </div>
  );
}

export default QuestionDetail;
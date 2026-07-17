import BackButton from "../components/backButton";
import QuestionForm from "../components/questionForm";
import "../styles/register-question.css";

function RegisterQuestion() {
  return (
    <main className="new-question-page py-4">
      <div className="container new-question-container">
        <BackButton />

        <header className="mb-4">
          <h1 className="fw-bold fs-3 mb-2">
            Fazer uma Nova Pergunta
          </h1>

          <p className="text-secondary mb-0">
            Seja específico e forneça o máximo de detalhes possível para que a
            comunidade possa te ajudar.
          </p>
        </header>

        <QuestionForm />
      </div>
    </main>
  );
}

export default RegisterQuestion;
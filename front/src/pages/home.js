import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/home.css";

import Header from "../components/header";
import QuestionCard from "../components/questionCard";
import useQuestions from "../hooks/usePerguntas";

function Home() {
  const {
    questions,
    loading,
    error,
  } = useQuestions();

  return (
    <div className="body">
      <Header />

      <div className="container mt-4">
        <h2 className="fs-4 mb-1">Todas as perguntas</h2>
        <p>{questions.length} perguntas</p>
      </div>

      <main>
        <section className="container d-flex flex-column gap-3 mt-4">
          {loading && <p>Carregando perguntas...</p>}

          {error && (
            <div className="alert alert-danger">
              {error}
            </div>
          )}

          {!loading && !error && questions.length === 0 && (
            <p>Nenhuma pergunta cadastrada.</p>
          )}

          {!loading &&
            !error &&
            questions.map((question, index) => (
              <QuestionCard
                key={question.id ?? index}
                {...question}
                index={index}
              />
            ))}
        </section>
      </main>
    </div>
  );
}

export default Home;
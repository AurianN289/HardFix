import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/home.css";

import Header from "../components/header";
import QuestionCard from "../components/questionCard";

import { useEffect, useState } from "react";

function Home() {
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function loadQuestions() {
      try {
        setLoading(true);
        setError("");

        const response = await fetch(
          "http://localhost:8080/perguntas/findall"
        );

        if (!response.ok) {
          const errorText = await response.text();

          console.error("Erro retornado pelo servidor:", errorText);

          throw new Error(
            `Erro ${response.status} ao buscar perguntas`
          );
        }

        const data = await response.json();

        console.log("Perguntas recebidas:", data);

        setQuestions(Array.isArray(data) ? data : []);
      } catch (error) {
        console.error("Erro ao carregar perguntas:", error);
        setError("Não foi possível carregar as perguntas.");
      } finally {
        setLoading(false);
      }
    }

    loadQuestions();
  }, []);

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
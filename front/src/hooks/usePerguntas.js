import { useEffect, useState } from "react";
import { buscarTodasPerguntas } from "../services/perguntasService";

function usePerguntas() {
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function loadQuestions() {
      try {
        setLoading(true);
        setError("");

        const data = await buscarTodasPerguntas();

        setQuestions(data);
      } catch (error) {
        console.error(error);

        setError("Não foi possível carregar as perguntas.");
      } finally {
        setLoading(false);
      }
    }

    loadQuestions();
  }, []);

  return {
    questions,
    loading,
    error,
  };
}

export default usePerguntas;
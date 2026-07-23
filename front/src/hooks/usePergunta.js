import { useEffect, useState } from "react";
import { buscarPerguntaPorId } from "../services/perguntasService";

function usePergunta(id) {
  const [question, setQuestion] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function loadQuestion() {
      try {
        setLoading(true);
        setError("");

        const data = await buscarPerguntaPorId(id);

        setQuestion(data);
      } catch (error) {
        console.error(error);

        setError(error.message);
      } finally {
        setLoading(false);
      }
    }

    if (id) {
      loadQuestion();
    }
  }, [id]);

  return {
    question,
    loading,
    error,
  };
}

export default usePergunta;
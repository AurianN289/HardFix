import { useState } from "react";
import { cadastrarPergunta } from "../services/perguntasService";

function useCriarPergunta() {
  const [publishing, setPublishing] = useState(false);
  const [publishError, setPublishError] = useState("");

  async function publicarPergunta(pergunta) {
    try {
      setPublishing(true);
      setPublishError("");

      const data = await cadastrarPergunta(pergunta);

      return data;
    } catch (error) {
      console.error(error);

      setPublishError(
        error.message || "Não foi possível publicar a pergunta."
      );

      throw error;
    } finally {
      setPublishing(false);
    }
  }

  return {
    publicarPergunta,
    publishing,
    publishError,
  };
}

export default useCriarPergunta;
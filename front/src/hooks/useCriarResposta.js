import { useState } from "react";
import { cadastrarResposta } from "../services/respostasService";

function useCriarResposta() {
  const [publishing, setPublishing] = useState(false);
  const [publishError, setPublishError] = useState("");

  async function publicarResposta(resposta) {
    try {
      setPublishing(true);
      setPublishError("");

      return await cadastrarResposta(resposta);
    } catch (error) {
      console.error(error);

      setPublishError(
        error.message || "Não foi possível publicar a resposta."
      );

      throw error;
    } finally {
      setPublishing(false);
    }
  }

  return {
    publicarResposta,
    publishing,
    publishError,
  };
}

export default useCriarResposta;
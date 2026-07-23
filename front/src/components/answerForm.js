import { useState } from "react";
import useCriarResposta from "../hooks/useCriarResposta";

function AnswerForm({ questionId, onAddAnswer }) {
  const [content, setContent] = useState("");

  const {
    publicarResposta,
    publishing,
    publishError,
  } = useCriarResposta();

  async function handleSubmit(event) {
    event.preventDefault();

    if (!content.trim()) {
      alert("Digite uma resposta.");
      return;
    }

    const userId = localStorage.getItem("user_id");

    if (!userId) {
      alert("Você precisa estar logado para responder.");
      return;
    }

    const resposta = {
      conteudo: content.trim(),

      usuario: {
        id: Number(userId),
      },

      pergunta: {
        id: Number(questionId),
      },
    };

    try {
      const respostaCadastrada =
        await publicarResposta(resposta);

      setContent("");

      if (onAddAnswer) {
        onAddAnswer(respostaCadastrada);
      }

      alert("Resposta publicada com sucesso!");
    } catch (error) {
      // O erro já está sendo controlado pelo hook.
    }
  }

  return (
    <section className="mt-5">
      <h2 className="fs-5 fw-bold mb-3">
        Sua resposta
      </h2>

      <form onSubmit={handleSubmit}>
        <textarea
          className="form-control"
          rows={7}
          placeholder="Escreva sua resposta..."
          value={content}
          onChange={(event) => setContent(event.target.value)}
          disabled={publishing}
        />

        {publishError && (
          <div className="alert alert-danger mt-3">
            {publishError}
          </div>
        )}

        <button
          type="submit"
          className="btn btn-info fw-semibold mt-3"
          disabled={publishing || !content.trim()}
        >
          {publishing
            ? "Publicando..."
            : "Publicar resposta"}
        </button>
      </form>
    </section>
  );
}

export default AnswerForm;
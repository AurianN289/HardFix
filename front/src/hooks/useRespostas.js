import { useCallback, useEffect, useState } from "react";
import {
  buscarRespostasPorPergunta,
} from "../services/respostasService";

function useRespostas(perguntaId) {
  const [answers, setAnswers] = useState([]);
  const [loadingAnswers, setLoadingAnswers] = useState(true);
  const [answersError, setAnswersError] = useState("");

  const carregarRespostas = useCallback(async () => {
    if (!perguntaId) {
      return;
    }

    try {
      setLoadingAnswers(true);
      setAnswersError("");

      const data =
        await buscarRespostasPorPergunta(perguntaId);

      const formattedAnswers = data.map((answer) => ({
        id: answer.id,
        votes: answer.votos ?? 0,
        resolved: answer.resolvida ?? false,

        author:
          answer.usuario?.nome ??
          answer.autor?.nome ??
          "Usuário",

        createdAt:
          answer.dataCriacao ??
          answer.createdAt ??
          "",

        content: Array.isArray(answer.conteudo)
          ? answer.conteudo
          : answer.conteudo
            ? [answer.conteudo]
            : [],
      }));

      setAnswers(formattedAnswers);
    } catch (error) {
      console.error(error);

      setAnswersError(
        "Não foi possível carregar as respostas."
      );
    } finally {
      setLoadingAnswers(false);
    }
  }, [perguntaId]);

  useEffect(() => {
    carregarRespostas();
  }, [carregarRespostas]);

  function adicionarResposta(answer) {
    const formattedAnswer = {
      id: answer.id,
      votes: answer.votos ?? 0,
      resolved: answer.resolvida ?? false,

      author:
        answer.usuario?.nome ??
        answer.autor?.nome ??
        "Usuário",

      createdAt: answer.dataCriacao ?? "Agora",

      content: Array.isArray(answer.conteudo)
        ? answer.conteudo
        : answer.conteudo
          ? [answer.conteudo]
          : [],
    };

    setAnswers((currentAnswers) => [
      ...currentAnswers,
      formattedAnswer,
    ]);
  }

  return {
    answers,
    loadingAnswers,
    answersError,
    adicionarResposta,
    carregarRespostas,
  };
}

export default useRespostas;
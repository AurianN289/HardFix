import { useCallback, useEffect, useState } from "react";
import {
  buscarRespostasPorPergunta,
} from "../services/respostasService";

function formatarResposta(answer) {
  return {
    id: answer.id,
    votes: answer.votos ?? 0,
    resolved: answer.resolvida ?? false,

    author:
      answer.nomeUsuario ??
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
  };
}

function useRespostas(perguntaId) {
  const [answers, setAnswers] = useState([]);
  const [loadingAnswers, setLoadingAnswers] = useState(true);
  const [answersError, setAnswersError] = useState("");

  const carregarRespostas = useCallback(async () => {
    if (!perguntaId) {
      setAnswers([]);
      setLoadingAnswers(false);
      return;
    }

    try {
      setLoadingAnswers(true);
      setAnswersError("");

      const data =
        await buscarRespostasPorPergunta(perguntaId);

      console.log("Respostas recebidas da API:", data);

      if (!Array.isArray(data)) {
        throw new Error(
          "O back-end não retornou uma lista de respostas"
        );
      }

      const formattedAnswers = data.map(formatarResposta);

      console.log(
        "Respostas formatadas:",
        formattedAnswers
      );

      setAnswers(formattedAnswers);
    } catch (error) {
      console.error("Erro ao carregar respostas:", error);

      setAnswers([]);
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
    if (!answer) {
      return;
    }

    setAnswers((currentAnswers) => [
      ...currentAnswers,
      formatarResposta(answer),
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
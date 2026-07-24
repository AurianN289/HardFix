import { useEffect, useState } from "react";

import {
  buscarVotoDaPergunta,
  votarEmPergunta,
} from "../services/votosService";

function useVotoPergunta(perguntaId) {
  const [placar, setPlacar] = useState(0);
  const [meuVoto, setMeuVoto] = useState(null);
  const [loadingVotes, setLoadingVotes] = useState(true);
  const [voting, setVoting] = useState(false);
  const [voteError, setVoteError] = useState("");

  useEffect(() => {
    async function carregarVotos() {
      if (!perguntaId) {
        return;
      }

      try {
        setLoadingVotes(true);
        setVoteError("");

        const data =
          await buscarVotoDaPergunta(perguntaId);

        setPlacar(data.placar ?? 0);
        setMeuVoto(data.meuVoto ?? null);
      } catch (error) {
        console.error(error);
        setVoteError(error.message);
      } finally {
        setLoadingVotes(false);
      }
    }

    carregarVotos();
  }, [perguntaId]);

  async function votar(tipo) {
    try {
      setVoting(true);
      setVoteError("");

      const data = await votarEmPergunta(
        perguntaId,
        tipo
      );

      setPlacar(data.placar ?? 0);
      setMeuVoto(data.meuVoto ?? null);
    } catch (error) {
      console.error(error);
      setVoteError(error.message);
    } finally {
      setVoting(false);
    }
  }

  return {
    placar,
    meuVoto,
    loadingVotes,
    voting,
    voteError,
    votar,
  };
}

export default useVotoPergunta;
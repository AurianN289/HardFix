import { useEffect, useState } from "react";
import {
  buscarVotoDaResposta,
  votarEmResposta,
} from "../services/votosService";

function useVotoResposta(respostaId) {
  const [placar, setPlacar] = useState(0);
  const [meuVoto, setMeuVoto] = useState(null);
  const [loading, setLoading] = useState(true);
  const [voting, setVoting] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    async function carregarVotos() {
      if (!respostaId) return;

      try {
        setLoading(true);
        setError("");

        const data = await buscarVotoDaResposta(respostaId);

        setPlacar(data.placar ?? 0);
        setMeuVoto(data.meuVoto ?? null);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }

    carregarVotos();
  }, [respostaId]);

  async function votar(tipo) {
    try {
      setVoting(true);
      setError("");

      const data = await votarEmResposta(respostaId, tipo);

      setPlacar(data.placar ?? 0);
      setMeuVoto(data.meuVoto ?? null);
    } catch (error) {
      setError(error.message);
    } finally {
      setVoting(false);
    }
  }

  return {
    placar,
    meuVoto,
    loading,
    voting,
    error,
    votar,
  };
}

export default useVotoResposta;
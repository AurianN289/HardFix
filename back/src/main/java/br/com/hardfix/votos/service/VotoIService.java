package br.com.hardfix.votos.service;

import br.com.hardfix.votos.dto.ResultadoVotoDTO;
import br.com.hardfix.votos.entity.Voto;
import br.com.hardfix.votos.enums.TipoVoto;

public interface VotoIService {

    ResultadoVotoDTO votarEmPergunta(Long perguntaId, Long usuarioId, TipoVoto tipo);

    ResultadoVotoDTO buscarVotoDaPergunta(Long perguntaId, Long usuarioId);
}
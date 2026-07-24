package br.com.hardfix.votos.dto;

import br.com.hardfix.votos.enums.TipoVoto;
import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public class ResultadoVotoDTO {

    private long placar;
    private TipoVoto meuVoto;
}

package br.com.hardfix.respostas.dto;

import java.time.LocalDateTime;

public record RespostaResponseDto(
        Long id,
        String conteudo,
        LocalDateTime dataCriacao,
        String nomeUsuario
) {
}

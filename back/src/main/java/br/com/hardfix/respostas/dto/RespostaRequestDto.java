package br.com.hardfix.respostas.dto;

public record RespostaRequestDto(
        String conteudo,
        Long perguntaId,
        Long usuarioId
) {
}
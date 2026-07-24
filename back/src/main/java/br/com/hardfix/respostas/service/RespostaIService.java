package br.com.hardfix.respostas.service;

import br.com.hardfix.respostas.dto.RespostaRequestDto;
import br.com.hardfix.respostas.dto.RespostaResponseDto;

import java.util.List;

public interface RespostaIService {

    RespostaResponseDto save(RespostaRequestDto dto);

    List<RespostaResponseDto> findAll();

    List<RespostaResponseDto> findByPerguntaId(Long perguntaId);
}
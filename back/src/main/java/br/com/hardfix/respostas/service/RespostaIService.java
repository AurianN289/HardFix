package br.com.hardfix.respostas.service;

import br.com.hardfix.respostas.entity.Resposta;

import java.util.List;

public interface RespostaIService {

    Resposta save(Resposta resposta) throws RuntimeException;

    List<Resposta> findAll() throws RuntimeException;

    List<Resposta> findByPerguntaId(Long perguntaId) throws RuntimeException;
}
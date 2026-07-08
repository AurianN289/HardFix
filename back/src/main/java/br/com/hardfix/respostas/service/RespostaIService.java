package br.com.hardfix.respostas.service;

import br.com.hardfix.respostas.entity.Resposta;

public interface RespostaIService {

    void save(Resposta resposta) throws RuntimeException;
}
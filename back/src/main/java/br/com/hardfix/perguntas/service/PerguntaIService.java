package br.com.hardfix.perguntas.service;

import br.com.hardfix.perguntas.entity.Pergunta;

public interface PerguntaIService {

    void save(Pergunta pergunta) throws RuntimeException;

}

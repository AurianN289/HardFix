package br.com.hardfix.perguntas.service;

import br.com.hardfix.perguntas.entity.Pergunta;

import java.util.List;

public interface PerguntaIService {

    void save(Pergunta pergunta) throws RuntimeException;

    List<Pergunta> findAll() throws RuntimeException;

    Pergunta findById(Long id) throws RuntimeException;
}

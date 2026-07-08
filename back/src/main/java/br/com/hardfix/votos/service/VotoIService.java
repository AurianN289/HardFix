package br.com.hardfix.votos.service;

import br.com.hardfix.votos.entity.Voto;

public interface VotoIService {

    void save(Voto voto) throws RuntimeException;
}
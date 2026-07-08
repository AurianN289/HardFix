package br.com.hardfix.notificacoes.service;

import br.com.hardfix.notificacoes.entity.Notificacao;

public interface NotificacaoIService {

    void save(Notificacao notificacao) throws RuntimeException;

}
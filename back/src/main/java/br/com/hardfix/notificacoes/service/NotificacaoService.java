package br.com.hardfix.notificacoes.service;

import br.com.hardfix.notificacoes.entity.Notificacao;
import br.com.hardfix.notificacoes.repository.NotificacaoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class NotificacaoService implements NotificacaoIService {

    @Autowired
    private NotificacaoRepository notificacaoRepository;

    public NotificacaoService(NotificacaoRepository notificacaoRepository) {
        this.notificacaoRepository = notificacaoRepository;
    }

    @Override
    public void save(Notificacao notificacao) throws RuntimeException {

        if (notificacao == null) {
            throw new RuntimeException("dados vazios");
        } else if (notificacao.getId() != null) {
            throw new RuntimeException("id ja existe");
        } else {
            notificacaoRepository.save(notificacao);
        }

    }

}
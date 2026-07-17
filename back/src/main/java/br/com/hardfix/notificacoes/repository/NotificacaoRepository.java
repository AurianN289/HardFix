package br.com.hardfix.notificacoes.repository;

import br.com.hardfix.notificacoes.entity.Notificacao;
import org.springframework.data.domain.Example;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.FluentQuery;
import org.springframework.stereotype.Repository;

import java.util.function.Function;

@Repository
public interface NotificacaoRepository extends JpaRepository<Notificacao, Long> {

}
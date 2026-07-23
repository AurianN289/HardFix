package br.com.hardfix.respostas.repository;

import br.com.hardfix.respostas.entity.Resposta;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface RespostaRepository extends JpaRepository<Resposta, Long> {
    List<Resposta> findByPerguntaId(Long perguntaId);
}
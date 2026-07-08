package br.com.hardfix.perguntas.repository;

import br.com.hardfix.perguntas.entity.Pergunta;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PerguntaRepository extends JpaRepository<Pergunta, Long> {

}

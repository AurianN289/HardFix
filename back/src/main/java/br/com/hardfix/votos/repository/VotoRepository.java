package br.com.hardfix.votos.repository;

import br.com.hardfix.votos.entity.Voto;
import br.com.hardfix.votos.enums.TipoVoto;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface VotoRepository extends JpaRepository<Voto, Long> {
    Optional<Voto> findByUsuarioIdAndPerguntaId(Long usuarioId, Long perguntaId);
    Optional<Voto> findByUsuarioIdAndRespostaId(Long usuarioId, Long respostaId);

    @Query("""
        SELECT
            COALESCE(
                SUM(
                    CASE
                        WHEN v.tipo = :upvote THEN 1
                        ELSE -1
                    END
                ),
                0
            )
        FROM Voto v
        WHERE v.pergunta.id = :perguntaId
    """)
    long calcularPlacarDaPergunta(
            @Param("perguntaId") Long perguntaId,
            @Param("upvote") TipoVoto upvote
    );

    @Query("""
    SELECT COALESCE(
        SUM(
            CASE
                WHEN v.tipo = :upvote THEN 1
                ELSE -1
            END
        ),
        0
    )
    FROM Voto v
    WHERE v.resposta.id = :respostaId
""")
    Long calcularPlacarDaResposta(
            @Param("respostaId") Long respostaId,
            @Param("upvote") TipoVoto upvote
    );
}
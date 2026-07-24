package br.com.hardfix.votos.entity;

import br.com.hardfix.perguntas.entity.Pergunta;
import br.com.hardfix.respostas.entity.Resposta;
import br.com.hardfix.usuarios.entity.Usuario;
import br.com.hardfix.votos.enums.TipoVoto;
import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(
        name = "votos",
        uniqueConstraints = {
                @UniqueConstraint(
                        name = "uk_voto_usuario_pergunta",
                        columnNames = {"usuario_id", "pergunta_id"}
                )
        }
)
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Voto {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private TipoVoto tipo;

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "usuario_id", nullable = false)
    private Usuario usuario;

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "pergunta_id", nullable = false)
    private Pergunta pergunta;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "resposta_id")
    private Resposta resposta;
}
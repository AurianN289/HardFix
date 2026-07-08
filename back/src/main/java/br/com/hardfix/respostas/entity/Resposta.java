package br.com.hardfix.respostas.entity;

import br.com.hardfix.infraestructure.entity.PersistenceEntity;
import br.com.hardfix.perguntas.entity.Pergunta;
import br.com.hardfix.tags.entity.Tag;
import br.com.hardfix.usuarios.entity.Usuario;
import br.com.hardfix.votos.entity.Voto;
import jakarta.persistence.*;
import lombok.*;

import java.io.Serializable;
import java.time.LocalDateTime;
import java.util.List;

@Entity
@Table(name = "respostas")
@Data
@AllArgsConstructor
@NoArgsConstructor
@EqualsAndHashCode(callSuper = false)
public class Resposta extends PersistenceEntity implements Serializable {

    @Column(name = "conteudo", nullable = false, columnDefinition = "TEXT")
    private String conteudo;

    @Column(name = "data_criacao", nullable = false)
    private LocalDateTime dataCriacao = LocalDateTime.now();

    @ManyToOne
    @JoinColumn(name = "usuario_id")
    private Usuario usuario;

    @ManyToOne
    @JoinColumn(name = "pergunta_id")
    private Pergunta pergunta;

    @OneToMany(mappedBy = "resposta")
    private List<Voto> votos;
    
}
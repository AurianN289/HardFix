package br.com.hardfix.perguntas.entity;

import br.com.hardfix.infraestructure.entity.PersistenceEntity;
import br.com.hardfix.respostas.entity.Resposta;
import br.com.hardfix.tags.entity.Tag;
import br.com.hardfix.usuarios.entity.Usuario;
import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

import java.io.Serializable;
import java.time.LocalDateTime;
import java.util.List;

@Entity
@Table(name="perguntas")
@Data
@AllArgsConstructor
@NoArgsConstructor
@EqualsAndHashCode(callSuper = false)
public class Pergunta extends PersistenceEntity implements Serializable {

    @Column(name = "titulo", nullable = false)
    private String titulo;

    @Column(name = "descricao", nullable = false, columnDefinition = "TEXT")
    private String descricao;

    @Column(name = "data_criacao",  nullable = false)
    private LocalDateTime dataCriacao = LocalDateTime.now();;

    @ManyToOne
    @JoinColumn(name = "usuario_id")
    private Usuario usuario;

    @JsonIgnore
    @OneToMany(mappedBy = "pergunta")
    private List<Resposta> respostas;

    @ManyToMany
    @JoinTable(
            name = "pergunta_tags",
            joinColumns = @JoinColumn(name = "pergunta_id"),
            inverseJoinColumns = @JoinColumn(name = "tag_id")
    )
    private List<Tag> tags;


}

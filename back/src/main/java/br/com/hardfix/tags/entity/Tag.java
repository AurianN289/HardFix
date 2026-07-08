package br.com.hardfix.tags.entity;

import br.com.hardfix.infraestructure.entity.PersistenceEntity;
import br.com.hardfix.perguntas.entity.Pergunta;
import br.com.hardfix.respostas.entity.Resposta;
import br.com.hardfix.usuarios.entity.Usuario;
import jakarta.persistence.*;
import lombok.*;

import java.io.Serializable;
import java.util.List;

@Entity
@Table(name = "tags")
@Data
@AllArgsConstructor
@NoArgsConstructor
@EqualsAndHashCode(callSuper = false)
public class Tag extends PersistenceEntity implements Serializable {

    @Column(name = "nome", nullable = false, unique = true)
    private String nome;

    @Column(name = "descricao")
    private String descricao;

    @ManyToOne
    @JoinColumn(name = "usuario_id")
    private Usuario usuario;

    @ManyToMany(mappedBy = "tags")
    private List<Pergunta> perguntas;
}
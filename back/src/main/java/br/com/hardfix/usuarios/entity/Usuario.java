
package br.com.hardfix.usuarios.entity;

import br.com.hardfix.infraestructure.entity.PersistenceEntity;
import br.com.hardfix.notificacoes.entity.Notificacao;
import br.com.hardfix.perguntas.entity.Pergunta;
import br.com.hardfix.respostas.entity.Resposta;
import br.com.hardfix.tags.entity.Tag;
import br.com.hardfix.votos.entity.Voto;
import br.com.hardfix.votos.service.VotoService;
import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.*;

import java.io.Serializable;
import java.util.List;

@Entity
@Table(name = "usuarios")
@Data
@AllArgsConstructor
@NoArgsConstructor
@EqualsAndHashCode(callSuper = false)
public class Usuario extends PersistenceEntity implements Serializable{

    @Column(name = "nome", nullable = false)
    private String nome;

    @Column(name="email", nullable = false, unique = true)
    private String email;

    @Column(name = "senha",  nullable = false)
    private String senha;

    @JsonIgnore
    @OneToMany(mappedBy = "usuario")
    private List<Pergunta> perguntas;

    @JsonIgnore
    @OneToMany(mappedBy = "usuario")
    private List<Resposta> respostas;

    @JsonIgnore
    @OneToMany(mappedBy = "usuario")
    private List<Notificacao> notificacoes;

    @JsonIgnore
    @OneToMany(mappedBy = "usuario")
    private List<Voto> votos;
}

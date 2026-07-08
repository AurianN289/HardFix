package br.com.hardfix.notificacoes.entity;

import br.com.hardfix.infraestructure.entity.PersistenceEntity;
import jakarta.persistence.*;
import lombok.*;

import java.io.Serializable;
import java.time.LocalDateTime;

@Entity
@Table(name = "notificacoes")
@Data
@AllArgsConstructor
@NoArgsConstructor
@EqualsAndHashCode(callSuper = false)
public class Notificacao extends PersistenceEntity implements Serializable {

    @Column(name = "mensagem", nullable = false)
    private String mensagem;

    @Column(name = "lida", nullable = false)
    private Boolean lida = false;

    @Column(name = "data_envio", nullable = false)
    private LocalDateTime dataEnvio = LocalDateTime.now();


}
package br.com.hardfix.votos.entity;

import br.com.hardfix.infraestructure.entity.PersistenceEntity;
import br.com.hardfix.votos.enums.TipoVoto;
import jakarta.persistence.*;
import lombok.*;

import java.io.Serializable;
import java.time.LocalDateTime;

@Entity
@Table(name = "votos")
@Data
@AllArgsConstructor
@NoArgsConstructor
@EqualsAndHashCode(callSuper = false)
public class Voto extends PersistenceEntity implements Serializable {

    @Enumerated(EnumType.STRING)
    @Column(name = "tipo", nullable = false)
    private TipoVoto tipo;

    @Column(name = "data_criacao", nullable = false)
    private LocalDateTime dataCriacao = LocalDateTime.now();

}
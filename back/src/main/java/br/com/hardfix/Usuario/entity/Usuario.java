
package br.com.hardfix.Usuario.entity;

import br.com.hardfix.infraestructure.entity.PersistenceEntity;
import jakarta.persistence.*;
import lombok.*;

import java.io.Serializable;

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

    
}

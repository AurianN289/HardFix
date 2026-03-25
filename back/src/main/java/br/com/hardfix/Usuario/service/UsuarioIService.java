
package br.com.hardfix.Usuario.service;


import br.com.hardfix.Usuario.entity.Usuario;

public interface UsuarioIService {
    
    void save(Usuario usuario) throws RuntimeException;
}

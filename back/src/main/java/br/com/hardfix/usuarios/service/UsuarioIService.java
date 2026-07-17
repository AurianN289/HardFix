
package br.com.hardfix.usuarios.service;


import br.com.hardfix.usuarios.entity.Usuario;

public interface UsuarioIService {
    
    void save(Usuario usuario) throws RuntimeException;

    Usuario login(Usuario usuario) throws RuntimeException;
}

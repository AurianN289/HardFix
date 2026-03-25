
package br.com.hardfix.Usuario.service;

import br.com.hardfix.Usuario.entity.Usuario;
import br.com.hardfix.Usuario.repository.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service
public class UsuarioService implements UsuarioIService {
    
    @Autowired
    private UsuarioRepository usuarioRepository;

    public UsuarioService(UsuarioRepository usuarioRepository) {
        this.usuarioRepository = usuarioRepository;
    }

    @Override
    public void save(Usuario usuario) throws RuntimeException{
        if(usuario == null){
            throw new RuntimeException("dados vazios");
        }else if(usuario.getId() != null){
            throw new RuntimeException("id ja existe");
        }else{
            usuarioRepository.save(usuario);
        }
    }

}

package br.com.hardfix.perguntas.service;

import br.com.hardfix.perguntas.entity.Pergunta;
import br.com.hardfix.perguntas.repository.PerguntaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PerguntaService implements PerguntaIService {

    @Autowired
    private PerguntaRepository perguntaRepository;

    public PerguntaService(PerguntaRepository perguntaRepository) {
        this.perguntaRepository = perguntaRepository;
    }

    @Override
    public void save(Pergunta pergunta) throws RuntimeException{
        if(pergunta == null){
            throw new RuntimeException("dados vazios");
        }else if(pergunta.getId() != null){
            throw new RuntimeException("id ja existe");
        }else{
            perguntaRepository.save(pergunta);
        }
    }

    public List<Pergunta> findAll() throws RuntimeException{
        return perguntaRepository.findAll();
    }
}

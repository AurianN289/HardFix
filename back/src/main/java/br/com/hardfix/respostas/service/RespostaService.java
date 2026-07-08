package br.com.hardfix.respostas.service;

import br.com.hardfix.respostas.entity.Resposta;
import br.com.hardfix.respostas.repository.RespostaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class RespostaService implements RespostaIService {

    @Autowired
    private RespostaRepository respostaRepository;

    public RespostaService(RespostaRepository respostaRepository) {
        this.respostaRepository = respostaRepository;
    }

    @Override
    public void save(Resposta resposta) throws RuntimeException {
        if (resposta == null) {
            throw new RuntimeException("dados vazios");
        } else if (resposta.getId() != null) {
            throw new RuntimeException("id ja existe");
        } else {
            respostaRepository.save(resposta);
        }
    }
}
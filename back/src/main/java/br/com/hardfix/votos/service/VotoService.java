package br.com.hardfix.votos.service;

import br.com.hardfix.votos.entity.Voto;
import br.com.hardfix.votos.repository.VotoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class VotoService implements VotoIService {

    @Autowired
    private VotoRepository votoRepository;

    public VotoService(VotoRepository votoRepository) {
        this.votoRepository = votoRepository;
    }

    @Override
    public void save(Voto voto) throws RuntimeException {
        if (voto == null) {
            throw new RuntimeException("dados vazios");
        } else if (voto.getId() != null) {
            throw new RuntimeException("id ja existe");
        } else {
            votoRepository.save(voto);
        }
    }
}
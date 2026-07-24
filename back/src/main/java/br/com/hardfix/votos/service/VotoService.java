package br.com.hardfix.votos.service;

import br.com.hardfix.perguntas.entity.Pergunta;
import br.com.hardfix.perguntas.repository.PerguntaRepository;
import br.com.hardfix.usuarios.entity.Usuario;
import br.com.hardfix.usuarios.repository.UsuarioRepository;
import br.com.hardfix.votos.dto.ResultadoVotoDTO;
import br.com.hardfix.votos.entity.Voto;
import br.com.hardfix.votos.enums.TipoVoto;
import br.com.hardfix.votos.repository.VotoRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@Service
@RequiredArgsConstructor
public class VotoService implements VotoIService {

    private final VotoRepository votoRepository;
    private final PerguntaRepository perguntaRepository;
    private final UsuarioRepository usuarioRepository;

    @Override
    @Transactional
    public ResultadoVotoDTO votarEmPergunta(
            Long perguntaId,
            Long usuarioId,
            TipoVoto tipo
    ) {
        if (tipo == null) {
            throw new RuntimeException("O tipo do voto é obrigatório.");
        }

        Pergunta pergunta = perguntaRepository
                .findById(perguntaId)
                .orElseThrow(() ->
                        new RuntimeException("Pergunta não encontrada.")
                );

        Usuario usuario = usuarioRepository
                .findById(usuarioId)
                .orElseThrow(() ->
                        new RuntimeException("Usuário não encontrado.")
                );

        Optional<Voto> votoExistente =
                votoRepository.findByUsuarioIdAndPerguntaId(
                        usuarioId,
                        perguntaId
                );

        TipoVoto meuVoto;

        if (votoExistente.isEmpty()) {
            Voto voto = new Voto();
            voto.setTipo(tipo);
            voto.setUsuario(usuario);
            voto.setPergunta(pergunta);

            votoRepository.save(voto);
            meuVoto = tipo;
        } else {
            Voto voto = votoExistente.get();

            if (voto.getTipo() == tipo) {
                // Clicou novamente no mesmo botão: remove o voto.
                votoRepository.delete(voto);
                meuVoto = null;
            } else {
                // Mudou de UPVOTE para DOWNVOTE ou vice-versa.
                voto.setTipo(tipo);
                votoRepository.save(voto);
                meuVoto = tipo;
            }
        }

        long placar = calcularPlacar(perguntaId);

        return new ResultadoVotoDTO(placar, meuVoto);
    }

    @Override
    @Transactional(readOnly = true)
    public ResultadoVotoDTO buscarVotoDaPergunta(
            Long perguntaId,
            Long usuarioId
    ) {
        if (!perguntaRepository.existsById(perguntaId)) {
            throw new RuntimeException("Pergunta não encontrada.");
        }

        TipoVoto meuVoto = null;

        if (usuarioId != null) {
            meuVoto = votoRepository
                    .findByUsuarioIdAndPerguntaId(usuarioId, perguntaId)
                    .map(Voto::getTipo)
                    .orElse(null);
        }

        long placar = calcularPlacar(perguntaId);

        return new ResultadoVotoDTO(placar, meuVoto);
    }

    private long calcularPlacar(Long perguntaId) {
        return votoRepository.calcularPlacarDaPergunta(
                perguntaId,
                TipoVoto.UPVOTE
        );
    }
}
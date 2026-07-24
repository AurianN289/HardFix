package br.com.hardfix.respostas.service;

import br.com.hardfix.perguntas.entity.Pergunta;
import br.com.hardfix.perguntas.repository.PerguntaRepository;
import br.com.hardfix.respostas.dto.RespostaRequestDto;
import br.com.hardfix.respostas.dto.RespostaResponseDto;
import br.com.hardfix.respostas.entity.Resposta;
import br.com.hardfix.respostas.repository.RespostaRepository;
import br.com.hardfix.usuarios.entity.Usuario;
import br.com.hardfix.usuarios.repository.UsuarioRepository;

import lombok.RequiredArgsConstructor;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.util.List;

@Service
@RequiredArgsConstructor
public class RespostaService implements RespostaIService {

    private final RespostaRepository respostaRepository;
    private final UsuarioRepository usuarioRepository;
    private final PerguntaRepository perguntaRepository;

    @Override
    @Transactional
    public RespostaResponseDto save(RespostaRequestDto dto) {

        if (dto == null) {
            throw new RuntimeException(
                    "Dados da resposta não informados"
            );
        }

        if (dto.conteudo() == null ||
                dto.conteudo().isBlank()) {

            throw new RuntimeException(
                    "O conteúdo da resposta é obrigatório"
            );
        }

        if (dto.perguntaId() == null) {
            throw new RuntimeException(
                    "A pergunta é obrigatória"
            );
        }

        if (dto.usuarioId() == null) {
            throw new RuntimeException(
                    "O usuário é obrigatório"
            );
        }

        Pergunta pergunta = perguntaRepository
                .findById(dto.perguntaId())
                .orElseThrow(() ->
                        new RuntimeException("Pergunta não encontrada")
                );

        Usuario usuario = usuarioRepository
                .findById(dto.usuarioId())
                .orElseThrow(() ->
                        new RuntimeException("Usuário não encontrado")
                );

        Resposta resposta = new Resposta();

        resposta.setConteudo(dto.conteudo());
        resposta.setDataCriacao(LocalDateTime.now());
        resposta.setPergunta(pergunta);
        resposta.setUsuario(usuario);

        Resposta respostaSalva =
                respostaRepository.save(resposta);

        return converterParaDTO(respostaSalva);
    }

    @Override
    @Transactional(readOnly = true)
    public List<RespostaResponseDto> findAll() {
        return respostaRepository
                .findAll()
                .stream()
                .map(this::converterParaDTO)
                .toList();
    }

    @Override
    @Transactional(readOnly = true)
    public List<RespostaResponseDto> findByPerguntaId(
            Long perguntaId
    ) {
        if (perguntaId == null) {
            throw new RuntimeException(
                    "O ID da pergunta é obrigatório"
            );
        }

        if (!perguntaRepository.existsById(perguntaId)) {
            throw new RuntimeException(
                    "Pergunta não encontrada"
            );
        }

        return respostaRepository
                .findByPerguntaId(perguntaId)
                .stream()
                .map(this::converterParaDTO)
                .toList();
    }

    private RespostaResponseDto converterParaDTO(
            Resposta resposta
    ) {
        return new RespostaResponseDto(
                resposta.getId(),
                resposta.getConteudo(),
                resposta.getDataCriacao(),
                resposta.getUsuario().getNome()
        );
    }
}
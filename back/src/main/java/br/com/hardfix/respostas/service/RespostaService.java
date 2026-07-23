package br.com.hardfix.respostas.service;

import br.com.hardfix.perguntas.entity.Pergunta;
import br.com.hardfix.perguntas.repository.PerguntaRepository;
import br.com.hardfix.respostas.entity.Resposta;
import br.com.hardfix.respostas.repository.RespostaRepository;
import br.com.hardfix.usuarios.entity.Usuario;
import br.com.hardfix.usuarios.repository.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RespostaService implements RespostaIService {

    @Autowired
    private RespostaRepository respostaRepository;
    @Autowired
    private UsuarioRepository usuarioRepository;
    @Autowired
    private PerguntaRepository perguntaRepository;

    public RespostaService(RespostaRepository respostaRepository) {
        this.respostaRepository = respostaRepository;
    }

    @Override
    public Resposta save(Resposta resposta) {

        if (resposta == null) {
            throw new RuntimeException("Dados da resposta não informados");
        }

        if (resposta.getId() != null) {
            throw new RuntimeException("Não informe o ID ao cadastrar uma resposta");
        }

        if (resposta.getConteudo() == null || resposta.getConteudo().isBlank()) {
            throw new RuntimeException("O conteúdo da resposta é obrigatório");
        }

        if (resposta.getPergunta() == null ||
                resposta.getPergunta().getId() == null) {
            throw new RuntimeException("A pergunta é obrigatória");
        }

        if (resposta.getUsuario() == null ||
                resposta.getUsuario().getId() == null) {
            throw new RuntimeException("O usuário é obrigatório");
        }

        Pergunta pergunta = perguntaRepository
                .findById(resposta.getPergunta().getId())
                .orElseThrow(() ->
                        new RuntimeException("Pergunta não encontrada")
                );

        Usuario usuario = usuarioRepository
                .findById(resposta.getUsuario().getId())
                .orElseThrow(() ->
                        new RuntimeException("Usuário não encontrado")
                );

        resposta.setPergunta(pergunta);
        resposta.setUsuario(usuario);

        return respostaRepository.save(resposta);
    }

    public List<Resposta> findAll() throws RuntimeException{
        return respostaRepository.findAll();
    }

    @Override
    public List<Resposta> findByPerguntaId(Long perguntaId) {
        return respostaRepository.findByPerguntaId(perguntaId);
    }
}
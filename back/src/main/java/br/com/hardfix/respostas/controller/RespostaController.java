package br.com.hardfix.respostas.controller;

import br.com.hardfix.perguntas.entity.Pergunta;
import br.com.hardfix.respostas.entity.Resposta;
import br.com.hardfix.respostas.service.RespostaIService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping(path = "/respostas")
@RequiredArgsConstructor
public class RespostaController {

    private final RespostaIService respostaService;

    @PostMapping(
            path = "/save",
            consumes = MediaType.APPLICATION_JSON_VALUE,
            produces = MediaType.APPLICATION_JSON_VALUE
    )
    public ResponseEntity<Resposta> save(@RequestBody Resposta resposta) {

        Resposta respostaSalva = respostaService.save(resposta);

        return ResponseEntity
                .status(HttpStatus.CREATED)
                .body(respostaSalva);
    }

    @GetMapping("/findall")
    public ResponseEntity<List<Resposta>> findAll() {

        return ResponseEntity.ok(respostaService.findAll());

    }

    @GetMapping("/pergunta/{perguntaId}")
    public ResponseEntity<List<Resposta>> findByPerguntaId(
            @PathVariable Long perguntaId
    ) {
        List<Resposta> respostas =
                respostaService.findByPerguntaId(perguntaId);

        return ResponseEntity.ok(respostas);
    }
}
package br.com.hardfix.perguntas.controller;

import br.com.hardfix.perguntas.entity.Pergunta;
import br.com.hardfix.perguntas.service.PerguntaIService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping(path = "/perguntas")
@RequiredArgsConstructor
public class PerguntaController {

    private final PerguntaIService perguntaService;

    @PostMapping(path="/save", consumes = MediaType.APPLICATION_JSON_VALUE,  produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<?> save(@RequestBody Pergunta pergunta){
        perguntaService.save(pergunta);
        return ResponseEntity.status(HttpStatus.CREATED).body(pergunta);
    }

}

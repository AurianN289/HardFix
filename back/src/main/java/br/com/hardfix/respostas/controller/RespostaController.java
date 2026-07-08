package br.com.hardfix.respostas.controller;

import br.com.hardfix.respostas.entity.Resposta;
import br.com.hardfix.respostas.service.RespostaIService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping(path = "/respostas")
@RequiredArgsConstructor
public class RespostaController {

    private final RespostaIService respostaService;

    @PostMapping(path="/save", consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<?> save(@RequestBody Resposta resposta) {
        respostaService.save(resposta);
        return ResponseEntity.status(HttpStatus.CREATED).body(resposta);
    }
}
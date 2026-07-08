package br.com.hardfix.notificacoes.controller;

import br.com.hardfix.notificacoes.entity.Notificacao;
import br.com.hardfix.notificacoes.service.NotificacaoIService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping(path = "/notificacoes")
@RequiredArgsConstructor
public class NotificacaoController {

    private final NotificacaoIService notificacaoService;

    @PostMapping(path="/save", consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<?> save(@RequestBody Notificacao notificacao){

        notificacaoService.save(notificacao);

        return ResponseEntity.status(HttpStatus.CREATED).body(notificacao);
    }

}
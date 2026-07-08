package br.com.hardfix.votos.controller;

import br.com.hardfix.votos.entity.Voto;
import br.com.hardfix.votos.service.VotoIService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping(path = "/votos")
@RequiredArgsConstructor
public class VotoController {

    private final VotoIService votoService;

    @PostMapping(path="/save", consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<?> save(@RequestBody Voto voto) {
        votoService.save(voto);
        return ResponseEntity.status(HttpStatus.CREATED).body(voto);
    }
}
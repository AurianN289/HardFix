package br.com.hardfix.votos.controller;

import br.com.hardfix.votos.dto.ResultadoVotoDTO;
import br.com.hardfix.votos.dto.VotoDTO;
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

    @PutMapping("/perguntas/{perguntaId}")
    public ResponseEntity<ResultadoVotoDTO> votarEmPergunta(
            @PathVariable Long perguntaId,
            @RequestHeader("X-Usuario-Id") Long usuarioId,
            @RequestBody VotoDTO request
    ) {
        ResultadoVotoDTO resultado =
                votoService.votarEmPergunta(
                        perguntaId,
                        usuarioId,
                        request.getTipo()
                );

        return ResponseEntity.ok(resultado);
    }

    @GetMapping("/perguntas/{perguntaId}")
    public ResponseEntity<ResultadoVotoDTO> buscarVoto(
            @PathVariable Long perguntaId,
            @RequestHeader(
                    value = "X-Usuario-Id",
                    required = false
            ) Long usuarioId
    ) {
        ResultadoVotoDTO resultado =
                votoService.buscarVotoDaPergunta(
                        perguntaId,
                        usuarioId
                );

        return ResponseEntity.ok(resultado);
    }
}
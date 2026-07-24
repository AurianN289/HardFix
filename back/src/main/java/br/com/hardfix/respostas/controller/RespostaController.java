package br.com.hardfix.respostas.controller;

import br.com.hardfix.respostas.dto.RespostaRequestDto;
import br.com.hardfix.respostas.dto.RespostaResponseDto;
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
    public ResponseEntity<RespostaResponseDto> save(
            @RequestBody RespostaRequestDto dto
    ) {
        RespostaResponseDto respostaSalva =
                respostaService.save(dto);

        return ResponseEntity
                .status(HttpStatus.CREATED)
                .body(respostaSalva);
    }

    @GetMapping(
            path = "/findall",
            produces = MediaType.APPLICATION_JSON_VALUE
    )
    public ResponseEntity<List<RespostaResponseDto>> findAll() {
        return ResponseEntity.ok(
                respostaService.findAll()
        );
    }

    @GetMapping(
            path = "/pergunta/{perguntaId}",
            produces = MediaType.APPLICATION_JSON_VALUE
    )
    public ResponseEntity<List<RespostaResponseDto>> findByPerguntaId(
            @PathVariable Long perguntaId
    ) {
        return ResponseEntity.ok(
                respostaService.findByPerguntaId(perguntaId)
        );
    }
}
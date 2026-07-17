package br.com.hardfix.tags.controller;

import br.com.hardfix.tags.entity.Tag;
import br.com.hardfix.tags.service.TagIService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping(path = "/tags")
@RequiredArgsConstructor
public class TagController {

    private final TagIService tagService;

    @PostMapping(path = "/save", consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<?> save(@RequestBody Tag tag) {

        tagService.save(tag);

        return ResponseEntity.status(HttpStatus.CREATED).body(tag);
    }

    @GetMapping("/findall")
    public ResponseEntity<List<Tag>> findAll() {
        return ResponseEntity.ok(tagService.findAll());
    }

}
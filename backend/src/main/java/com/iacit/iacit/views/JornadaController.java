package com.iacit.iacit.views;

import java.util.List;

import com.iacit.iacit.models.Jornadas;
import com.iacit.iacit.repository.JornadaRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

@RestController
@CrossOrigin
@RequestMapping("/jornada")
public class JornadaController {
    
    @Autowired
    JornadaRepository jRepository;

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public Jornadas createJornada(@RequestBody final Jornadas jornada) {
        return jRepository.save(jornada);
    }

    @GetMapping("index")
    public List<Jornadas> indexJornada(){
        return jRepository.findAll();
    }

    @GetMapping("{id}")
    public Jornadas findJornada(@PathVariable Long id){
        return jRepository.findById(id).orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Jornada não encontrado"));
    }

    @PutMapping("{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void updateJornada(@PathVariable final Long id,@RequestBody final Jornadas jornada)
    {
        jRepository.findById(id).map(jornadaExist -> {
            jornada.setId(jornadaExist.getId());
            jRepository.save(jornada);
            return ResponseEntity.noContent().build();
        })
        .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Jornada não encontrada"));
    }

    @DeleteMapping("{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deleteJornada (@PathVariable final Long id){
        jRepository.findById(id).map(jornada -> {
            jRepository.delete(jornada);
            return jornada;
        })
        .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Jornada não encontrada"));
    }

}

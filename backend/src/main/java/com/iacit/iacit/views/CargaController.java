package com.iacit.iacit.views;

import com.iacit.iacit.models.Cargas;
import com.iacit.iacit.repository.CargaRepository;

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
@RequestMapping("/carga")
public class CargaController {

    @Autowired
    CargaRepository cRepository;

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public Cargas createCarga(@RequestBody final Cargas carga) {
        return cRepository.save(carga);
    }

    @GetMapping("{id}")
    public Cargas findCarga(@PathVariable Long id){
        return cRepository.findById(id).orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Jornada não encontrado"));
    }

    @PutMapping("{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void updateCarga(@PathVariable final Long id,@RequestBody final Cargas carga)
    {
        cRepository.findById(id).map(cargaExist -> {
            carga.setId(cargaExist.getId());
            cRepository.save(carga);
            return ResponseEntity.noContent().build();
        })
        .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Alerta não encontrado"));
    }

    @DeleteMapping("{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deleteCarga (@PathVariable final Long id){
        cRepository.findById(id).map(carga -> {
            cRepository.delete(carga);
            return carga;
        })
        .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Alerta não encontrado"));
    }

}

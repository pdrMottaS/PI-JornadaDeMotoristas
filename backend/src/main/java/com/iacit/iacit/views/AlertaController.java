package com.iacit.iacit.views;

import com.iacit.iacit.models.Alerta;
import com.iacit.iacit.repository.AlertaRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.server.ResponseStatusException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

@RestController
@CrossOrigin
@RequestMapping("/alerta")
public class AlertaController {
    
    @Autowired
    AlertaRepository aRepository;

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public Alerta createAlerta(@RequestBody final Alerta alerta) {
        return aRepository.save(alerta);
    }

    @GetMapping("{id}")
    public Alerta findAlerta(@PathVariable Long id){
        return aRepository.findById(id).orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Jornada não encontrado"));
    }

    @PutMapping("{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void updateAlerta(@PathVariable final Long id,@RequestBody final Alerta alerta)
    {
        aRepository.findById(id).map(alertaExist -> {
            alerta.setId(alertaExist.getId());
            aRepository.save(alerta);
            return ResponseEntity.noContent().build();
        })
        .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Alerta não encontrado"));
    }

    @DeleteMapping("{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deleteAlerta (@PathVariable final Long id){
        aRepository.findById(id).map(alerta -> {
            aRepository.delete(alerta);
            return alerta;
        })
        .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Alerta não encontrado"));
    }

}

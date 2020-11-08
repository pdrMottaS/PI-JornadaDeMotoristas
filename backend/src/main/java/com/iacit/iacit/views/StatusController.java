package com.iacit.iacit.views;

import com.iacit.iacit.models.Status;
import com.iacit.iacit.repository.StatusRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
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

@RestController
@CrossOrigin
@RequestMapping("/status")
public class StatusController {
    
    @Autowired
    StatusRepository sRepository;

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public Status createStatus(@RequestBody final Status status) {
        return sRepository.save(status);
    }

    @GetMapping("{id}")
    public Status findStatus(@PathVariable Long id){
        return sRepository.findById(id).orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Jornada não encontrado"));
    }

    @PutMapping("{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void updateStatus(@PathVariable final Long id,@RequestBody final Status status)
    {
        sRepository.findById(id).map(statusExist -> {
            status.setId(statusExist.getId());
            sRepository.save(status);
            return ResponseEntity.noContent().build();
        })
        .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Alerta não encontrado"));
    }

    @DeleteMapping("{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deleteStatus (@PathVariable final Long id){
        sRepository.findById(id).map(status -> {
            sRepository.delete(status);
            return status;
        })
        .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Alerta não encontrado"));
    }

}

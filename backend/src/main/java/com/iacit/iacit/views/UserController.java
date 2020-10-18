package com.iacit.iacit.views;

import java.util.List;

import javax.annotation.security.RolesAllowed;

import com.iacit.iacit.models.Users;
import com.iacit.iacit.repository.UserRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Example;
import org.springframework.data.domain.ExampleMatcher;
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
import org.springframework.security.access.annotation.Secured;

@RestController
@CrossOrigin
@RequestMapping("/user")
public class UserController {
    
    @Autowired
    UserRepository uRepository;

    // Criar Veículo
    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public Users createUser(@RequestBody final Users user) {
        return uRepository.save(user);
    }

    @GetMapping("index")
    public List<Users> indexUsers(){
        return uRepository.findAll();
    }

    @GetMapping("{id}")
    public Users profileUser(@PathVariable String id){
        return uRepository.findById(id).orElseThrow(()-> new ResponseStatusException(HttpStatus.NOT_FOUND,"Usuário não encontrado"));
    }

    @PutMapping("{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void updateUser(@PathVariable String id,@RequestBody Users user){
        uRepository.findById(id).map(userExist->{
            user.setMatricula(userExist.getMatricula());
            uRepository.save(user);
            return ResponseEntity.noContent().build();
        }).orElseThrow(()->{
            return new ResponseStatusException(HttpStatus.NOT_FOUND,"Usuário não encontrado");
        });
    }

    @DeleteMapping("{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deleteUser(@PathVariable String id){
        uRepository.findById(id).map(user->{
            uRepository.delete(user);
            return ResponseEntity.noContent().build();
        }).orElseThrow(()->{
            return new ResponseStatusException(HttpStatus.NOT_FOUND,"Usuário não encontrado");
        });
    }

    @GetMapping
    public List<Users> searchUser(final Users filtro){
        final ExampleMatcher matcher = ExampleMatcher
                                    .matching()
                                    .withIgnoreCase()
                                    .withStringMatcher(ExampleMatcher.StringMatcher.CONTAINING);
        final Example example = Example.of(filtro, matcher);
        return uRepository.findAll(example);
    }

}

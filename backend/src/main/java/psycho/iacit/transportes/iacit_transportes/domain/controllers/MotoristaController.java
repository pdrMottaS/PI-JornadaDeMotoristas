package psycho.iacit.transportes.iacit_transportes.domain.controllers;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.data.domain.Example;
import org.springframework.data.domain.ExampleMatcher;

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
import org.springframework.web.server.ResponseStatusException;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import psycho.iacit.transportes.iacit_transportes.domain.model.Motorista;
import psycho.iacit.transportes.iacit_transportes.domain.model.Veiculo;
import psycho.iacit.transportes.iacit_transportes.domain.repository.MotoristaRepository;


@RestController
@RequestMapping(value = "motorista")
public class MotoristaController {
    @Autowired
    MotoristaRepository motoristaRepository;

    //Listar todos os motoristas
    @GetMapping("index")
    public List<Motorista> indexMotorista(){
        return motoristaRepository.findAll();
    }

    //Achar motorista pela matricula
    @GetMapping("{id}")
    public Motorista findMotoristaByMatricula(@PathVariable Long id){
        return motoristaRepository
                    .findById(id)
                    .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Motorista não encontrado"));
    }

    //Criar Motorista
    @PostMapping("create")
    @ResponseStatus(HttpStatus.CREATED)
    public Motorista createMotorista(@RequestBody Motorista motorista){
        return motoristaRepository.save(motorista);
    }

    //Atualizar Motorista
    @PutMapping("{matricula}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void updateMotorista( 
        @PathVariable Long matricula,
        @RequestBody Motorista motorista
        )
        {
            motoristaRepository
                        .findById(matricula)
                        .map(motoristaExist -> {
                            motorista.setMatricula(motoristaExist.getMatricula());
                            motoristaRepository.save(motorista);
                            return ResponseEntity.noContent().build();
                        })
                        .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Motorista não encontrado"));
        }

    //Deletar Motorista
    @DeleteMapping("{matricula}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deleteMotorista ( @PathVariable Long matricula){
        motoristaRepository.findById(matricula)
            .map( motorista -> {
                motoristaRepository.delete(motorista);
                return motorista;
            })
            .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Cliente não encontrado"));

    }

    //Listar Veículos
    @GetMapping("veiculos/{matricula}")
    public List< Map<String,Object> > findVeiculos(@PathVariable Long matricula){
        return motoristaRepository.findVeiculo(matricula);
    }

    //listar motoristas atraves de um filtro
    @GetMapping
    public List<Motorista> searchMotorista(Motorista filtro){
        ExampleMatcher matcher = ExampleMatcher
                                    .matching()
                                    .withIgnoreCase()
                                    .withStringMatcher(ExampleMatcher.StringMatcher.CONTAINING);
        Example example = Example.of(filtro, matcher);
        return motoristaRepository.findAll(example);
    }

}

package psycho.iacit.transportes.iacit_transportes.domain.controllers;


import java.util.List;

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
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import psycho.iacit.transportes.iacit_transportes.domain.model.Veiculo;
import psycho.iacit.transportes.iacit_transportes.domain.repository.MotoristaRepository;
import psycho.iacit.transportes.iacit_transportes.domain.repository.VeiculoRepository;

@RestController
@RequestMapping("/veiculo")
public class VeiculoController {
    @Autowired
    VeiculoRepository veiculoRepository;

    @Autowired
    MotoristaRepository motoristaRepository;

    //Criar Veículo
    @PostMapping("create")
    @ResponseStatus(HttpStatus.CREATED)
    public Veiculo createVeiculo(@RequestBody final Veiculo veiculo) {
        return veiculoRepository.save(veiculo);
    }

    //Listar todos os veículos
    @GetMapping("index")
    public List<Veiculo> indexVeiculo(){
        return veiculoRepository.findAll();
    }

    //Achar um veículo por id
    @GetMapping("{id}")
    public Veiculo findVeiculo(@PathVariable Long id){
        return veiculoRepository.findById(id).orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Veículo não encontrado"));
    }

    //Alterar um veículo
    @PutMapping("{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void updateVeículo(
        @PathVariable final Long id,
        @RequestBody final Veiculo veiculo
    )
    {
        veiculoRepository
                    .findById(id)
                    .map(veiculoExist -> {
                        veiculo.setId(veiculoExist.getId());
                        veiculoRepository.save(veiculo);
                        return ResponseEntity.noContent().build();
                    })
                    .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Veículo não encontrado"));
    }

    //Deletar um veículo
    @DeleteMapping("{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deleteVeiculo (@PathVariable final Long id){
        veiculoRepository.findById(id)
            .map(veiculo -> {
                veiculoRepository.delete(veiculo);
                return veiculo;
            })
            .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Veículo não encontrado"));
    }

    //Pesquisar por um veículo atraves de um filtro
    @GetMapping
    public List<Veiculo> searchVeiculo(final Veiculo filtro){
        final ExampleMatcher matcher = ExampleMatcher
                                    .matching()
                                    .withIgnoreCase()
                                    .withStringMatcher(ExampleMatcher.StringMatcher.CONTAINING);
        final Example example = Example.of(filtro, matcher);
        return veiculoRepository.findAll(example);
    }
}

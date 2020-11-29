package psycho.iacit.transportes.iacit_transportes.domain.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

import io.swagger.v3.oas.annotations.parameters.RequestBody;
import psycho.iacit.transportes.iacit_transportes.domain.model.Financeiro;
import psycho.iacit.transportes.iacit_transportes.domain.repository.FinanceiroRepository;

@RestController
@CrossOrigin
@RequestMapping(value = "financeiro")
public class FinanceiroController {
    
    @Autowired
    FinanceiroRepository financeiroRepository;

    @GetMapping("index")
    public List<Financeiro> indexFinanceiro(){
        return financeiroRepository.findAll();
    }

    @GetMapping("{id}")
    public Financeiro findFinanceiroByMatricula(@PathVariable Long id){
        return financeiroRepository
                    .findById(id)
                    .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Financeiro não encontrado"));
    }

    @PostMapping("create")
    @ResponseStatus(HttpStatus.CREATED)
    public Financeiro createFinanceiro(@RequestBody Financeiro financeiro){
        return financeiroRepository.save(financeiro);
    }

    
    @PutMapping("{matricula}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void updateFinanceiro( 
        @PathVariable Long matricula,
        @RequestBody Financeiro financeiro
        )
        {
            financeiroRepository
                        .findById(matricula)
                        .map(financeiroExist -> {
                            financeiro.setMatricula(financeiroExist.getMatricula());
                            financeiroRepository.save(financeiro);
                            return ResponseEntity.noContent().build();
                        })
                        .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Financeiro não encontrado"));
        }

    @DeleteMapping("{matricula}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deleteFinanceiro ( @PathVariable Long matricula){
        financeiroRepository.findById(matricula)
            .map( financeiro -> {
                financeiroRepository.delete(financeiro);
                return financeiro;
            })
            .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Financeiro não encontrado"));

    }
}

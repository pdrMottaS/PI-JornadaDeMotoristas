package psycho.iacit.transportes.iacit_transportes.domain.controllers;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import io.swagger.v3.oas.annotations.parameters.RequestBody;
import psycho.iacit.transportes.iacit_transportes.domain.model.User;
import psycho.iacit.transportes.iacit_transportes.domain.repository.UserRepository;

@RestController
@RequestMapping("session")
public class SessionController {
    
    @Autowired
    UserRepository userRepository;

    @PostMapping("create")
    public ResponseEntity createSession(@RequestHeader Map<String,String> headers){
        String credentials[] = headers.get("authorization").split(":");
        User user = userRepository.findByLogin(credentials[0]);
        Map<String,Long> res = new HashMap<String,Long>();
        if(user!=null){
            if(user.getSenha().equals(credentials[1])){
                res.put("token", user.getId());
                return new ResponseEntity<>(res,HttpStatus.OK);
            }else{
                return new ResponseEntity<>("Senha não condiz",HttpStatus.UNAUTHORIZED);
            }
        }else{
            return new ResponseEntity<>("Usuário não encontrado",HttpStatus.NOT_FOUND);
        }
    }

}

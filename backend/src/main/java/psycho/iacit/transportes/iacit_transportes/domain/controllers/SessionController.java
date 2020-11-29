package psycho.iacit.transportes.iacit_transportes.domain.controllers;

import java.io.Console;
import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import psycho.iacit.transportes.iacit_transportes.domain.model.AuthRequest;
import psycho.iacit.transportes.iacit_transportes.domain.model.User;
import psycho.iacit.transportes.iacit_transportes.domain.repository.UserRepository;
import psycho.iacit.transportes.iacit_transportes.util.JWTUtil;

@RestController
@CrossOrigin
@RequestMapping("session")
public class SessionController {
    
    @Autowired
    private JWTUtil jwtUtil;
    @Autowired
    private AuthenticationManager authenticationManager;

    @PostMapping("create")
    public String createSession(@RequestBody AuthRequest aRequest) throws Exception {
        try{
            authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(aRequest.getLogin(),aRequest.getSenha())
            );
        }catch(Exception err){
            throw new Exception("Login/Senha inválida");
        }
        return jwtUtil.generateToken(aRequest.getLogin());
    }

}

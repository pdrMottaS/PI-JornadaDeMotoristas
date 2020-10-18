package com.iacit.iacit.views;

import java.util.HashMap;
import java.util.Map;

import com.iacit.iacit.models.Roles;
import com.iacit.iacit.models.UserRequest;
import com.iacit.iacit.models.Users;
import com.iacit.iacit.repository.UserRepository;
import com.iacit.iacit.utils.JWTUtil;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin
@RequestMapping("/session")
public class SessionController {

    @Autowired
    UserRepository uRepository;
    @Autowired
    private JWTUtil jwtUtil;
    @Autowired
    private AuthenticationManager authenticationManager;

    @PostMapping
    public Map<String,String> createSession(@RequestBody UserRequest aRequest) throws Exception {
        Map<String,String> res = new HashMap<String,String>();
        try{
            authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(aRequest.getLogin(),aRequest.getSenha())
            );
            Users user = uRepository.findByLogin(aRequest.getLogin());
            res.put("Id",user.getMatricula());
            res.put("Role",user.getRoles().iterator().next().getName());
            res.put("Token",jwtUtil.generateToken(aRequest.getLogin()));
        }catch(Exception err){
            throw new Exception("Login/Senha inválida");
        }
        return res;
    }

}

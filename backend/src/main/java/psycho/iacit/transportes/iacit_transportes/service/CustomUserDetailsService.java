package psycho.iacit.transportes.iacit_transportes.service;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import psycho.iacit.transportes.iacit_transportes.domain.model.User;
import psycho.iacit.transportes.iacit_transportes.domain.repository.UserRepository;

@Service
public class CustomUserDetailsService implements UserDetailsService{
    
    @Autowired
    private UserRepository userRepository;

    @Override
    public UserDetails loadUserByUsername(String login) throws UsernameNotFoundException{
        User user = userRepository.findByLogin(login);
        return new org.springframework.security.core.userdetails.User(user.getLogin(),user.getSenha(),new ArrayList<>());
    }

}

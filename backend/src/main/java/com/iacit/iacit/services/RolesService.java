package com.iacit.iacit.services;

import java.util.HashSet;
import java.util.List;
import java.util.Optional;
import java.util.Set;

import com.iacit.iacit.models.Roles;
import com.iacit.iacit.models.Users;
import com.iacit.iacit.repository.RoleRepository;
import com.iacit.iacit.repository.UserRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class RolesService implements CommandLineRunner {
    @Autowired
    RoleRepository roleRepository;

    @Autowired
    UserRepository uRepository;

    @Override
    public void run(String... args) throws Exception {

        List<Roles> roles = roleRepository.findAll();

        if(roles.size()<=0){

            Roles roleAdm = new Roles();
            roleAdm.setId((long) 1);
            roleAdm.setName("ROLE_ADM");
            roleRepository.save(roleAdm);

            Roles roleFin = new Roles();
            roleFin.setId((long) 2);
            roleFin.setName("ROLE_FINANCEIRO");
            roleRepository.save(roleFin);

            Roles roleGer = new Roles();
            roleGer.setId((long) 3);
            roleGer.setName("ROLE_GERENTE");
            roleRepository.save(roleGer);

            Roles roleMot = new Roles();
            roleMot.setId((long) 4);
            roleMot.setName("ROLE_MOTORISTA");
            roleRepository.save(roleMot);
        }

        Optional<Users> user = uRepository.findById("1");

        if(user.isEmpty()) {
            Users adm = new Users();
            adm.setMatricula("1");
            adm.setLogin("admin");
            adm.setSenha("admin");
            adm.setNome("ADM");

            Roles role = new Roles();
            role.setId((long)1);

            Set<Roles> rls = new HashSet<>();
            rls.add(role);

            adm.setRoles(rls);

            uRepository.save(adm);
        }

    }
}

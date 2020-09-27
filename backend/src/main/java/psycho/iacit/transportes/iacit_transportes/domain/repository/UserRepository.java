package psycho.iacit.transportes.iacit_transportes.domain.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import psycho.iacit.transportes.iacit_transportes.domain.model.User;

@Repository
public interface UserRepository extends JpaRepository<User, Long>{

    User findByLogin(String login);
}

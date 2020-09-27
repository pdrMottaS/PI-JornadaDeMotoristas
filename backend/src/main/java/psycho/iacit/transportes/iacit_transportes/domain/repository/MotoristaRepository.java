package psycho.iacit.transportes.iacit_transportes.domain.repository;

import psycho.iacit.transportes.iacit_transportes.domain.model.Motorista;
import psycho.iacit.transportes.iacit_transportes.domain.model.Veiculo;

import java.util.List;
import java.util.Map;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface MotoristaRepository extends JpaRepository<Motorista, Long>{

    List<Motorista> findByNomeLikeOrMatriculaOrderByMatricula(String nome, Long matricula);
    List<Motorista> findByNomeLike(String nome);
    List<Motorista> findByMatricula(Long matricula);

    @Modifying
    void deleteByMatricula(Long matricula);

    @Query(value = "SELECT * FROM veiculo v WHERE v.motorista=:matricula", nativeQuery = true)
    List< Map<String,Object> > findVeiculo(@Param("matricula") Long matricula);
    
}

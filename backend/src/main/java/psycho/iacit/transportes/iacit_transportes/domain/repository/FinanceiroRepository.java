package psycho.iacit.transportes.iacit_transportes.domain.repository;

import java.util.List;
import java.util.Map;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import psycho.iacit.transportes.iacit_transportes.domain.model.Financeiro;

public interface FinanceiroRepository extends JpaRepository<Financeiro, Long> {
    List<Financeiro> findByNomeLikeOrMatriculaOrderByMatricula(String nome, Long matricula);
    List<Financeiro> findByNomeLike(String nome);
    List<Financeiro> findByMatricula(Long matricula);

    @Modifying
    void deleteByMatricula(Long matricula);

    @Query(value = "SELECT * FROM veiculo v WHERE v.financeiro=:matricula", nativeQuery = true)
    List< Map<String,Object> > findVeiculo(@Param("matricula") Long matricula);
}

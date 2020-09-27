package psycho.iacit.transportes.iacit_transportes.domain.repository;

import psycho.iacit.transportes.iacit_transportes.domain.model.Veiculo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface VeiculoRepository extends JpaRepository <Veiculo,Long>{
    
}

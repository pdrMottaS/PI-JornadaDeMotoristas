package psycho.iacit.transportes.iacit_transportes.domain.model;

import java.util.ArrayList;
import java.util.List;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import org.hibernate.annotations.Generated;

@Entity
@Table(name = "motorista")
public class Motorista {

    @Id
    private Long matricula;

    private String cpf;

    private String email;

    private String nome;

    @OneToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "login", referencedColumnName = "id")
	private User login;

    public Motorista() {

    }
    
    public Motorista(Long matricula) {
        this.matricula=matricula;
	}

    //#region getters e setters
    
    public String getEmail() {
        return email;
    }
    public void setEmail(String email) {
        this.email = email;
    }

    public Long getMatricula() {
        return matricula;
    }

    public void setMatricula(Long matricula) {
        this.matricula = matricula;
    }

    public String getCpf() {
        return cpf;
    }

    public void setCpf(String cpf) {
        this.cpf = cpf;
    }

    public User getLogin() {
        return login;
    }

    public void setLogin(User login) {
        this.login = login;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    //#endregion

    //#region para dev
    @Override
    public String toString() {
        return "Motorista{"+
                "matricula=" + matricula +
                ", nome='" + nome +'\'' + 
                '}';
    }
    //#endregion

}

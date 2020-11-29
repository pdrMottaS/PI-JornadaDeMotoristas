package psycho.iacit.transportes.iacit_transportes.domain.model;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name = "financeiro")
public class Financeiro {

    @Id
    private Long matricula;

    private String cpf;

    private String email;

    private String nome;

    @OneToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "login", referencedColumnName = "id")
    private User login;
    
    public Financeiro() {

    }
    
    public Financeiro(Long matricula) {
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
}

package com.iacit.iacit.models;

import java.time.LocalDate;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinTable;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonFormat;

@Entity
@Table(name="jornadas")
public class Jornadas {
    
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @JsonFormat(pattern="yyyy-MM-dd")
	private LocalDate data_inicio;

    @ManyToMany
    @JoinTable(name = "user_jornada",
        joinColumns = {
        @JoinColumn(name = "jornada", referencedColumnName = "id",
        nullable = false, updatable = false)},
        inverseJoinColumns = {
        @JoinColumn(name = "usuario", referencedColumnName = "matricula",
        nullable = false, updatable = false)}
    )
    private Set<Users> motorista;

    @ManyToMany
    @JoinTable(name = "veiculo_jornada",
        joinColumns = {
        @JoinColumn(name = "jornada", referencedColumnName = "id",
        nullable = false, updatable = false)},
        inverseJoinColumns = {
        @JoinColumn(name = "veiculo", referencedColumnName = "chassi",
        nullable = false, updatable = false)}
    )
    private Set<Veiculos> veiculo;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public LocalDate getData_inicio() {
        return data_inicio;
    }

    public void setData_inicio(LocalDate data_inicio) {
        this.data_inicio = data_inicio;
    }

    public Set<Users> getMotorista() {
        return motorista;
    }

    public void setMotorista(Set<Users> motorista) {
        this.motorista = motorista;
    }

    public Set<Veiculos> getVeiculo() {
        return veiculo;
    }

    public void setVeiculo(Set<Veiculos> veiculo) {
        this.veiculo = veiculo;
    }

}

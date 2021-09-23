package springlab.model;

import java.io.Serializable;
import java.util.HashSet;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;

import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonManagedReference;



@SuppressWarnings("serial")
@Entity
@JsonIgnoreProperties({"hibernateLazyInitializer","referenceList"})
public class Utilisateurs implements Serializable {

	private String nom;
	private String prenom;
	@Id
	private int cin ;


	private String addresse;
	private String telephone;
	private String sexe;
	private String password;
	private String datenaissance;
	@JsonManagedReference
	@OneToMany(mappedBy = "utilisateur",cascade = CascadeType.ALL, orphanRemoval=true)
    Set<Analyse>  analyse= new HashSet<>();
	@JsonBackReference
	@ManyToOne(fetch = FetchType.LAZY, optional=false)
	//@JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
	@JoinColumn(name="id_r")
	
	private Role role ;
	/*@ManyToMany(fetch = FetchType.EAGER, cascade = CascadeType.ALL)
  @Fetch(value = FetchMode.SUBSELECT)
  @JoinTable(name = "Roles",
         joinColumns = @JoinColumn(name = "user_id", referencedColumnName = "cin"),
          inverseJoinColumns = @JoinColumn(name = "Role_id", referencedColumnName = "role")

)
	 private Collection<Role> roles;*/
	//@OneToOne(mappedBy = "utilisateur",cascade = CascadeType.ALL, orphanRemoval=true)
	//   public Analyse analyse1;


	//	this.analyse1 = analyse1;
	

	//public Analyse getAnalyse1() {
	//	return analyse1;
	//}

	//public void setAnalyse1(Analyse analyse1) {
	//	this.analyse1 = analyse1;
	//}

	public String getNom() {
		return nom;
	}

	public Utilisateurs(String nom, String prenom, int cin, String addresse, String telephone, String sexe,
			String password, String datenaissance, Set<Analyse> analyse, Role role) {
		this.nom = nom;
		this.prenom = prenom;
		this.cin = cin;
		this.addresse = addresse;
		this.telephone = telephone;
		this.sexe = sexe;
		this.password = password;
		this.datenaissance = datenaissance;
		this.analyse = analyse;
		this.role = role;
	}

	public String getPrenom() {
		return prenom;
	}

	public double getCin() {
		return cin;
	}

	public String getAddresse() {
		return addresse;
	}

	public String getTelephone() {
		return telephone;
	}

	public String getSexe() {
		return sexe;
	}

	public String getDatenaissance() {
		return datenaissance;
	}

	public Set<Analyse> getAnalyse() {
		return analyse;
	}

	public Role getRole() {
		return role;
	}


	public void setNom(String nom) {
		this.nom = nom;
	}

	public void setPrenom(String prenom) {
		this.prenom = prenom;
	}

	public void setCin(int cin) {
		this.cin = cin;
	}

	public void setAddresse(String addresse) {
		this.addresse = addresse;
	}

	public void setTelephone(String telephone) {
		this.telephone = telephone;
	}

	public void setSexe(String sexe) {
		this.sexe = sexe;
	}

	public void setDatenaissance(String datenaissance) {
		this.datenaissance = datenaissance;
	}

	public void setAnalyse(Set<Analyse> analyse) {
		this.analyse = analyse;
	}

	public void setRole(Role role) {
		this.role = role;
	}

	

	

	@Override
	public String toString() {
		return "Utilisateurs [nom=" + nom + ", prenom=" + prenom + ", cin=" + cin + ", addresse=" + addresse
				+ ", telephone=" + telephone + ", sexe=" + sexe + ", password=" + password + ", datenaissance="
				+ datenaissance + ", analyse=" + analyse + ", role=" + role + "]";
	}

	public Utilisateurs() {
		
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

}

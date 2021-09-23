package springlab.model;


import java.util.Arrays;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

import org.springframework.web.multipart.MultipartFile;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;




@Entity

public class Analyse  {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	public int id_a;
	public int getId_a() {
		return id_a;
	}
	public void setId_a(int id_a) {
		this.id_a = id_a;
	}
	private int cin;
	private String titre;
	private String description;
	private MultipartFile[] file;
	public MultipartFile[] getFile() {
		return file;
	}
	public void setFile(MultipartFile[] file) {
		this.file = file;
	}
	private String date;
	@JsonBackReference
	@ManyToOne(fetch = FetchType.LAZY, optional=false)
	 @JsonIgnoreProperties("utilisateurs")
	//@JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
	@JoinColumn(name="cin" , referencedColumnName = "cin",insertable = false, updatable = false)
	private Utilisateurs utilisateur;
//	@ManyToOne(fetch = FetchType.LAZY, optional=false)
	//@JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
	//@JoinColumn(name="id_r")
	//private Utilisateurs utilisateur1;
	
	public Analyse(int cin, String titre, String description, MultipartFile[] file, String date, Utilisateurs utilisateur) {
	this.cin = cin;
	this.titre = titre;
	this.description = description;
	this.file = file;
	this.date = date;
	this.utilisateur = utilisateur;
}
	//public Utilisateurs getUtilisateur1() {
	//	return utilisateur1;
	//}
	//public void setUtilisateur1(Utilisateurs utilisateur1) {
	//	this.utilisateur1 = utilisateur1;
	//}
	public int getCin() {
		return cin;
	}
	public String getTitre() {
		return titre;
	}
	public String getDescription() {
		return description;
	}
	public String getDate() {
		return date;
	}
	public Utilisateurs getUtilisateur() {
		return utilisateur;
	}
	public void setCin(int cin) {
		this.cin = cin;
	}
	public void setTitre(String titre) {
		this.titre = titre;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public void setDate(String date) {
		this.date = date;
	}
	public void setUtilisateur(Utilisateurs utilisateur) {
		this.utilisateur = utilisateur;
	}


	@Override
	public String toString() {
		return "Analyse [id_a=" + id_a + ", cin=" + cin + ", titre=" + titre + ", description=" + description
				+ ", file=" + Arrays.toString(file) + ", date=" + date + ", utilisateur=" + utilisateur + "]";
	}
	public Analyse() {
		
	}
	
	
}

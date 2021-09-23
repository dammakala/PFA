package springlab.controlleur;

import java.util.List;

import javax.management.relation.Role;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import springlab.dao.AnalyseRepository;
import springlab.dao.RoleRepository;
import springlab.dao.UtilisateursRepository;
import springlab.model.Analyse;

@CrossOrigin(origins = "*", maxAge = 3600)

@RestController
@RequestMapping(value="/v1")
public class AnalyseControlleur {
	@Autowired
	public RoleRepository roleRep;
	@Autowired
	private AnalyseRepository  analyseRep;
	@Autowired
	private UtilisateursRepository userRep;
	//api get all analyses
	@RequestMapping(value="/analyses")
	public List<Analyse> getAnlyse() {
		return   analyseRep.findAll();
	}
	
	// api add analyse
	@PostMapping(value="/add/analyse")
	public Analyse createAnalyse(@RequestBody Analyse analyse /*@PathVariable(value="id_r") int id_r */) {
	//	Role role=new Role(null,null);
	//	role.setid_r("id_r");
	//	role.save
		return analyseRep.save(analyse);
	}
}

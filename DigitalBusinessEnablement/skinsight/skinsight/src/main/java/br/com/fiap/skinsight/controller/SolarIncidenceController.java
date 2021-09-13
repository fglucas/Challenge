package br.com.fiap.skinsight.controller;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import br.com.fiap.skinsight.model.SolarIncidence;
import br.com.fiap.skinsight.repository.SolarIncidenceRepository;

@Controller
public class SolarIncidenceController {
	
	@Autowired
	private SolarIncidenceRepository repository;
	
	@GetMapping("/solar-incidence")
	public ModelAndView index() {
		ModelAndView modelAndView = new ModelAndView("solarIncidence");
		List<SolarIncidence> solarIncidences = repository.findAll();
		modelAndView.addObject("solarIncidences", solarIncidences);
		return modelAndView;
	}
	
	@PostMapping("/solar-incidence")
	public String save(@Valid SolarIncidence solarIncidence, BindingResult result) {
		if(result.hasErrors()) return null;
		repository.save(solarIncidence);
		return "solarIncidences";
	}
}

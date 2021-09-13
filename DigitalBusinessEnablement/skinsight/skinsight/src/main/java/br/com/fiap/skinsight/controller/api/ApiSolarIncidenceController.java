package br.com.fiap.skinsight.controller.api;

import java.net.URI;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.context.config.ConfigDataResourceNotFoundException;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.util.UriComponentsBuilder;

import br.com.fiap.skinsight.model.SolarIncidence;
import br.com.fiap.skinsight.repository.SolarIncidenceRepository;

@RestController
@RequestMapping("/api/solar-incidence")
public class ApiSolarIncidenceController {
	
	@Autowired
	private SolarIncidenceRepository repository;
	
	@GetMapping
	public Page<SolarIncidence> index(
			@PageableDefault Pageable pageable
			) {
		
		return repository.findAll(pageable);
	}
	
	@PostMapping
	public ResponseEntity<SolarIncidence> create(
			@RequestBody SolarIncidence solarIncidence,
			UriComponentsBuilder uriBuilder
			) {
		repository.save(solarIncidence);
		
		URI uri = uriBuilder
				.path("api/solar-incidence/{id}")
				.buildAndExpand(solarIncidence.getId())
				.toUri();
		
		return ResponseEntity.created(uri).body(solarIncidence);
	}
	
	@PutMapping("update/{id}")
	public ResponseEntity<SolarIncidence> update(
			@RequestBody SolarIncidence solarIncidence,
			UriComponentsBuilder uriBuilder
			) {
		repository.save(solarIncidence);
		
		URI uri = uriBuilder
				.path("api/solar-incidence/update/{id}")
				.buildAndExpand(solarIncidence.getId())
				.toUri();
		
		return ResponseEntity.created(uri).body(solarIncidence);
	}
	
	
	@GetMapping("{id}")
	public ResponseEntity<SolarIncidence>  get(@PathVariable Long id) {
		Optional<SolarIncidence> solarIncidence = repository.findById(id);
		if (solarIncidence.isPresent()) 
			return ResponseEntity.ok( solarIncidence.get() ) ;
		
		return ResponseEntity.notFound().build();
		
	}
}

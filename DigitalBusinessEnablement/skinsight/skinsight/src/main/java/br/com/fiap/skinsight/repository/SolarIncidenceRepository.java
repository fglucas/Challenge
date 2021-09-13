package br.com.fiap.skinsight.repository;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

import br.com.fiap.skinsight.model.SolarIncidence;

public interface SolarIncidenceRepository extends JpaRepository<SolarIncidence, Long> {


}

package br.com.fiap.skinsight.model;

import java.util.Calendar;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotEmpty;

import com.sun.istack.NotNull;

import lombok.Data;

@Data
@Entity
public class SolarIncidence {

	@Id @GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	@NotNull()
	private String date;
	
	@NotNull()
	private String startTime;
	
	@NotNull()
	private String endTime;
	
	@NotNull()
	private Integer temperature;

	@NotNull()
	private String uvIndice;

	
	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getDate() {
		return date;
	}

	public void setDate(String date) {
		this.date = date;
	}

	public String getStartTime() {
		return startTime;
	}

	public void setStartTime(String startTime) {
		this.startTime = startTime;
	}

	public String getEndTime() {
		return endTime;
	}

	public void setEndTime(String endTime) {
		this.endTime = endTime;
	}

	public Integer getTemperature() {
		return temperature;
	}

	public void setTemperature(Integer temperature) {
		this.temperature = temperature;
	}

	public String getUvIndice() {
		return uvIndice;
	}

	public void setUvIndice(String uvIndice) {
		this.uvIndice = uvIndice;
	}
}

package com.devsuperior.gfmovie.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.devsuperior.gfmovie.dto.MovieDTO;
import com.devsuperior.gfmovie.entities.Movies;
import com.devsuperior.gfmovie.repositories.MovieRepository;

@Service
public class MovieService {
	
	@Autowired
	private MovieRepository repository;
	
	@Transactional(readOnly = true)
	public Page<MovieDTO> findAll(Pageable pageable) {
		
		Page<Movies> result = repository.findAll(pageable);
		Page<MovieDTO> page = result.map(x -> new MovieDTO(x));
				return page;
	}
	
	@Transactional(readOnly = true)
	public MovieDTO findByd(Long id) {
		
		Movies result = repository.findById(id).get();
		MovieDTO dto = new MovieDTO(result);
				return dto;
	}

}

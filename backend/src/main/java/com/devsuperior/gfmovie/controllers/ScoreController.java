package com.devsuperior.gfmovie.controllers;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.devsuperior.gfmovie.dto.MovieDTO;
import com.devsuperior.gfmovie.dto.ScoreDTO;
import com.devsuperior.gfmovie.services.ScoreService;

@RestController
@RequestMapping(value = "/scores")
public class ScoreController {
	
	@Autowired
	private ScoreService service;
	
		@PutMapping
		public MovieDTO saveScore(@RequestBody ScoreDTO dto ) {
			
			MovieDTO movieDTO = service.SaveScore(dto);
			
			return movieDTO;
		}
	}



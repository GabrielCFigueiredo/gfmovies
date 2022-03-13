package com.devsuperior.gfmovie.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.devsuperior.gfmovie.dto.MovieDTO;
import com.devsuperior.gfmovie.dto.ScoreDTO;
import com.devsuperior.gfmovie.entities.Movies;
import com.devsuperior.gfmovie.entities.Score;
import com.devsuperior.gfmovie.entities.User;
import com.devsuperior.gfmovie.repositories.MovieRepository;
import com.devsuperior.gfmovie.repositories.ScoreRepository;
import com.devsuperior.gfmovie.repositories.UserRepository;

@Service
public class ScoreService {

		
		@Autowired
		private MovieRepository  movieRepository;
		
		@Autowired
		private UserRepository userRepository;
		
		@Autowired
		private ScoreRepository scoreRepository;
		
		@Transactional
		
		public MovieDTO SaveScore(ScoreDTO dto) {
			
			User user = userRepository.findByEmail(dto.getEmail());
			
			if(user == null) {
				user = new User();
				user.setEmail(dto.getEmail());
				user = userRepository.saveAndFlush(user);
			}
			
			Movies movies = movieRepository.findById(dto.getMovieId()).get();
			
			Score score = new Score();
			score.setMovies(movies);
			score.setUser(user);
			score.setValue(dto.getScore());
			
			score = scoreRepository.saveAndFlush(score);
			
			double sum = 0.0;
			for (Score s : movies.getScores()) {
				
				sum = sum + s.getValue();
			}
			double avg = sum / movies.getScores().size();
			
			movies.setScore(avg);
			movies.setCount(movies.getScores().size());
			
			movies = movieRepository.save(movies);
			
			return new MovieDTO(movies);
		}
}

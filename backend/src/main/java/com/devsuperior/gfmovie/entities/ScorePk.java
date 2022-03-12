package com.devsuperior.gfmovie.entities;

import java.io.Serializable;

import javax.persistence.Embeddable;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

@Embeddable
public class ScorePk implements Serializable {
	
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	@ManyToOne
	@JoinColumn(name = "movie_id")

	private Movies movies;
	
	@ManyToOne
	@JoinColumn(name = "user_id")
	private User user;
	
	public ScorePk(){
		
	}

	public ScorePk(Movies movies, User user) {
		
		this.movies = movies;
		this.user = user;
	}

	public Movies getMovies() {
		return movies;
	}

	public void setMovies(Movies movies) {
		this.movies = movies;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}
	
	
	
}

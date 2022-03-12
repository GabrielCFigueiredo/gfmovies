package com.devsuperior.gfmovie.entities;

import javax.persistence.EmbeddedId;
import javax.persistence.Entity;
import javax.persistence.Table;

@Entity
@Table(name = "tb_score")
public class Score {
	
	@EmbeddedId
	
	private ScorePk id = new ScorePk();
	private Double value;
	
	public Score() {
		
	}
	
	public void setMovies(Movies movies) {
		id.setMovies(movies);
	}
	
	public void setUser(User user) {
		id.setUser(user);
	}

	public Score(ScorePk id, Double value) {
		super();
		this.id = id;
		this.value = value;
	}
	
	

}

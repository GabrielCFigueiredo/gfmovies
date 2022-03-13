package com.devsuperior.gfmovie.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.devsuperior.gfmovie.entities.Score;
import com.devsuperior.gfmovie.entities.ScorePk;

public interface ScoreRepository extends JpaRepository<Score, ScorePk>{

}

package com.devsuperior.gfmovie.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.devsuperior.gfmovie.entities.Movies;

public interface MovieRepository extends JpaRepository<Movies, Long> {

}

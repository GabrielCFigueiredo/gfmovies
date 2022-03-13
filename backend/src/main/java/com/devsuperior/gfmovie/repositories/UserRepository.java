package com.devsuperior.gfmovie.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.devsuperior.gfmovie.entities.User;

public interface UserRepository extends JpaRepository<User, Long> {

	User findByEmail(String email);
	
}

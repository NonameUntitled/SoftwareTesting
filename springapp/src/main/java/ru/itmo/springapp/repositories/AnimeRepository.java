package ru.itmo.springapp.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import ru.itmo.springapp.model.Anime;

@Repository
public interface AnimeRepository extends JpaRepository<Anime, Long> {

}

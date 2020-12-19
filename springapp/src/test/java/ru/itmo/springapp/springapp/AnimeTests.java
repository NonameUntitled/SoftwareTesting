package ru.itmo.springapp.springapp;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import ru.itmo.springapp.model.Anime;

public class AnimeTests {

    @Test
    void animeNameFixTest() {
        Anime anime = new Anime();

        anime.setAnimeName(null);
        Assertions.assertNull(anime.getAnimeName());

        anime.setAnimeName("");
        Assertions.assertEquals("Unknown Anime Name", anime.getAnimeName());

        anime.setAnimeName("noname untitled");
        Assertions.assertEquals("Noname Untitled", anime.getAnimeName());

        anime.setAnimeName("JOJO");
        Assertions.assertEquals("Jojo", anime.getAnimeName());

        anime.setAnimeName("java SPRING DaTaBaSe");
        Assertions.assertEquals("Java Spring Database", anime.getAnimeName());

    }
}

package ru.itmo.springapp.controllers;

import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import ru.itmo.springapp.model.Anime;
import org.springframework.stereotype.Controller;
import ru.itmo.springapp.repositories.AnimeRepository;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.beans.factory.annotation.Autowired;

@Controller
public class AnimeController {

    @Autowired
    private AnimeRepository animeRepository;

    @GetMapping("/animeList")
    public String animeList(Model model) {
        Iterable<Anime> anime = animeRepository.findAll();
        model.addAttribute("anime", anime);
        return "animeList";
    }

    @GetMapping("/animeList/add")
    public String addAnime(Model model) {
        return "animeList-add";
    }

    @PostMapping("/animeList/add")
    public String postAnime(@RequestParam String animeName, @RequestParam String imageUrl, Model model) {
        Anime anime = new Anime(animeName, imageUrl);
        animeRepository.save(anime);
        return "redirect:/animeList";
    }
}

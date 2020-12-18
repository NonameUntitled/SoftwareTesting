package ru.itmo.springapp.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Anime {
    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)
    private Long id;

    private String animeName;

    private String imageUrl;

    public Anime(String animeName, String imageUrl) {
        this.animeName = animeName;
        this.imageUrl = imageUrl;
    }

    public Anime() {

    }

    public String getAnimeName() {
        return animeName;
    }

    public String getImageUrl() {
        return imageUrl;
    }

    public Long getId() {
        return id;
    }

    public void setAnimeName(String animeName) {
        this.animeName = animeName;
    }

    public void setImageUrl(String imageUrl) {
        this.imageUrl = imageUrl;
    }

    public void setId(Long id) {
        this.id = id;
    }
}

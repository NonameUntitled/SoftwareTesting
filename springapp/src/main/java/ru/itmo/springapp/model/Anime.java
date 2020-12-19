package ru.itmo.springapp.model;

import org.thymeleaf.util.StringUtils;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.util.Objects;
import java.util.stream.Stream;

@Entity
public class Anime {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    private String animeName;

    private String imageUrl;

    public Anime() {

    }

    public Anime(String animeName, String imageUrl) {
        this.animeName = animeName;
        this.imageUrl = imageUrl;
        fixAnimeName();
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
        fixAnimeName();
    }

    public void setImageUrl(String imageUrl) {
        this.imageUrl = imageUrl;
    }

    public void setId(Long id) {
        this.id = id;
    }

    private void fixAnimeName() {
        if (Objects.nonNull(animeName)) {
            if (animeName.equals("")) {
                animeName = "Unknown Anime Name";
            }
            animeName = animeNameTitleCase();
        }
    }

    private String animeNameTitleCase() {
        if (StringUtils.length(animeName) == 1) {
            return animeName.toUpperCase();
        }

        StringBuffer resultPlaceHolder = new StringBuffer(animeName.length());

        Stream.of(animeName.split(" ")).forEach(stringPart ->
        {
            if (stringPart.length() > 1)
                resultPlaceHolder.append(stringPart.substring(0, 1)
                        .toUpperCase())
                        .append(stringPart.substring(1)
                                .toLowerCase());
            else
                resultPlaceHolder.append(stringPart.toUpperCase());

            resultPlaceHolder.append(" ");
        });

        return StringUtils.trim(resultPlaceHolder.toString());
    }
}

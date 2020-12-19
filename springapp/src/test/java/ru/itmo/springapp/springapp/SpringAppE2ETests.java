package ru.itmo.springapp.springapp;

import org.junit.jupiter.api.*;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.springframework.transaction.annotation.Transactional;

import java.util.concurrent.TimeUnit;

@Transactional
public class SpringAppE2ETests {
    private WebDriver driver;

    @BeforeEach
    public void setup() {
        System.setProperty("webdriver.chrome.driver", "D:\\University\\SoftwareTesting\\chromedriver.exe");
        driver = new ChromeDriver();
        driver.manage().window().maximize();
        driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
    }

    @AfterEach
    public void punchline() {
        driver.close();
    }

    @Test
    @Transactional
    public void addNewAnimeTest() {

        driver.get("http://localhost:8080/animeList/add");

        driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);

        driver.findElement(By.name("animeName")).sendKeys("My New Anime");
        driver.findElement(By.name("imageUrl")).sendKeys(
                "Broken link"
        );

        driver.findElements(By.xpath("//*[contains(text(), 'Add')]")).get(1).click();

        driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);

        var elementsList = driver.findElements(By.xpath("//*[contains(text(), 'My New Anime')]"));

        Assertions.assertTrue(elementsList.size() > 0);
    }

    @Test
    public void visitGitHubTab() {

        driver.get("http://localhost:8080/");

        driver.findElements(By.xpath("//*[contains(text(), 'GitHub')]")).get(0).click();

        Assertions.assertEquals("https://github.com/NonameUntitled", driver.getCurrentUrl());

    }
}

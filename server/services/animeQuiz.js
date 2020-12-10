module.exports = getAnimeInstance

function getAnimeList() {
    animeQuiz = [
        {
            name: "Gura",
            imageUrl: "http://img0.safereactor.cc/pics/post/full/Virtual-YouTuber-r63-Gawr-Gura-hololive-6189946.jpeg"
        },
        {name: "Kiara", imageUrl: "https://i.redd.it/3ta84174s7o51.png"},
        {
            name: "Calli",
            imageUrl: "https://preview.redd.it/ue1d1cl90wn51.png?width=621&format=png&auto=webp&s=31672bc1aae8a5d61a1e0f24339676100e569d5f"
        },
        {
            name: "Ina",
            imageUrl: "https://preview.redd.it/2hs3rpc4qgn51.png?width=960&crop=smart&auto=webp&s=915e7cf3afa769cb70dc7c5a2d3bcac89d30fbf7"
        },
        {name: "Ame", imageUrl: "https://pbs.twimg.com/media/EhcQsGQU8AAirfS?format=jpg&name=medium"}
    ]

    return animeQuiz
}

function getAnimeInstance(req, res) {
    const instance = createAnimeInstance()
    res.send(instance)
}

function createAnimeInstance() {
    let items = getAnimeList()
    let item = items[Math.floor(Math.random() * items.length)];
    return {
        name: item.name,
        imageUrl: item.imageUrl
    }
}

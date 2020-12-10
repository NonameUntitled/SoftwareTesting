const express = require("express")
const router = express.Router()
const gameService = require("../services/animeQuiz")

router.get("/anime", gameService)

module.exports = router

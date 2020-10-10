"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const AnimeController_1 = tslib_1.__importDefault(require("./controller/AnimeController"));
const animeController = new AnimeController_1.default();
function setupRoutes(app) {
    app.get("/anime", (req, res) => animeController.getAll(req, res));
    app.get("/anime/:id", (req, res) => animeController.getById(req, res));
    app.post("/anime", (req, res) => animeController.insert(req, res));
    app.all('*', (_, res) => res.sendStatus(404));
}
exports.setupRoutes = setupRoutes;
//# sourceMappingURL=routes.js.map
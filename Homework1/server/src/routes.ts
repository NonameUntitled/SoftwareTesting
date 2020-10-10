import { Express, Response } from 'express';
import AnimeController from "./controller/AnimeController";

const animeController = new AnimeController()

export function setupRoutes(app: Express): void {
  app.get("/anime", (req, res) => animeController.getAll(req, res));
  app.get("/anime/:id", (req, res) => animeController.getById(req, res));
  app.post("/anime", (req, res) => animeController.insert(req, res));
  app.all('*',
    (_, res: Response) =>
      res.sendStatus(404)
  );
}

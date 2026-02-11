const { Router } = require("express");
const nikkeController = require("../controllers/nikkeController");

const nikkeRouter = Router();

nikkeRouter.get("/", nikkeController.getNikke);
nikkeRouter.get("/new", nikkeController.createNikkeGet);
nikkeRouter.post("/new", nikkeController.createNikkePost);
nikkeRouter.get("/:id", nikkeController.cardGet);
nikkeRouter.get("/:id/update", nikkeController.updateGet);
nikkeRouter.post("/:id/update", nikkeController.updatePost);
nikkeRouter.post("/:id/delete", nikkeController.deletePost);

module.exports = nikkeRouter;

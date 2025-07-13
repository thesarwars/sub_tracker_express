import { Router } from "express";
import authorize from "../middlewares/auth.middleware.js";
import { getUser, getUsers } from "../controllers/user.controller.js";

const userRouter = Router();

userRouter.get("/", authorize, getUsers);

userRouter.get("/:id", authorize, getUser);

userRouter.post("/", (request, response) =>
  response.send({ title: "CREATE an user" })
);

userRouter.put("/:id", (request, response) =>
  response.send({ title: "UPDATE user" })
);

userRouter.delete("/:id", (request, response) =>
  response.send({ title: "DELETE user" })
);

export default userRouter;

import { Router } from "express";

const subsRouter = Router();

subsRouter.get("/", (request, response) =>
  response.send({ title: "GET all subscriptions" })
);
subsRouter.get("/:id", (request, response) =>
  response.send({ title: "GET subscription details by ID" })
);
subsRouter.post("/", (request, response) =>
  response.send({ title: "CREATE subscription" })
);
subsRouter.put("/:id", (request, response) =>
  response.send({ title: "UPDATE subscription details" })
);
subsRouter.delete("/:id", (request, response) =>
  response.send({ title: "DELETE subscription" })
);
subsRouter.get("/user/:id", (request, response) =>
  response.send({ title: "GET all user subscription" })
);
subsRouter.put("/:id/cancel", (request, response) =>
  response.send({ title: "CANCEL user subscription" })
);
subsRouter.get("/upcoming-renewals", (request, response) =>
  response.send({ title: "GET upcoming renewals" })
);

export default subsRouter;

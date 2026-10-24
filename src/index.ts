import { Elysia } from "elysia";
import { healthRoutes } from "./routes/health";
import { userRoutes } from "./routes/users";

const port = Number(process.env.PORT) || 3000;

const app = new Elysia()
  .get("/", () => ({
    name: "belajar-vibe-coding API",
    status: "running",
    version: "1.0.0",
  }))
  .use(healthRoutes)
  .use(userRoutes)
  .listen(port);

console.log(`🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`);

export type App = typeof app;

import { Elysia, t } from "elysia";
import { db } from "../db";
import { users } from "../db/schema";

export const userRoutes = new Elysia({ prefix: "/users" })
  .get("/", async () => {
    try {
      const allUsers = await db.select().from(users);
      return { success: true, data: allUsers };
    } catch (error: any) {
      return {
        success: false,
        message: "Database not connected or table not migrated yet",
        error: error.message,
      };
    }
  })
  .post(
    "/",
    async ({ body, set }) => {
      try {
        await db.insert(users).values(body);
        set.status = 201;
        return { success: true, message: "User created successfully" };
      } catch (error: any) {
        set.status = 500;
        return { success: false, error: error.message };
      }
    },
    {
      body: t.Object({
        name: t.String(),
        email: t.String(),
      }),
    }
  );

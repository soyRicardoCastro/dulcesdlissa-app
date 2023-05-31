import { db } from "./db";

export async function seed() {
  const createTable = await db.schema
    .createTable("users")
    .ifNotExists()
    .addColumn("user_id", "serial", (col) => col.primaryKey())
    .addColumn("clerk_id", "text")
    .addColumn("is_admin", "boolean", (col) => col.defaultTo(false))
    .execute();

  const addUsers = await db
    .insertInto("users")
    .values([
      {
        isAdmin: true,
        clerk_id: "user_2PoA4U88VMYqRMjFQGzQCrdALWL",
      },
    ])
    .execute();

  return {
    createTable,
    addUsers,
  };
}

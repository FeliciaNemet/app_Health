import knex from "knex";
import type { Contract } from "./types";

const database = knex({
  client: "pg",
  connection: {
    host: process.env.DB_HOST as string,
    port: parseInt(process.env.DB_PORT as string),
    user: process.env.DB_USER as string,
    password: process.env.DB_PASSWORD as string,
    database: process.env.DB_NAME as string,
  },
});

export default database;

import { Knex } from "knex";

declare module "knex/types/tables" {
  interface Tables {
    contracts: Knex.CompositeTableType<
      // This interface will be used for return type and
      // `where`, `having` etc where full type is required
      Contract,
      // This interface is used for "insert" calls.
      Omit<Contract, "id" | "created_at">,
      // This interface is used for "update()" calls.
      Partial<Omit<Contract, "id" | "created_at">>
    >;
  }
}

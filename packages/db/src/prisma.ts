import { PrismaPg } from "@prisma/adapter-pg";
import pg from "pg";
import { PrismaClient } from "../generated/prisma/client.js";

import dotenv from "dotenv";

dotenv.config({
    path:"../../../.env"
})

declare global {
  // eslint-disable-next-line no-var
  var prisma: PrismaClient | undefined;
}

let _client: PrismaClient | undefined;

export function getPrisma(): PrismaClient {
  if (_client) return _client;

  const connectionString = process.env.DATABASE_URL;
  console.log("this is teh DBURL",connectionString);
  if (!connectionString) {
    throw new Error(
      "[prisma] DATABASE_URL is not set. Ensure dotenv is loaded before the first DB call."
    );
  }

  const pool = new pg.Pool({ connectionString });
  const adapter = new PrismaPg(pool);

  _client = global.prisma ?? new PrismaClient({ adapter });

  if (process.env.NODE_ENV !== "production") {
    global.prisma = _client;
  }

  return _client;
}

export { getPrisma as prisma };

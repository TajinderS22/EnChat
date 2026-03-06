import { PrismaPg } from "@prisma/adapter-pg";
import pg from "pg";
import { createRequire } from "module";
import { fileURLToPath } from "url";
import path from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const _require = createRequire(import.meta.url);
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const { PrismaClient } = _require(
  path.resolve(__dirname, "../../generated/client/index.js")
) as any;

// eslint-disable-next-line no-var
declare global {
  // eslint-disable-next-line no-var
  var prisma: InstanceType<typeof PrismaClient> | undefined;
}

let _client: InstanceType<typeof PrismaClient> | undefined;

export function getPrisma(): InstanceType<typeof PrismaClient> {
  if (_client) return _client;

  const connectionString = process.env.DATABASE_URL;
  if (!connectionString) {
    throw new Error("[prisma] DATABASE_URL is not set. Ensure dotenv is loaded before the first DB call.");
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

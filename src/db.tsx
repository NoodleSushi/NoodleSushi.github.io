import { createDbWorker } from "sql.js-httpvfs";

const workerUrl = new URL(
  "sql.js-httpvfs/dist/sqlite.worker.js",
  import.meta.url
);
const wasmUrl = new URL("sql.js-httpvfs/dist/sql-wasm.wasm", import.meta.url);
const worker = await createDbWorker(
  [
    {
      from: "jsonconfig",
      configUrl: "https://noodlesushi.github.io/db/config.json",
    },
  ],
  workerUrl.toString(),
  wasmUrl.toString()
);


export type Game = {
  game_id: number;
  title: string;
  cart_img: string;
  repo_url: string;
  pub_date: string;
};

export const queryGames = async () => {
  const result = await worker.db.query(`select * from games`) as Game[];
  return result;
};

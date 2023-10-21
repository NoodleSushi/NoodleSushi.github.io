import { WorkerHttpvfs, createDbWorker } from "sql.js-httpvfs";
import { SplitFileConfig } from "sql.js-httpvfs/dist/sqlite.worker";

declare global {
  interface Window {
    _worker?: WorkerHttpvfs;
  }
}

const dbUrl = import.meta.env.VITE_DB_URL;
const config: SplitFileConfig = /\.json$/.test(dbUrl) ? {
  from: "jsonconfig",
  configUrl: dbUrl,
} : {
  from: "inline",
  config: {
    serverMode: "full",
    requestChunkSize: 4096,
    url: dbUrl,
  },
};


let creatingWorker = false;

async function getWorker() {
  if (window._worker) return window._worker;

  if (creatingWorker) {
    return new Promise<WorkerHttpvfs>((resolve) => {
      function waitForWorker() {
        setTimeout(() => {
          if (window._worker) {
            resolve(window._worker);
            return;
          }
          waitForWorker();
        }, 50);
      }
      waitForWorker();
    });
  }

  creatingWorker = true;
  
  async function createWorker() {
    const worker = await createDbWorker(
      [config],
      "/assets/sqlite.worker.js",
      "/assets/sql-wasm.wasm",
    );
    return worker;
  }

  window._worker = await createWorker();
  return window._worker;
}

export async function query(query: string, ...params: (string | number)[])
{
  const worker = await getWorker();
  const results = await worker.db.query(query, params);
  return results;
}

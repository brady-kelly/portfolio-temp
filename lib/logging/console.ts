/* eslint-disable @typescript-eslint/no-explicit-any */
import * as util from "node:util";
import { utilLogEnabled } from "../config/runtime";

export function utilLog(data: any, message?: string, force?: boolean) {
  if (utilLogEnabled || force) {
    if (message) console.log(`Logging: ${message}`);
    console.log(util.inspect(data, { depth: null }));
  }
}

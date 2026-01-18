/* eslint-disable @typescript-eslint/no-explicit-any */
import * as util from "node:util";
import { utilLogEnabled } from "../config/runtime";

export function utilLog(data: any) {
  if (!utilLogEnabled) return;
  console.log(util.inspect(data, { depth: null }));
}

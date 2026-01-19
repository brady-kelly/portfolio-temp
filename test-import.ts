import { getBasics } from "./lib/resume/basics/actions";
import { utilLog } from "./lib/logging/console";

(async () => {
  const res = await getBasics("data/jsonResume.json");
  if (!res.success) {
    utilLog(res.error, undefined);
    return;
  }
  utilLog(res.data, undefined, true);
})();

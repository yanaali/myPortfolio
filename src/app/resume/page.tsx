import { createHash } from "node:crypto";
import { readFileSync } from "node:fs";
import { join } from "node:path";
import ResumeView from "./resume-view";
import { config } from "@/data/config";

// A new PDF gets a new URL on the next deployment, including in browsers that
// still have a previous version cached. Both the viewer and download share it.
const resumeVersion = createHash("sha256")
  .update(readFileSync(join(process.cwd(), "public", config.resume)))
  .digest("hex")
  .slice(0, 12);

export const metadata = {
  title: `Resume | ${config.author}`,
  description: `Resume of ${config.author}, software developer and Western University Computer Science student.`,
};
export default function ResumePage() {
  return <ResumeView src={`${config.resume}?v=${resumeVersion}`} />;
}

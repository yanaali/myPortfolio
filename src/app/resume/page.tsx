import ResumeView from "./resume-view";
import { config } from "@/data/config";
export const metadata = {
  title: `Resume | ${config.author}`,
  description: `Resume of ${config.author}, software developer and Western University Computer Science student.`,
};
export default function ResumePage() { return <ResumeView />; }

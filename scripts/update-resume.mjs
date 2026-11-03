import { readFile, writeFile, rename, rm } from "node:fs/promises";
import { resolve } from "node:path";
import { fileURLToPath } from "node:url";

const destination = fileURLToPath(
  new URL("../public/Aaliyan_Muhammad_Resume.pdf", import.meta.url),
);

async function updateResume() {
  const [source, ...extraArguments] = process.argv.slice(2);
  if (!source || extraArguments.length > 0) {
    throw new Error('Usage: npm run resume:update -- "path/to/new-resume.pdf"');
  }

  const pdf = await readFile(resolve(source));
  if (
    pdf.subarray(0, 5).toString("ascii") !== "%PDF-" ||
    !pdf.subarray(-1024).includes(Buffer.from("%%EOF"))
  ) {
    throw new Error("The source must be a complete PDF. The existing resume was kept.");
  }

  const current = await readFile(destination).catch((error) => {
    if (error.code !== "ENOENT") throw error;
    return null;
  });
  if (current?.equals(pdf)) {
    console.log("The portfolio resume is already up to date.");
    return;
  }

  const temporaryFile = `${destination}.${process.pid}.tmp`;
  try {
    await writeFile(temporaryFile, pdf, { flag: "wx" });
    await rename(temporaryFile, destination);
  } finally {
    await rm(temporaryFile, { force: true });
  }

  console.log("Updated public/Aaliyan_Muhammad_Resume.pdf.");
  console.log("Commit and push this file to publish it through Vercel.");
}

updateResume().catch((error) => {
  console.error(`Resume update failed: ${error.message}`);
  process.exitCode = 1;
});

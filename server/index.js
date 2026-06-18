#!/usr/bin/env node

import { execa } from "execa";
import fs from "fs";

const projectName = process.argv[2];

if (!projectName) {
  console.log("❌ Please provide project name");
  process.exit(1);
}

console.log(`🚀 Creating server project: ${projectName}`);

// Create folder
fs.mkdirSync(projectName);

// Initialize npm inside folder
await execa("npm", ["init", "-y"], {
  cwd: `./${projectName}`,
  stdio: "inherit",
});

// Install dependencies
console.log("📦 Installing backend dependencies...");

await execa("npm", [
  "install",
  "express",
  "mongodb",
  "cors",
  "dotenv"
], {
  cwd: `./${projectName}`,
  stdio: "inherit",
});

console.log("✅ Backend setup complete!");
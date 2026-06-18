#!/usr/bin/env node

import { execa } from "execa";

const projectName = process.argv[2];

if (!projectName) {
  console.log("❌ Please provide a project name");
  process.exit(1);
}

console.log(`🚀 Creating project: ${projectName}`);

// Step 1: create Next.js app
await execa("npx", ["create-next-app@latest", projectName], {
  stdio: "inherit",
});

// Step 2: install your full dependency stack
console.log("📦 Installing full stack dependencies...");

await execa("npm", [
  "install",
  "@better-auth/mongo-adapter",
  "@gravity-ui/icons",
  "@heroui/react",
  "@heroui/styles",
  "@stripe/stripe-js",
  "better-auth",
  "lucide-react",
  "mongodb",
  "motion",
  "stripe"
], {
  cwd: `./${projectName}`,
  stdio: "inherit",
});

console.log("✅ All dependencies installed successfully!");
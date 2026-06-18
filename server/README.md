# 🖥️ sayed-web-server

> **One command. Express + MongoDB backend — ready to build.**

`sayed-web-server` is a CLI scaffolding tool that spins up a production-ready Node.js backend project pre-loaded with a curated server-side dependency set — routing, database, CORS, and environment config — all in a single command.

### Install

```bash
npx sayed-web-server my-server
```

---

## ✨ What It Does

Running `sayed-web-server` will:

1. Create a new project folder with your chosen name
2. Initialize a fresh **npm** project (`npm init -y`)
3. Automatically install a **backend dependency suite** into the new project

No manual setup. No boilerplate hunting. Just run and build.

---

## 📦 Bundled Dependencies

| Package | Purpose |
|---|---|
| `express` | Fast, minimal web framework for Node.js |
| `mongodb` | Official MongoDB driver |
| `cors` | Cross-Origin Resource Sharing middleware |
| `dotenv` | Environment variable management via `.env` |

---

## 🛠️ Installation & Usage

### Prerequisites

- **Node.js** v18 or higher
- **npm** v7 or higher

### Usage

```bash
npx sayed-web-server my-server
```

Replace `my-server` with your desired project name. The CLI will:

- Create a new folder named `my-server`
- Initialize npm inside it
- Install all bundled backend dependencies automatically

That's it. Start building your API immediately.

---

## 📁 Project Structure

After running the command, your project will be ready with all dependencies installed:

```
my-server/
├── node_modules/       # All dependencies pre-installed
└── package.json
```

---

## 🔧 Tech Stack Overview

This CLI is built for developers who want to ship a clean backend fast with:

- **Express** — Lightweight, battle-tested REST API framework
- **MongoDB** — NoSQL database with flexible document model
- **CORS** — Handles cross-origin requests out of the box
- **dotenv** — Keeps secrets and config out of your codebase

---

## 📋 Package Info

```json
{
  "name": "sayed-web-server",
  "version": "1.0.0",
  "type": "module",
  "bin": {
    "sayed-web-server": "./index.js"
  }
}
```

---

## 🔄 Changelog

| Version | Notes |
|---|---|
| `1.0.0` | Initial release |

---

## 👨‍💻 Author

**Md. Sayed**
Junior MERN Stack Developer 

[![npm](https://img.shields.io/npm/v/sayed-web-server?color=red&label=npm)](https://www.npmjs.com/package/sayed-web-server)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

---

## 📄 License

MIT © Md. Sayed
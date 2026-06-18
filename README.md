# 🛠️ sayed-web-stack

> **Two commands. One complete MERN stack — frontend and backend, ready to ship.**

`sayed-web-stack` is a monorepo containing **two CLI scaffolding tools** that together bootstrap a full MERN stack application in minutes — a Next.js frontend with full-stack dependencies, and an Express + MongoDB backend, each with a single `npx` command.

[![npm - client](https://img.shields.io/npm/v/sayed-web-client?color=blue&label=sayed-web-client)](https://www.npmjs.com/package/sayed-web-client)
[![npm - server](https://img.shields.io/npm/v/sayed-web-server?color=green&label=sayed-web-server)](https://www.npmjs.com/package/sayed-web-server)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

---

## 📁 Monorepo Structure

```
sayed-web-stack/
├── client/          # sayed-web-client — Next.js CLI scaffolder
│   ├── index.js
│   └── package.json
└── server/          # sayed-web-server — Express CLI scaffolder
    ├── index.js
    └── package.json
```

---

## 🚀 Quick Start

Spin up your entire stack in two commands:

```bash
# 1. Scaffold the frontend
npx sayed-web-client my-app

# 2. Scaffold the backend
npx sayed-web-server my-app-server
```

That's it. No manual installs. No config hunting. Start building immediately.

---

## 📦 Packages

### 🖥️ `sayed-web-client` — Frontend

Bootstraps a production-ready **Next.js** project with a complete full-stack dependency suite pre-installed.

```bash
npx sayed-web-client my-project
```

**What it does:**
1. Creates a fresh Next.js app via `create-next-app@latest`
2. Installs the full frontend + integration dependency set

| Package | Purpose |
|---|---|
| `better-auth` | Modern, flexible authentication framework |
| `@better-auth/mongo-adapter` | MongoDB adapter for Better Auth |
| `mongodb` | Official MongoDB driver |
| `stripe` | Stripe server-side SDK for payments |
| `@stripe/stripe-js` | Stripe client-side SDK |
| `@heroui/react` | Beautiful, accessible React UI components |
| `@heroui/styles` | Styling utilities for HeroUI |
| `@gravity-ui/icons` | Rich icon library |
| `lucide-react` | Clean, consistent icon set for React |
| `motion` | Production-ready animations (formerly Framer Motion) |

**Project structure after scaffolding:**
```
my-project/
├── app/
├── public/
├── node_modules/
├── package.json
└── next.config.js
```

---

### ⚙️ `sayed-web-server` — Backend

Bootstraps a production-ready **Express + MongoDB** backend project from scratch.

```bash
npx sayed-web-server my-server
```

**What it does:**
1. Creates a new project folder
2. Initializes npm (`npm init -y`)
3. Installs the full backend dependency set

| Package | Purpose |
|---|---|
| `express` | Fast, minimal web framework for Node.js |
| `mongodb` | Official MongoDB driver |
| `cors` | Cross-Origin Resource Sharing middleware |
| `dotenv` | Environment variable management via `.env` |

**Project structure after scaffolding:**
```
my-server/
├── node_modules/
└── package.json
```

---

## 🔧 Full Stack Overview

| Layer | Technology |
|---|---|
| **Frontend Framework** | Next.js (App Router) |
| **Authentication** | Better Auth + MongoDB Adapter |
| **Database** | MongoDB |
| **Payments** | Stripe (client + server) |
| **UI Components** | HeroUI + Lucide + Gravity UI Icons |
| **Animations** | Motion (Framer Motion) |
| **Backend** | Express.js |
| **API Config** | CORS + dotenv |

---

## 🔄 Changelog

| Package | Version | Notes |
|---|---|---|
| `sayed-web-client` | `1.0.2` | Latest stable |
| `sayed-web-server` | `1.0.0` | Initial release |

---

## 👨‍💻 Author

**Md. Sayed**
Junior MERN Stack Developer

---

## 📄 License

MIT © Md. Sayed
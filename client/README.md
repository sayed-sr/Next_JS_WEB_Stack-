# 🚀 sayed-web-stack

> **One command. Full-stack Next.js — ready to build.**

`sayed-web-client` is a CLI scaffolding tool that spins up a production-ready Next.js project pre-loaded with a carefully curated full-stack dependency set — authentication, database, payments, UI, and animations — all in a single command.

### Install

```bash
npx sayed-web-client my-project
```
---

## ✨ What It Does

Running `sayed-web-client` will:

1. Bootstrap a fresh **Next.js** project using `create-next-app@latest`
2. Automatically install a **full-stack dependency suite** into the new project

No manual `npm install`. No hunting for package names. Just run and build.

---

## 📦 Bundled Dependencies

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

---

## 🛠️ Installation & Usage

### Prerequisites

- **Node.js** v18 or higher
- **npm** v7 or higher

### Usage

```bash
npx sayed-web-client my-project
```

Replace `my-project` with your desired project name. The CLI will:

- Create a new Next.js app in a folder named `my-project`
- Install all bundled dependencies automatically

That's it. Start building immediately.

---

## 📁 Project Structure

After running the command, your project will follow the standard Next.js structure with all dependencies pre-installed:

```
my-project/
├── app/
├── public/
├── node_modules/       # All dependencies pre-installed
├── package.json
├── next.config.js
└── ...
```

---

## 🔧 Tech Stack Overview

This CLI is built for developers who want to ship fast with:

- **Next.js** — React framework with App Router support
- **Better Auth + MongoDB** — Full authentication with database persistence
- **Stripe** — End-to-end payment integration (client + server)
- **HeroUI + Lucide + Gravity UI Icons** — Complete UI toolkit
- **Motion** — Smooth, performant animations

---

## 📋 Package Info

```json
{
  "name": "sayed-web-client",
  "version": "1.0.2",
  "type": "module",
  "bin": {
    "sayed-web-client": "./index.js"
  }
}
```

---

## 🔄 Changelog

| Version | Notes |
|---|---|
| `1.0.2` | Latest stable release |
| `1.0.0` | Initial release |

---

## 👨‍💻 Author

**Md. Sayed **
Junior MERN Stack Developer · IEEE DIU Student Branch · Embedded Systems Research Center, DIU

[![npm](https://img.shields.io/npm/v/sayed-web-client?color=red&label=npm)](https://www.npmjs.com/package/sayed-web-client)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

---

## 📄 License

MIT © Md. Sayed 
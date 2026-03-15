# THE MOON

Modern, high-performance news website built with **Next.js App Router**, **TypeScript**, **Tailwind CSS**, **shadcn/ui**, and **next-themes**.

## Quick start

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Create this project from scratch

```bash
npx create-next-app@latest . --typescript --tailwind --eslint --app --import-alias "@/*"
npm install next-themes lucide-react framer-motion class-variance-authority clsx tailwind-merge
npx shadcn-ui@latest init
npx shadcn-ui@latest add button card badge input textarea skeleton
```

## Production

```bash
npm run build
npm run start
```

Deploy directly to Vercel (zero config changes needed).

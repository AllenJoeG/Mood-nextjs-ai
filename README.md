# mood/\doom

Inspired and built forward from Scott Moss' course 'Next.js + AI' on Front End Masters. This repo was initialized and built by Joe Allen over two-days in-person at Front End Masters' downtown Minneapolis studio, with continued development and tinkering.

## Stack

<a href="https://nextjs.org/docs"><img src="https://seeklogo.com/images/N/next-js-icon-logo-EE302D5DBD-seeklogo.com.png" height="40px" width="40px" /></a><a href="https://reactjs.org/"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" height="40px" width="40px" /></a><a href="https://nodejs.org/en/"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg" height="40px" width="40px" /></a><a href="https://tailwindcss.com/"><img src="https://icons.iconarchive.com/icons/pictogrammers/material/256/tailwind-icon.png" height="40px" width="40px" /></a><a href="https://planetscale.com/docs"><img src="https://seeklogo.com/images/P/planetscale-logo-0EEA8CAEB4-seeklogo.com.png" height="40px" width="40px" /></a><a href="https://www.prisma.io/docs"><img src="https://cdn.icon-icons.com/icons2/2148/PNG/512/prisma_icon_132076.png" height="40px" width="40px" /></a><a href="https://clerk.com/docs"><img src="https://images.g2crowd.com/uploads/product/image/social_landscape/social_landscape_c58d5fd4ba449e621bdcd01ac1f00976/clerk-dev.png" height="40px" width="40px" /></a>

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

# Database layer

Pscale db and Prisma orm working together

## Pscale

brew install planetscale/tap/pscale
pscale auth login
pscale branch create mood dev
( targets db name 'mood' and branchname 'dev')
pscale connect mood dev --port 3309
(connects to db branch port (3309 default MySql))

## Prisma

npm install @prisma/client
npm install prisma --save-dev
npx prisma init
npx prisma db push
(loads env variable from .env, loads schema from schema.prisma, syncs, generates sdk automatically that matches )
npx prisma format
(cleans it up)
npx prisma studio
(opens database app on localhost 5555)

## react-autosave

npm install react-autosave

## LLM, GPT

## langchain.js

Python and Javascript versions
npm install langchain

## zod

npm i zod
(schema library)

## recharts.js

npm install recharts

## Testing

npm install @testing-library/jest-dom @testing-library/react vitest @vitejs/plugin-react-swc jsdom
grab from repo: vite.config.ts, tsconfig.node.json,

## Deployment to Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

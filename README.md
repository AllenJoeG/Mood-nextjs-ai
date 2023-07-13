# mood/\doom

Inspired and built forward from Scott Moss' course 'Next.js + AI' on Front End Masters.

This project leverages multiple cloud-based technologies in the stack, notably Clerk for auth and Planetscale for the database.

This repo was initialized (June 2023) and built by Joe Allen over two-days in-person at Front End Masters' downtown Minneapolis studio, with continued development and tinkering since.

## Stack

<a href="https://nextjs.org/docs"><img src="https://seeklogo.com/images/N/next-js-icon-logo-EE302D5DBD-seeklogo.com.png" height="40px" width="40px" /></a><a href="https://reactjs.org/"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" height="40px" width="40px" /></a><a href="https://nodejs.org/en/"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg" height="40px" width="40px" /></a><a href="https://tailwindcss.com/"><img src="https://shadowblood.gallerycdn.vsassets.io/extensions/shadowblood/tailwind-moon/3.0.2/1673948732518/Microsoft.VisualStudio.Services.Icons.Default" height="40px" width="40px" /></a><a href="https://planetscale.com/docs"><img src="https://seeklogo.com/images/P/planetscale-logo-0EEA8CAEB4-seeklogo.com.png" height="40px" width="40px" /></a><a href="https://www.prisma.io/docs"><img src="https://cdn.icon-icons.com/icons2/2148/PNG/512/prisma_icon_132076.png" height="40px" width="40px" /></a><a href="https://clerk.com/docs"><img src="https://images.g2crowd.com/uploads/product/image/social_landscape/social_landscape_c58d5fd4ba449e621bdcd01ac1f00976/clerk-dev.png" height="40px" width="40px" /></a><a href="https://docs.langchain.com/docs/"><img src="https://blog.langchain.dev/content/images/size/w256h256/2023/01/parroticon-1.png" height="40px" width="40px" /></a>

Server and Client React/Next.js components, Node.js runtime, Prisma/Planetscale Data layer, Clerk auth, Prompt engineering with langchain.js and zod, OpenAI API.
Additional libraries include: react-autosave, recharts.js, vite, vitest, jest

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).
This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

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

## Various CLI commands of note

### Pscale

- brew install planetscale/tap/pscale
- pscale auth login
- pscale branch create mood dev
  ( targets db name 'mood' and branchname 'dev')
- pscale connect mood dev --port 3309
  (connects to db branch port (3309 default MySql))

### Prisma

- npm install @prisma/client
- npm install prisma --save-dev
- npx prisma init
- npx prisma db push
  (loads env variable from .env, loads schema from schema.prisma, syncs, generates sdk automatically that matches )
- npx prisma format
  (cleans it up)
- npx prisma studio
  (Web-based GUI database app on localhost 5555)

## Testing

npm install @testing-library/jest-dom @testing-library/react vitest @vitejs/plugin-react-swc jsdom

## Deployment to Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

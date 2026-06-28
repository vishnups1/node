# api

```bash
yarn -v

→ yarn config get cacheFolder # This is the global yarn cache
/Users/$USER/.yarn/berry/cache
```


```bash
mkdir api && cd api
```

```bash
yarn init -y
```

```bash
yarn add express && yarn add -D typescript @types/node @types/express tsx
```

```bash
yarn tsc --init
```

- Where did the packages go?

Instead of downloading thousands of files and duplicating them into a massive, heavy node_modules folder for every single project, Modern Yarn does something much smarter:

1. It downloads your dependencies as highly compressed .zip files and keeps them in a single, central global cache on your computer.

2. Instead of copy-pasting those files into your project, Yarn generates a single text file in your project called .pnp.cjs.

3. Think of .pnp.cjs as a perfect digital map. When your code says import express from 'express', Yarn intercepts that request and tells Node.js: "Hey, don't look for a local folder. Go look inside this exact zip file in the global cache."

4. .pnp stands for Plug'n'Play.

- What is tsx?

In short, tsx is a tool that lets you execute TypeScript files directly in Node.js, instantly, with zero manual compilation.

Normally, the Node.js runtime has a major limitation: it only understands JavaScript. It has absolutely no idea what to do with a .ts file.

Without tsx, running a TypeScript file is a tedious, two-step process:

- You have to run the TypeScript compiler (tsc) to translate your .ts file into a .js file.
- You have to run node on that newly created .js file.

When you run yarn dev (which executes tsx watch src/index.ts), tsx intercepts your TypeScript code, compiles it in memory on the fly using an incredibly fast builder called esbuild, and hands it straight to Node.js to run. To you, it feels like Node.js is running TypeScript natively.

Because you are using Modern Yarn's Plug'n'Play (no node_modules) mode, tsx is doing double duty:

- It is compiling your TypeScript code into JavaScript in milliseconds.
- It is reading Yarn's .pnp.cjs map so it knows exactly how to find Express inside your global cache without needing a node_modules folder.

> What is .mjs and .cjs?

- `.cjs` CommonJavaScript

This is the legacy, traditional module system built specifically for Node.js back in 2009. For a long time, it was the only way to break Node.js code into multiple files.

- `.mjs` ModuleJavaScript

This is the official, modern standard created by the official JavaScript standards committee. It is supported natively by all modern web browsers and newer versions of Node.js.
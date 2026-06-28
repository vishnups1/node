A folder with a bunch of modules is just a directory until you add a package.json file to it.

In Node.js, a Package is defined as a directory (folder) that contains:

1. One or more modules (your .js files).
2. A package.json file at the root.

Think of the package.json file as the ID card or the manifest for that folder. It tells Node.js the name of the package, its version, who wrote it, and what other packages it needs to run. Without that file, it's just an organized folder of code. With it, it's a package that can be shared, versioned, and published for others to use.

Run `npm init` to create a package.

```json
{
  "name": "pi",
  "version": "1.0.0",
  "description": "don't forget value of pi!",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "vishnups1",
  "license": "ISC"
}
```

```bash
npm install express
```

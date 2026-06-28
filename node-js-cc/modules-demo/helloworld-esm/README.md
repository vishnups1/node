## ES Modules

By default, Node.js treats .js files as CommonJS. If you try to use import right now in your project, Node will throw an error.

To turn on ES Modules, you just need to open your project's `package.json` file and add one line:

```json
{
  "name": "my-app",
  "version": "1.0.0",
  "type": "module"
}
```

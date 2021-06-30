# Describe the bug

The sourcemaps do not work for libraries.
There are two packages in the monorepo :

- component-lib : the library containing the react component named "Button". react typescript library. built by vite in library mode.
- my-app : application consuming the component "Button" from the library. react typescript application built by vite

If I start the developpement server of 'my-app' and I put a breakpoint in google chrome in the code of Button.tsx (in the onClick callback), then code never stops on the breakpoint

If I build 'my-app' and serve the builded code (vite preview), I can't put a breakpoint for the Button component. It seems that there are no sourcemap loaded for the package "component-lib"

# Reproduction

check out code

## For dev server :

```shell
npm install -g @microsoft/rush

rush build

cd my-packages/my-app

rushx dev
```

Launch google chrome, in devtools set a break point in the file Button.tsx line 9 and click on the button "click here" in the web page. (break point inside "onClick" function)

## For dev server :

if not already done

```shell
npm install -g @microsoft/rush
```

Then

```shell
rush build

cd my-packages/my-app

rushx dev
```

# Aditional information

In the library (my-packages/component-lib/vite.config.ts),
the setting is minify: "esbuild", also tried with true, false and "terser". For all it doesn't work.
with minify: false, the sourcemap for the library in my-app in developpement server are "empty" are not loaded.

With the case minify: "esbuild",
the sourcemaps in
`my-packages/component-lib/dist/component-lib.es.js.map` seem to be coherent with the file `my-packages/component-lib/dist/component-lib.es.js`

But the sourcemaps served by the dev server of "my-app" seem to be not coherent with the modified file `component-lib.es.js` served by the dev server.

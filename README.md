# React Context Example

Context提供了一个局部的全局作用域，使用Context则无需再手动的逐层传递props。React.createContext提供的Provider和Consumer。    
函数组件：React.createContext提供的Provider和useContext钩子.   
Class组件：React.createContext提供的Provider和class的contextType属性.   

## swc
SWC全称为Speed Web Compiler，其是基于Rust实现的工具，目前被很多前端知名项目（Next.js、Parcel和Deno）所使用。

## esbuild
esbuild基于Golang开发的一款打包构建工具，相比传统的打包构建工具，主打性能优势，在构建速度上可以快 10~100 倍。

## vite
基于浏览器原生ESM支持实现的no-bundle构建工具

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list

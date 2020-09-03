# react-library-template

This template is assuming to use React framework !

### Need to change

```
- ./rollup.config.js : change variable 'bundleName' value
- ./dist/index.js : change string 'customLibrary'. recommend to change same like variable 'bundleName' value

- ./rollup.config.js : 'external' value inside 'common' function
- ./rollup.config.js : `globals` value inside 'outputs' property. variable 'globals' is for umd foramtting.

- ./package.json, ./dist/package.json : 'author'
```

# Memo what I studied

I Learned it through youtube video

ref: https://www.youtube.com/playlist?list=PLcCp4mjO-z99IPNCrhEyrZimdUG5QXjPd

#### Modern Project

- Version Control
- Automated CI / CD
- Code quality
- Tooling
- Module support
- Documented API
- Demos

#### Build Process

Automated sequence of tasks that runs on each push, tag, and/or release.

1. install
   - clean install - `npm ci`
   - security audit - `npm audit`
2. lint
   - linter - `eslint` / `stylelint`
   - formatter `prettier`
3. test
   - test suite - `jest` / `mocha` / `ava`
   - code coverage - `nyc` / `codecov` / `coveralls`
4. build
   - transpile - `babel` / `typescript` / `flow`
   - pre-process(coopile, auto-prefix, etc.) - `sass` / `less` / `postcss`
   - uglify(minify, mingle, optimize, etc.) - `uglify-js` / `terser`
   - bundle(concat, tree-shake, etc.) - `webpack` / `rollup` / `parcel`
   - compress (gzip, etc.)
   - other
     - copy / delete / move files
     - check bundle size
     - strip unused code (ts / flow / prototypes)
5. push
   - release - `github` / `bitbucket` / `gitlab`
   - publish - `npm` / `other registry`
6. deploy
   - host - `heroku` / `surge` / `github-pages`

## License
[MIT](https://choosealicense.com/licenses/mit/)

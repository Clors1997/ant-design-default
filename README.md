# vue-design-default

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Run your unit tests
```
yarn test:unit
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### VSCODE PLUGINS
vetur eslink pretter

### example vscode config
{
    "[vue]": {
        "editor.defaultFormatter": "dbaeumer.vscode-eslint"
    },
    "eslint.format.enable": true,
    "vetur.validation.template": false,
    "vetur.format.defaultFormatterOptions": {
        "js-beautify-html": {
            "wrap_attributes": "force-expand-multiline"
        },
        "prettyhtml": {
            "printWidth": 100,
            "singleQuote": false,
            "wrapAttributes": false,
            "sortAttributes": false
        }
    },
    "workbench.colorTheme": "Solarized Light",
    "window.zoomLevel": 1,
    "[javascript]": {
        "editor.defaultFormatter": "dbaeumer.vscode-eslint"
    },
    "editor.tabSize": 2,
    "files.eol": "\n",
    "vetur.format.enable": false,
    "vetur.format.defaultFormatter.js": "prettier-eslint",
    "editor.fontSize": 12,
    "editor.multiCursorModifier": "ctrlCmd",
    "vetur.completion.autoImport": false,
    "eslint.runtime": ""
}
